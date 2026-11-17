import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">About Everything Is Here</h1>
      <p className="mt-4 leading-relaxed text-gray-700">
        Everything Is Here started with a simple idea: shopping should not mean visiting five different stores for five different things. We bring electronics, fashion, home &amp; living, beauty, and sports together in one clean, easy-to-use store — so you can find what you need, compare it, and check out in minutes.
      </p>
      <p className="mt-4 leading-relaxed text-gray-700">
        We choose every product in our catalogue carefully. We look for reliable quality, fair prices, and honest descriptions, and we only list items we would buy ourselves. If a product does not meet that bar, it does not make it onto the shelf.
      </p>
      <h2 className="mt-8 text-2xl font-bold text-gray-900">What we promise</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
        <li><strong>Clear prices:</strong> the price you see is the price you pay — no hidden fees at checkout.</li>
        <li><strong>Free shipping over $50:</strong> orders above $50 ship free, everywhere we deliver.</li>
        <li><strong>30-day returns:</strong> unused items can be returned within 30 days.</li>
        <li><strong>Real support:</strong> a person answers your messages — see our <Link to="/contact" className="text-indigo-600 hover:underline">Contact page</Link>.</li>
      </ul>
      <h2 className="mt-8 text-2xl font-bold text-gray-900">How this store works</h2>
      <p className="mt-4 leading-relaxed text-gray-700">
        This is a demo store built with React, Vite, and Tailwind CSS. Your cart is saved in your browser, and checkout is simulated — no real payment is processed and no order is sent. It is a complete example of a modern online store, ready to be connected to a real payment provider and a product database when the time comes.
      </p>
      <Link to="/shop" className="mt-8 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">Browse the Store</Link>
    </div>
  )
}
