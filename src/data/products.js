const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`

export const categories = [
  'Electronics',
  'Fashion',
  'Home & Living',
  'Beauty',
  'Sports & Outdoors',
]

export const products = [
  // Electronics
  { id: 1, name: 'Aurora Wireless Headphones', price: 89.99, category: 'Electronics', image: img('photo-1505740420928-5e560c06d30e'), description: 'Over-ear wireless headphones with active noise cancellation, 30-hour battery life, and clear, balanced sound for music, calls, and travel.', stock: 24, rating: 4.8 },
  { id: 2, name: 'Pulse Smartwatch', price: 149.99, category: 'Electronics', image: img('photo-1546868871-7041f2a55e12'), description: 'A smartwatch with heart-rate tracking, sleep monitoring, GPS, and notifications. Water resistant and built for everyday use.', stock: 18, rating: 4.6 },
  { id: 3, name: 'Nimbus Ultrabook Laptop 14"', price: 899.0, category: 'Electronics', image: img('photo-1496181133206-80ce9b88a853'), description: 'A light 14-inch laptop for work and study, with a fast processor, 16 GB of memory, and a sharp full-HD display.', stock: 9, rating: 4.7 },
  { id: 4, name: 'Echo Portable Bluetooth Speaker', price: 59.99, category: 'Electronics', image: img('photo-1608043152269-423dbba4e7e1'), description: 'A compact Bluetooth speaker with rich bass, 12-hour playtime, and a splash-resistant design for home and outdoor use.', stock: 32, rating: 4.5 },
  // Fashion
  { id: 5, name: 'Runner Air Sneakers', price: 119.99, category: 'Fashion', image: img('photo-1542291026-7eec264c27ff'), description: 'Lightweight running sneakers with cushioned soles and breathable mesh. Comfortable for daily wear, walking, and training.', stock: 27, rating: 4.9 },
  { id: 6, name: 'Classic Leather Jacket', price: 179.99, category: 'Fashion', image: img('photo-1551028719-00167b16eac5'), description: 'A timeless leather jacket with a tailored fit, zip pockets, and a soft lining. A wardrobe staple for cooler days.', stock: 12, rating: 4.7 },
  { id: 7, name: 'Solstice Sunglasses', price: 49.99, category: 'Fashion', image: img('photo-1572635196237-14b3f281503f'), description: 'Polarised sunglasses with UV400 protection, a lightweight frame, and a modern look that suits most face shapes.', stock: 41, rating: 4.4 },
  { id: 8, name: 'Voyager Travel Backpack', price: 79.99, category: 'Fashion', image: img('photo-1553062407-98eeb64c6a62'), description: 'A durable 25-litre backpack with a padded laptop sleeve, water bottle pocket, and comfortable straps for commuting and travel.', stock: 21, rating: 4.6 },
  // Home & Living
  { id: 9, name: 'Lumen Desk Lamp', price: 39.99, category: 'Home & Living', image: img('photo-1507473885765-e6ed057f782c'), description: 'An adjustable desk lamp with three brightness levels and warm light, ideal for reading, studying, and working at night.', stock: 35, rating: 4.5 },
  { id: 10, name: 'Cloud Lounge Armchair', price: 249.99, category: 'Home & Living', image: img('photo-1586023492125-27b2c045efd7'), description: 'A comfortable armchair with soft fabric, solid wooden legs, and generous cushioning for your living room or reading corner.', stock: 7, rating: 4.8 },
  { id: 11, name: 'Terra Ceramic Mug Set', price: 24.99, category: 'Home & Living', image: img('photo-1514228742587-6b1558fcca3d'), description: 'A set of two hand-finished ceramic mugs (350 ml each), dishwasher and microwave safe, in a warm neutral glaze.', stock: 48, rating: 4.6 },
  { id: 12, name: 'Fern Indoor Plant', price: 29.99, category: 'Home & Living', image: img('photo-1485955900006-10f4d324d411'), description: 'A low-maintenance indoor plant in a ceramic pot. Adds fresh green to desks and shelves and needs only indirect light and weekly watering.', stock: 19, rating: 4.3 },
  // Beauty
  { id: 13, name: 'Glow Skincare Set', price: 54.99, category: 'Beauty', image: img('photo-1556228720-195a672e8a03'), description: 'A three-step skincare set with cleanser, toner, and moisturiser, made for daily use on normal to dry skin.', stock: 26, rating: 4.7 },
  { id: 14, name: 'Noir Eau de Parfum 50 ml', price: 69.99, category: 'Beauty', image: img('photo-1541643600914-78b084683601'), description: 'A warm, long-lasting eau de parfum with notes of bergamot, cedar, and amber. A 50 ml bottle in a simple glass design.', stock: 15, rating: 4.8 },
  { id: 15, name: 'Velvet Makeup Collection', price: 44.99, category: 'Beauty', image: img('photo-1596462502278-27bfdc403348'), description: 'A curated makeup collection with eyeshadow, blush, and lip colour in everyday shades, plus brushes for easy application.', stock: 22, rating: 4.5 },
  { id: 16, name: 'Hydra Face Cream 50 ml', price: 32.99, category: 'Beauty', image: img('photo-1570172619644-dfd03ed5d881'), description: 'A light, fast-absorbing face cream with hyaluronic acid that hydrates skin for up to 24 hours without feeling greasy.', stock: 30, rating: 4.6 },
  // Sports & Outdoors
  { id: 17, name: 'Flow Yoga Mat', price: 34.99, category: 'Sports & Outdoors', image: img('photo-1544367567-0f2fcb009e0b'), description: 'A non-slip 6 mm yoga mat with good grip and cushioning for yoga, stretching, and home workouts. Includes a carry strap.', stock: 38, rating: 4.7 },
  { id: 18, name: 'Trail Insulated Water Bottle 1L', price: 22.99, category: 'Sports & Outdoors', image: img('photo-1602143407151-7111542de6e8'), description: 'A stainless-steel insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof and BPA-free.', stock: 55, rating: 4.6 },
  { id: 19, name: 'Court Pro Basketball', price: 29.99, category: 'Sports & Outdoors', image: img('photo-1546519638-68e109498ffc'), description: 'An official-size indoor/outdoor basketball with deep channels for grip and a durable composite leather cover.', stock: 16, rating: 4.4 },
  { id: 20, name: 'City Commuter Bicycle', price: 429.0, category: 'Sports & Outdoors', image: img('photo-1485965120184-e220f721d03e'), description: 'A comfortable city bicycle with 7 gears, mudguards, a rear rack, and upright handlebars for everyday commuting.', stock: 5, rating: 4.8 },
]

export const getProduct = (id) => products.find((p) => p.id === Number(id))

export const formatPrice = (n) => `$${n.toFixed(2)}`
