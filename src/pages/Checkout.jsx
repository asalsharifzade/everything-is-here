import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

const initialForm = { name: '', email: '', address: '', city: '', zip: '', country: '' }

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const [form, setForm] = useState(initialForm)
  const [orderId, setOrderId] = useState(null)

  const shipping = items.length === 0 || subtotal >= 50 ? 0 : 5.99
  const total = subtotal + shipping

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrderId(`EIH-${Date.now().toString().slice(-8)}`)
    clearCart()
  }

  if (orderId) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="text-5xl">✓</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Thank you — your order is placed!</h1>
        <p className="mt-2 text-gray-600">Order number: <strong>{orderId}</strong></p>
        <p className="mt-2 text-gray-600">This is a simulated order confirmation. No payment was processed and no order was sent, because this is a demo store.</p>
        <Link to="/shop" className="mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">Continue Shopping</Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Nothing to check out</h1>
        <p className="mt-2 text-gray-600">Your cart is empty.</p>
        <Link to="/shop" className="mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">Go to Shop</Link>
      </div>
    )
  }

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })
  const input = 'w-full rounded-lg border px-4 py-2'

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
      <p className="mt-1 text-sm text-gray-500">Demo checkout — no real payment is taken.</p>
      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="space-y-4 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">Full name<input required value={form.name} onChange={set('name')} className={input} placeholder="Jane Smith" /></label>
            <label className="block text-sm font-medium">Email<input required type="email" value={form.email} onChange={set('email')} className={input} placeholder="jane@example.com" /></label>
          </div>
          <label className="block text-sm font-medium">Street address<input required value={form.address} onChange={set('address')} className={input} placeholder="123 Main Street" /></label>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block text-sm font-medium">City<input required value={form.city} onChange={set('city')} className={input} placeholder="Springfield" /></label>
            <label className="block text-sm font-medium">ZIP / Postcode<input required value={form.zip} onChange={set('zip')} className={input} placeholder="12345" /></label>
            <label className="block text-sm font-medium">Country<input required value={form.country} onChange={set('country')} className={input} placeholder="United States" /></label>
          </div>
          <button type="submit" className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">
            Place Order — {formatPrice(total)}
          </button>
        </form>
        <aside className="h-fit rounded-xl border bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {items.map((i) => (
              <li key={i.id} className="flex justify-between"><span>{i.name} × {i.qty}</span><span>{formatPrice(i.price * i.qty)}</span></li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 border-t pt-4 text-sm">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt>Shipping</dt><dd>{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd></div>
            <div className="flex justify-between text-base font-bold"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
          </dl>
        </aside>
      </div>
    </div>
  )
}
