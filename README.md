# Everything Is Here

A complete, modern online store with separate pages for every section of the shop. Browse products, view product details, manage a shopping cart, and complete checkout — all in a fast, responsive, mobile-first experience.

**Brand:** Everything Is Here — a general store with diverse products.

## Features

- **Home page** — hero section, featured products, categories, and promotions
- **Shop page** — full product catalog with search, category filters, and sorting
- **Product page** — product details, images, price, stock, quantity selector, and related products
- **Cart page** — add, remove, and update quantities, with a live total
- **Checkout page** — shipping form and order summary, with a simulated order confirmation (no real payment)
- **About page** — store story, values, and promises
- **Contact page** — contact details and a simulated contact form
- **Cart persistence** — your cart is saved in your browser with localStorage
- **Responsive design** — works on mobile, tablet, and desktop
- **Fast and lightweight** — built with Vite and React

## Pages

Every page is a separate route and a separate file, so the project stays clean and easy to extend:

| Route | Page | File |
| --- | --- | --- |
| `/` | Home | `src/pages/Home.jsx` |
| `/shop` | Shop | `src/pages/Shop.jsx` |
| `/product/:id` | Product Detail | `src/pages/ProductDetail.jsx` |
| `/cart` | Cart | `src/pages/Cart.jsx` |
| `/checkout` | Checkout | `src/pages/Checkout.jsx` |
| `/about` | About | `src/pages/About.jsx` |
| `/contact` | Contact | `src/pages/Contact.jsx` |

## Products

20 products across 5 categories, stored in `src/data/products.js`:

- **Electronics** (4): wireless headphones, smartwatch, laptop, Bluetooth speaker
- **Fashion** (4): sneakers, leather jacket, sunglasses, backpack
- **Home & Living** (4): desk lamp, armchair, ceramic mug set, indoor plant
- **Beauty** (4): skincare set, eau de parfum, makeup collection, face cream
- **Sports & Outdoors** (4): yoga mat, insulated water bottle, basketball, bicycle

Each product has `id`, `name`, `price` (USD), `category`, `image`, `description`, `stock`, and `rating`. Product images are hosted on Unsplash. To add a new product, add a new object to the `products` array in that file. No database is needed for the demo version.

## Tech Stack

- **React 18** — UI components
- **Vite** — fast build tool and dev server
- **React Router** — separate pages and routing
- **Tailwind CSS** — styling
- **JavaScript (ES6+)** — application logic
- **LocalStorage** — cart persistence (no backend required)

## Project Structure

```text
ecommerce-store/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
git clone https://github.com/asalsharifzade/ecommerce-store.git
cd ecommerce-store
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Deployment

This project is deployed on Vercel.

1. Push the project to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Use the default Vite settings:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy. Vercel will give you a live URL for the store.

Every push to the `main` branch triggers a new deployment automatically.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |

## Notes

- Checkout and the contact form are simulated: no real payment is processed and no email is sent.
- Free shipping applies to orders over $50; otherwise shipping is $5.99.

## Roadmap

- [ ] Real payment integration
- [ ] User accounts and order history
- [ ] Admin panel to add and edit products
- [ ] Product reviews and ratings
- [ ] Discount codes

## Author

**Asal Sharifzade**

- GitHub: [github.com/asalsharifzade](https://github.com/asalsharifzade)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
