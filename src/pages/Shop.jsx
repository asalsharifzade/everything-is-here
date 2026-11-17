import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { categories, products } from '../data/products.js'

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get('category') || 'All'
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [sort, setSort] = useState('featured')

  const filtered = useMemo(() => {
    let list = products.filter((p) => (category === 'All' || p.category === category))
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    }
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [query, category, sort])

  const chooseCategory = (c) => {
    setCategory(c)
    if (c === 'All') setParams({})
    else setParams({ category: c })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
      <p className="mt-1 text-gray-600">{filtered.length} of {products.length} products</p>

      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products…"
          aria-label="Search products"
          className="w-full rounded-lg border px-4 py-2 md:max-w-sm"
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products" className="rounded-lg border px-4 py-2">
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {['All', ...categories].map((c) => (
          <button
            key={c}
            onClick={() => chooseCategory(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${category === c ? 'bg-indigo-600 text-white' : 'border bg-white text-gray-700 hover:border-indigo-600'}`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-xl border bg-white p-8 text-center text-gray-600">No products match your search. Try a different keyword or category.</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  )
}
