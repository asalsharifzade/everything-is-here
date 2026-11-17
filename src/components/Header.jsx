import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Header() {
  const { count } = useCart()
  const link = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`
  return (
    <header className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          Everything Is Here
        </Link>
        <nav className="hidden items-center md:flex">
          <NavLink to="/" end className={link}>Home</NavLink>
          <NavLink to="/shop" className={link}>Shop</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/shop" className="hidden rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 sm:block">
            Shop Now
          </Link>
          <Link to="/cart" className="relative rounded-lg border px-3 py-2 text-sm font-medium text-gray-700 hover:border-indigo-600">
            Cart
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
      <nav className="flex justify-center gap-1 border-t px-4 py-1 md:hidden">
        <NavLink to="/" end className={link}>Home</NavLink>
        <NavLink to="/shop" className={link}>Shop</NavLink>
        <NavLink to="/about" className={link}>About</NavLink>
        <NavLink to="/contact" className={link}>Contact</NavLink>
      </nav>
    </header>
  )
}
