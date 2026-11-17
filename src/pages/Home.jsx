import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { categories, products } from '../data/products.js'

const categoryImages = {
  Electronics: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80',
  Fashion: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80',
  'Home & Living': 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80',
  Beauty: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
  'Sports & Outdoors': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
}

export default function Home() {
  const featured = [...products].sort((a, b) => b.rating - a.rating).slice(0, 8)
  return (
    <div>
      <section className="rounded-2xl bg-indigo-600 px-6 py-12 text-white sm:px-12 sm:py-16">
        <h1 className="max-w-2xl text-3xl font-bold sm:text-5xl">Everything Is Here</h1>
        <p className="mt-4 max-w-xl text-lg text-indigo-100">
          One store for everything you need — electronics, fashion, home &amp; living, beauty, and sports. Quality products, fair prices, and fast delivery.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/shop" className="rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-50">Shop All Products</Link>
          <Link to="/about" className="rounded-lg border border-white px-5 py-3 font-semibold text-white hover:bg-indigo-500">Our Story</Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <Link key={c} to={`/shop?category=${encodeURIComponent(c)}`} className="group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md">
              <img src={categoryImages[c]} alt={c} loading="lazy" className="h-32 w-full object-cover" />
              <p className="p-3 text-center text-sm font-semibold text-gray-900 group-hover:text-indigo-600">{c}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link to="/shop" className="text-sm font-medium text-indigo-600 hover:underline">View all →</Link>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-amber-50 px-6 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Free shipping on orders over $50</h2>
        <p className="mt-2 text-gray-600">Plus 30-day returns on unused items. No code needed — the discount applies automatically at checkout.</p>
        <Link to="/shop" className="mt-4 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">Start Shopping</Link>
      </section>
    </div>
  )
}
