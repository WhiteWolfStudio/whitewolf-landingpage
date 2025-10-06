# White Wolf Studios - Landing Page

A beautiful, modern landing page for White Wolf Studios featuring stunning Framer Motion animations and a bold design.

## Features

- **Animated Logo Showcase** - Your wolf logo takes center stage with pulsing glow effects
- **Smooth Scroll Navigation** - Seamless navigation between sections
- **Beautiful Framer Motion Animations** - Every element comes to life with carefully crafted animations
- **Particle Background** - Dynamic animated background with particle connections
- **Responsive Design** - Looks amazing on all devices
- **Services Section** - Showcases Mobile Apps, Web Apps, and AI Solutions with interactive cards
- **About Section** - Company story with animated statistics
- **Contact Section** - Easy-to-find contact information with animated elements

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Framer Motion** - Powerful animation library
- **Tailwind CSS** - Utility-first styling
- **Static Export** - Optimized for cPanel deployment

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static site will be exported to the `out/` directory, ready for deployment.

### Deploy

Your GitHub workflow is already configured to automatically deploy to cPanel when you push to the master branch.

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles
├── components/
│   ├── AnimatedBackground.tsx  # Particle animation
│   ├── Navbar.tsx             # Navigation bar
│   ├── Hero.tsx               # Hero section with logo
│   ├── Services.tsx           # Services showcase
│   ├── About.tsx              # About section
│   ├── Contact.tsx            # Contact & footer
│   └── FadeIn.tsx             # Reusable animation wrapper
└── public/
    └── images/
        └── logo.png           # Your wolf logo

```

## Customization

- **Colors**: Edit `tailwind.config.ts` and `app/globals.css`
- **Content**: Update text in component files
- **Animations**: Adjust Framer Motion parameters in components
- **Logo**: Replace `public/images/logo.png` with your updated logo

## Performance

- Optimized static build
- Lazy loading animations
- Minimal JavaScript bundle
- Fast First Contentful Paint (FCP)

---

Built with passion by White Wolf Studios
