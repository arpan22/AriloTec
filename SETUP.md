# ArlioTech Website – Setup & Deployment Guide

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Project Structure

```
arliotech/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Navbar + Footer + SEO)
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx            # About Us
│   ├── services/
│   │   ├── page.tsx              # Services overview
│   │   └── [slug]/page.tsx       # Dynamic service detail pages (13 services)
│   ├── industries/page.tsx       # Industries
│   ├── case-studies/page.tsx     # 6 AI case studies
│   ├── careers/page.tsx          # Careers with job listings
│   ├── blog/page.tsx             # Blog with 8 articles
│   ├── contact/page.tsx          # Contact form + info
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── robots.ts                 # SEO robots rules
│   ├── loading.tsx               # Loading screen
│   └── not-found.tsx             # 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Responsive mega-menu navbar
│   │   └── Footer.tsx            # Full footer with newsletter
│   ├── home/                     # Home page sections
│   │   ├── HeroSection.tsx       # Animated hero with particle field
│   │   ├── TrustedBy.tsx         # Marquee trusted companies
│   │   ├── ServicesOverview.tsx  # 12-service grid
│   │   ├── WhyChooseUs.tsx       # 8 USPs
│   │   ├── TechStack.tsx         # Tabbed technology grid
│   │   ├── IndustriesSection.tsx # Interactive industry selector
│   │   ├── ProcessSection.tsx    # 6-step timeline
│   │   ├── StatsSection.tsx      # Animated counters
│   │   ├── Testimonials.tsx      # Auto-playing testimonial carousel
│   │   ├── CaseStudiesSection.tsx# 3 featured case studies
│   │   ├── FAQSection.tsx        # Accordion FAQ
│   │   └── ContactCTA.tsx        # Bottom CTA section
│   ├── sections/                 # Full-page components
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPageContent.tsx
│   │   ├── ServicePageTemplate.tsx
│   │   ├── IndustriesPage.tsx
│   │   ├── CaseStudiesPage.tsx
│   │   ├── CareersPage.tsx
│   │   ├── BlogPage.tsx
│   │   └── ContactPage.tsx
│   └── ui/                       # Reusable UI components
│       ├── SectionHeader.tsx
│       ├── AnimatedCounter.tsx
│       ├── GlassCard.tsx
│       └── ParticleField.tsx
├── lib/
│   ├── utils.ts                  # cn() utility
│   └── serviceData.tsx           # All 13 service page data
├── public/
│   ├── robots.txt
│   └── site.webmanifest
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## Service Pages (Auto-generated via dynamic route)

All 13 service pages are available at `/services/[slug]`:

- `/services/artificial-intelligence`
- `/services/generative-ai`
- `/services/ai-agents`
- `/services/chatbot-development`
- `/services/machine-learning`
- `/services/computer-vision`
- `/services/automation`
- `/services/cloud-solutions`
- `/services/data-engineering`
- `/services/web-development`
- `/services/mobile-app-development`
- `/services/ui-ux-design`
- `/services/custom-software`
- `/services/it-consulting`
- `/services/staff-augmentation`

## Customization

### Update Company Info
- **Company name/branding**: Search and replace "ArlioTech" across files
- **Contact info**: Update `components/layout/Footer.tsx` and `components/sections/ContactPage.tsx`
- **Social links**: Update in `Footer.tsx`
- **Domain**: Update `app/layout.tsx` metadataBase and `app/sitemap.ts`

### Add Real Images
Replace placeholder content with real images in:
- `public/og-image.png` (1200×630 for social sharing)
- `public/favicon.ico`
- `public/icon-192.png` and `public/icon-512.png`

### Connect Contact Form
The contact form in `components/sections/ContactPage.tsx` has a mock `handleSubmit`.
Connect it to your backend, Formspree, EmailJS, or similar service.

### Add Blog Content
Blog posts are in `components/sections/BlogPage.tsx`.
For a real blog, connect to a CMS like Sanity, Contentlayer, or MDX.

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the .next directory
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
```

## Environment Variables

Create `.env.local` for production:
```
NEXT_PUBLIC_SITE_URL=https://arliotech.com
# Add your form submission API keys here
```

## Performance Notes

- All sections use `whileInView` with `once: true` for scroll animations
- `ParticleField` uses canvas — CPU light, very smooth
- Images should use `next/image` for optimization
- Tailwind purges unused CSS in production
- Target Lighthouse score: 95+

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | Framework (App Router, SSR/SSG) |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| react-intersection-observer | Scroll detection |

## Support

For questions about the codebase, contact: hello@arliotech.com
