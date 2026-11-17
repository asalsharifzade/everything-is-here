import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'everything-is-here-cart-v1'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // localStorage unavailable — cart still works for this session
    }
  }, [items])

  const addToCart = (product, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id)
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: Math.min(i.qty + qty, product.stock) } : i,
        )
      }
      return [...prev, { ...product, qty }]
    })
  }

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id)
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.min(qty, i.stock) } : i)))
  }

  const removeFromCart = (id) => setItems((prev) => prev.filter((i) => i.id !== id))
  const clearCart = () => setItems([])

  const value = useMemo(() => {
    const count = items.reduce((s, i) => s + i.qty, 0)
    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
    return { items, addToCart, updateQty, removeFromCart, clearCart, count, subtotal }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
