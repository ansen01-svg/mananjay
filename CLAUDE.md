# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a political campaign website for Mananjay Daimary, a BPF (Bodoland People's Front) leader representing Chirang district, Assam. It's a single-page application built with Next.js 14, TypeScript, and Tailwind CSS, featuring a premium orange/green color theme.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Architecture & Structure

### Framework & Routing
- **Next.js 14 App Router** with TypeScript
- Single-page application architecture with smooth scroll navigation via anchor links
- Main page: `src/app/page.tsx`
- Layout: `src/app/layout.tsx` (includes Header and Footer)

### Component Organization
Components are organized by feature in `src/components/`:
- **Layout components**: `layout/header.tsx`, `layout/footer.tsx`
- **Section components**: Each major page section has its own directory
  - `hero-section/hero-section.tsx` - Carousel with autoplay
  - `about-section/about-section.tsx`
  - `gallery-section/gallery-section.tsx`
  - `impact-section/impact-section.tsx`
  - `contact-section/contact-section.tsx`
- **UI components**: `ui/` directory contains shadcn/ui components (button, sheet, dialog, carousel, navigation-menu)

### Navigation Pattern
- Uses hash-based navigation (`#home`, `#about`, `#gallery`, `#impact`, `#contact`)
- Custom smooth scroll implementation in Header component (`handleSmoothScroll` function)
- Header offset: 80px to account for sticky header
- Mobile navigation uses Sheet component (slide-in drawer) from shadcn/ui

### Styling & Theming
- **Tailwind CSS** with custom configuration in `tailwind.config.ts`
- **Custom color scheme**:
  - Primary: Orange (`#ff7e54` / orange-500) - used for header, CTAs, accents
  - Secondary: Green (`#128807` light, `#046A38` dark) - supporting colors
  - Full color palettes defined for both orange (50-900) and green (50-900)
- **CSS Variables**: Design tokens defined in `globals.css` using HSL values for light/dark mode support
- **Utility function**: `src/lib/utils.ts` exports `cn()` for merging Tailwind classes with clsx and tailwind-merge

### Path Aliases
- `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- Example: `import Component from "@/components/ui/button"`

### Key Dependencies
- **UI/Component Libraries**:
  - `@radix-ui/*` - Accessible UI primitives (dialog, navigation-menu, slot)
  - `lucide-react` - Icon library
  - `embla-carousel-react` + `embla-carousel-autoplay` - Carousel in hero section
- **Styling**:
  - `tailwindcss` + `tailwindcss-animate` - Styling and animations
  - `class-variance-authority` - Component variant management
  - `clsx` + `tailwind-merge` - Class name utilities
- **Image Optimization**: `sharp` - for Next.js image optimization

### Image Assets
- Located in `src/assets/images/`
- Logo files: `BPF-logo.png`, `BPF-sec-logo.png`, `logo.png`
- Carousel images: `cr-1.jpg`, `cr-2.jpg`, `cr-3.jpg` (used in hero section)
- Additional images: `carousel-1.jpg`, `carousel-2.jpg`, `carousel-3.jpg`, `profile-amit.jpg`
- Images imported directly in components using ES modules

### SEO Configuration
- **Metadata**: Comprehensive SEO metadata in `src/app/layout.tsx` including OpenGraph and Twitter cards
- **Domain**: https://mananjay.org
- **Robots.txt**: Dynamic generation via `src/app/robots.ts` with rules for various crawlers
- **Sitemap**: Dynamic generation via `src/app/sitemap.ts` (single page, weekly updates, priority 1.0)

### Client vs Server Components
- Most components use `"use client"` directive for interactivity (state, event handlers)
- Page component (`src/app/page.tsx`) is a client component
- Layout component uses server-side rendering for metadata

### Fonts
- Custom fonts: Geist Sans and Geist Mono (variable fonts)
- Located in `src/app/fonts/`
- Loaded via `next/font/local` in layout

## Important Notes

- The header has a fixed height consideration (80px offset) for scroll positioning - maintain this when modifying scroll behavior
- Social media links in footer currently point to placeholder anchors (`#facebook`, `#twitter`, etc.) - update when actual URLs are provided
- The carousel in hero section has 5-second autoplay delay - configurable in `hero-section.tsx`
- Mobile menu closes automatically after navigation (controlled by `setIsOpen(false)` in `handleSmoothScroll`)
- All navigation is client-side smooth scrolling; no actual route changes occur
