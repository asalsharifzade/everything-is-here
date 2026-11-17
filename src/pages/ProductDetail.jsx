import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { formatPrice, getProduct, products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-indigo-600 hover:underline">Back to Shop</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    addToCart(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <div>
      <Link to="/shop" className="text-sm font-medium text-indigo-600 hover:underline">← Back to Shop</Link>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <img src={product.image} alt={product.name} className="h-80 w-full rounded-xl object-cover sm:h-96" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">{product.category}</p>
          <h1 className="mt-1 text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-gray-600">★ {product.rating} · {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
          <p className="mt-4 text-3xl font-bold text-gray-900">{formatPrice(product.price)}</p>
          <p className="mt-4 leading-relaxed text-gray-700">{product.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm font-medium">
              Quantity
              <input
                type="number"
                min="1"
                max={product.stock}
                value={qty}
                onChange={(e) => setQty(Math.max(1, Math.min(product.stock, Number(e.target.value) || 1)))}
                className="w-20 rounded-lg border px-3 py-2"
              />
            </label>
            <button onClick={handleAdd} disabled={product.stock === 0} className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-50">
              Add to Cart
            </button>
            <Link to="/cart" className="rounded-lg border px-5 py-3 font-semibold text-gray-700 hover:border-indigo-600">View Cart</Link>
          </div>
          {added && <p className="mt-3 rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-700">Added {qty} × {product.name} to your cart.</p>}
          <p className="mt-4 text-sm text-gray-500">Free shipping on orders over $50 · 30-day returns on unused items.</p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}
