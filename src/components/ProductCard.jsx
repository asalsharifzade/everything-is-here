import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  return (
    <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} loading="lazy" className="h-48 w-full object-cover" />
      </Link>
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1 font-semibold text-gray-900 hover:text-indigo-600">{product.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500">
          ★ {product.rating} · {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
          <button
            onClick={() => addToCart(product, 1)}
            disabled={product.stock === 0}
            className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
