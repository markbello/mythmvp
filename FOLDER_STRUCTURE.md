# Next.js Project Folder Structure

## Complete Directory Tree

```
start-myth-spark/
│
├── pages/                          # Next.js pages (file-based routing)
│   ├── _app.tsx                   # App wrapper with providers (QueryClient, TooltipProvider)
│   ├── _document.tsx              # HTML document structure
│   ├── index.tsx                  # Homepage (/) - SSG with getStaticProps
│   ├── leadership.tsx             # Leadership page (/leadership) - SSG
│   ├── case-studies.tsx           # Case studies page (/case-studies) - SSG
│   └── 404.tsx                    # 404 error page
│
├── components/                     # React components
│   ├── ui/                        # shadcn/ui component library
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   ├── tooltip.tsx
│   │   └── use-toast.ts
│   │
│   ├── Navigation.tsx             # Main navigation component (uses Next.js Link)
│   ├── Hero.tsx                   # Hero section with background image
│   ├── Introduction.tsx           # About/Introduction section
│   ├── Services.tsx               # Services showcase
│   ├── HowWeWork.tsx              # Process/How we work section
│   ├── Contact.tsx                # Contact form section
│   ├── Footer.tsx                 # Footer component
│   ├── Leadership.tsx             # Leadership team section
│   ├── CaseStudies.tsx            # Case studies showcase
│   └── WhyChooseUs.tsx            # Benefits/Why choose us section
│
├── public/                         # Static files (served from /)
│   ├── assets/                    # Images and media files
│   │   ├── myth-mvp-logo.png
│   │   ├── hero-bg-abstract.jpg
│   │   ├── hero-bg.jpg
│   │   ├── dan-van-tran.png
│   │   ├── smit-gujarathi.png
│   │   ├── roswell-hobbs.png
│   │   └── paper-texture.jpg
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│
├── styles/                         # Global styles
│   └── globals.css                # Tailwind CSS imports and custom styles
│
├── lib/                            # Utility functions
│   └── utils.ts                   # cn() utility for class merging
│
├── hooks/                          # Custom React hooks
│   ├── use-mobile.tsx
│   ├── use-scroll-animation.tsx
│   └── use-toast.ts
│
├── .eslintrc.json                 # ESLint configuration for Next.js
├── components.json                 # shadcn/ui configuration
├── next.config.js                 # Next.js configuration
├── next-env.d.ts                  # Next.js TypeScript declarations
├── package.json                   # Dependencies and scripts
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.app.json              # TypeScript app config (legacy)
├── tsconfig.node.json             # TypeScript node config (legacy)
│
├── README.md                       # Project documentation
├── MIGRATION.md                   # Migration guide from Vite/React
└── FOLDER_STRUCTURE.md            # This file

└── [Legacy directories - can be removed]
    ├── src/                        # Original Vite/React source (backup)
    ├── index.html                  # Vite index.html (not used by Next.js)
    └── vite.config.ts              # Vite config (not used by Next.js)
```

## Key Directory Descriptions

### `/pages`
Contains all Next.js pages. Each file corresponds to a route:
- `index.tsx` → `/`
- `leadership.tsx` → `/leadership`
- `case-studies.tsx` → `/case-studies`
- `404.tsx` → 404 error page

### `/components`
Reusable React components. The `ui/` subdirectory contains shadcn/ui components.

### `/public`
Static assets served from the root URL. Images are accessed via `/assets/image.png`.

### `/styles`
Global CSS file imported in `_app.tsx`.

### `/lib`
Utility functions, including the `cn()` helper for Tailwind class merging.

### `/hooks`
Custom React hooks for reusable logic.

## Route Structure

```
/                    → pages/index.tsx          (Homepage)
/leadership          → pages/leadership.tsx     (Leadership page)
/case-studies        → pages/case-studies.tsx   (Case studies page)
/*                   → pages/404.tsx            (404 page)
```

## SEO Implementation

All pages in `/pages` include:
- `Head` component with `<title>` and `<meta name="description">`
- `getStaticProps` for Static Site Generation (SSG)
- Server-side rendered content visible in "View Source"

## Asset References

- Images: Use Next.js `Image` component with `/assets/image.png`
- Static files: Reference from `/public/` root (e.g., `/favicon.ico`)

