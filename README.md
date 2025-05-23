# Next.js E-commerce Application

A responsive e-commerce application built with Next.js that includes product listings, shopping cart functionality, animations, and Stripe payment integration.

![Next.js E-commerce](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uSsa92MXG9IOgDbMCvasCEQM477FCH.png)

## Features

- **Product Listing Page** using Static Site Generation (SSG)
- **Product Detail Page** using Server-Side Rendering (SSR)
- **Shopping Cart** with persistent storage
- **Checkout Process** with Stripe integration
- **Contact Form** submitted via Next.js API Route
- **Responsive Design** for all device sizes
- **Smooth Animations** for enhanced user experience

## Technologies Used

- **Next.js 14** with App Router
- **React 18** with Server and Client Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Shadcn UI** for UI components
- **React Hook Form** with Zod for form validation
- **Lucide React** for icons
- **Stripe** for payment processing

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Stripe account (for payment processing)

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-ecommerce.git
cd nextjs-ecommerce
```

2. Install dependencies:


```shellscript
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:


```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project Structure

```plaintext
nextjs-ecommerce/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   ├── contact/          # Contact form API
│   │   └── create-payment-intent/ # Stripe payment API
│   ├── checkout/             # Checkout page
│   ├── contact/              # Contact page
│   ├── products/[id]/        # Product detail page (SSR)
│   ├── ClientPage.tsx        # Client-side product listing
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page (SSG)
├── components/               # React components
│   ├── cart/                 # Cart components
│   │   ├── cart-item.tsx     # Cart item component
│   │   └── cart-sidebar.tsx  # Cart sidebar component
│   ├── ui/                   # UI components (shadcn)
│   ├── add-to-cart-button.tsx # Add to cart button
│   ├── checkout-form.tsx     # Checkout form
│   ├── contact-form.tsx      # Contact form
│   ├── footer.tsx            # Footer component
│   ├── header.tsx            # Header component
│   └── product-card.tsx      # Product card component
├── context/                  # React context
│   └── cart-context.tsx      # Cart context provider
├── lib/                      # Utility functions
│   ├── stripe.ts             # Stripe utilities
│   └── types.ts              # TypeScript types
├── public/                   # Static assets
├── .env.local                # Environment variables
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Usage

### Browsing Products

The home page displays all products in a responsive grid. Click on any product to view its details.

### Shopping Cart

- Click the "Add to Cart" button on any product to add it to your cart
- Click the cart icon in the header to view your cart
- Adjust quantities or remove items in the cart sidebar
- Click "Checkout" to proceed to payment


### Checkout Process

The checkout page collects:

1. Shipping information
2. Payment details (using Stripe)


After successful payment, you'll be redirected to a confirmation page.

### Contact Form

The contact page provides a form to send inquiries about products or general questions.

## API Routes

### `/api/contact`

Handles contact form submissions.

### `/api/create-payment-intent`

Creates a Stripe payment intent for processing payments.

## Future Improvements

With more time, these features could be added:

1. **User Authentication** - Login, registration, and profile management
2. **Order History** - View past orders and order status
3. **Product Search** - Search functionality with filters
4. **Admin Dashboard** - Manage products, orders, and customers
5. **Product Reviews** - Allow users to leave reviews and ratings
6. **Wishlist** - Save products for later
7. **Multiple Payment Methods** - Support for various payment options
8. **Internationalization** - Multi-language support
9. **Advanced Analytics** - Track user behavior and sales
10. **Email Notifications** - Order confirmations and updates


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Stripe](https://stripe.com/)
- [FakeStore API](https://fakestoreapi.com/)
