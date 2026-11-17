import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-2 text-gray-600">
        Questions about an order, a product, or delivery? Send us a message and we will get back to you within one business day.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border bg-white p-4"><p className="font-semibold">Email</p><p className="mt-1 text-sm text-gray-600">hello@everythingishere.example</p></div>
        <div className="rounded-xl border bg-white p-4"><p className="font-semibold">Hours</p><p className="mt-1 text-sm text-gray-600">Monday–Friday, 9:00–18:00</p></div>
        <div className="rounded-xl border bg-white p-4"><p className="font-semibold">Delivery</p><p className="mt-1 text-sm text-gray-600">Free shipping over $50 · 30-day returns</p></div>
      </div>

      {sent ? (
        <div className="mt-8 rounded-xl bg-green-50 p-6">
          <h2 className="text-lg font-bold text-green-800">Thank you, {form.name || 'friend'}!</h2>
          <p className="mt-1 text-green-700">Your message has been received (simulated — this demo form does not send email). We would normally reply to {form.email} within one business day.</p>
          <button onClick={() => { setForm({ name: '', email: '', message: '' }); setSent(false) }} className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">Send another message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-lg border px-4 py-2" placeholder="Your name" /></label>
            <label className="block text-sm font-medium">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-lg border px-4 py-2" placeholder="you@example.com" /></label>
          </div>
          <label className="block text-sm font-medium">Message<textarea required rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-lg border px-4 py-2" placeholder="How can we help?" /></label>
          <button type="submit" className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">Send Message</button>
        </form>
      )}
    </div>
  )
}
