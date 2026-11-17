import { Link } from 'react-router-dom'
import { categories } from '../data/products.js'

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">Everything Is Here</p>
          <p className="mt-2 text-sm">A general store for everyday essentials — electronics, fashion, home, beauty, and sports, all in one place.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Shop</p>
          <ul className="mt-2 space-y-1 text-sm">
            {categories.map((c) => (
              <li key={c}><Link to={`/shop?category=${encodeURIComponent(c)}`} className="hover:text-white">{c}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Company</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/shop" className="hover:text-white">All Products</Link></li>
            <li><Link to="/cart" className="hover:text-white">Your Cart</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Help</p>
          <p className="mt-2 text-sm">Free shipping on orders over $50.<br />30-day returns on unused items.<br />Email: hello@everything-is-here.example</p>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Everything Is Here. Demo store — no real payments are processed.
      </div>
    </footer>
  )
}
