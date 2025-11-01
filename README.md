# MYTH MVP - Next.js Application

This project has been converted from a Vite/React application to Next.js for enhanced SEO and performance with server-side rendering (SSR) and static site generation (SSG).

## Project Overview

**MYTH MVP** is a modern web application showcasing Proof of Concepts, Minimum Viable Products, and Complete Builds that drive growth and high-value exits.

## Technologies

This project is built with:

- **Next.js 14** - React framework with SSR/SSG capabilities
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React component library
- **React Query** - Server state management

## Project Structure

```
├── pages/                 # Next.js pages (routes)
│   ├── _app.tsx          # App wrapper with providers
│   ├── _document.tsx     # Document structure
│   ├── index.tsx         # Homepage (SSG)
│   ├── leadership.tsx    # Leadership page (SSG)
│   ├── case-studies.tsx  # Case studies page (SSG)
│   └── 404.tsx           # 404 error page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Navigation.tsx    # Main navigation
│   ├── Hero.tsx          # Hero section
│   ├── Introduction.tsx  # About section
│   ├── Services.tsx      # Services section
│   ├── HowWeWork.tsx     # Process section
│   ├── Contact.tsx       # Contact section
│   ├── Footer.tsx        # Footer
│   ├── Leadership.tsx    # Leadership team
│   ├── CaseStudies.tsx   # Case studies
│   └── WhyChooseUs.tsx   # Benefits section
├── public/               # Static assets
│   └── assets/           # Images and media files
├── styles/               # Global styles
│   └── globals.css       # Tailwind and custom styles
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## SEO Features

All pages include:

- **Server-Side Rendering (SSR)** / **Static Site Generation (SSG)** - Content is pre-rendered for optimal crawlability
- **Dynamic Meta Tags** - Each page has unique title and description tags
- **Semantic HTML** - Proper heading hierarchy and semantic elements
- **Optimized Images** - Next.js Image component for automatic optimization
- **Clean URLs** - SEO-friendly routing structure

## Migration from Vite/React

This project was converted from a Vite + React Router application to Next.js. Key changes:

1. **Routing**: Replaced `react-router-dom` with Next.js file-based routing
2. **Components**: Migrated from `src/components/` to `components/`
3. **Assets**: Moved from `src/assets/` to `public/assets/`
4. **Styling**: Updated Tailwind config and moved global CSS to `styles/globals.css`
5. **Images**: Converted to Next.js `Image` component for optimization
6. **Navigation**: Updated to use Next.js `Link` and `useRouter`

## Development

### Key Features

- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Component-based architecture** with reusable UI components
- **Responsive design** for mobile and desktop
- **Accessibility** built into shadcn/ui components

## Deployment

This application can be deployed to:

- **Vercel** (recommended) - Optimized for Next.js
- **Netlify** - With Next.js plugin
- **Any Node.js hosting** - Using `npm run build && npm start`

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## License

Private - All rights reserved
