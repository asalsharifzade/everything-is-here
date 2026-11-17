import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { items, updateQty, removeFromCart, subtotal } = useCart()
  const shipping = items.length === 0 || subtotal >= 50 ? 0 : 5.99
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Your cart is empty</h1>
        <p className="mt-2 text-gray-600">Browse the shop and add something you like.</p>
        <Link to="/shop" className="mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">Go to Shop</Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <article key={item.id} className="flex gap-4 rounded-xl border bg-white p-4">
              <Link to={`/product/${item.id}`}><img src={item.image} alt={item.name} className="h-24 w-24 rounded-lg object-cover" /></Link>
              <div className="flex-1">
                <Link to={`/product/${item.id}`} className="font-semibold text-gray-900 hover:text-indigo-600">{item.name}</Link>
                <p className="text-sm text-gray-500">{item.category} · {formatPrice(item.price)} each</p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <label className="flex items-center gap-2 text-sm">
                    Qty
                    <input type="number" min="1" max={item.stock} value={item.qty} onChange={(e) => updateQty(item.id, Number(e.target.value) || 1)} className="w-16 rounded-lg border px-2 py-1" />
                  </label>
                  <button onClick={() => removeFromCart(item.id)} className="text-sm font-medium text-red-600 hover:underline">Remove</button>
                </div>
              </div>
              <p className="font-bold text-gray-900">{formatPrice(item.price * item.qty)}</p>
            </article>
          ))}
        </div>
        <aside className="h-fit rounded-xl border bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt>Shipping</dt><dd>{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd></div>
            <div className="flex justify-between border-t pt-2 text-base font-bold"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
          </dl>
          {subtotal < 50 && <p className="mt-3 text-sm text-gray-500">Add {formatPrice(50 - subtotal)} more for free shipping.</p>}
          <Link to="/checkout" className="mt-4 block rounded-lg bg-indigo-600 px-5 py-3 text-center font-semibold text-white hover:bg-indigo-700">Proceed to Checkout</Link>
          <Link to="/shop" className="mt-2 block text-center text-sm font-medium text-indigo-600 hover:underline">Continue shopping</Link>
        </aside>
      </div>
    </div>
  )
}
