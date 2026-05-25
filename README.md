# Premium Cinematic Portfolio - Kunal Bhardwaj

A production-grade, Awwwards-inspired portfolio website featuring scroll-linked canvas animation, cinematic scrollytelling, and premium interactions.

## 🎨 Features

- **Scroll-Linked Canvas Animation** - HTML5 Canvas frame sequence scrubbing synchronized with smooth scrolling
- **Cinematic Overlays** - Animated text sections that fade in/out with parallax effects
- **Premium Dark Theme** - Glassmorphism, backdrop blur, and ambient glows
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **High Performance** - Preloaded frame images, requestAnimationFrame optimization, device pixel ratio scaling
- **Modern Stack** - Next.js 14, TypeScript, Tailwind CSS, Framer Motion

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Image sequence files in `/public/sequence/`

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/app
  layout.tsx          # Root layout with metadata
  page.tsx            # Main page component
  globals.css         # Global styles and animations

/components
  ScrollyCanvas.tsx   # HTML5 Canvas with scroll animation
  Overlay.tsx         # Text overlays with parallax
  Projects.tsx        # Featured projects grid
  Experience.tsx      # Timeline/experience section
  Contact.tsx         # Contact CTA section

/public
  /sequence           # Image sequence frames (75+ frames)

Configuration Files
  package.json
  tsconfig.json
  tailwind.config.ts
  postcss.config.js
  next.config.js
```

## 🎬 Scrollytelling Mechanics

The ScrollyCanvas component:
1. **Preloads all frame images** - Non-blocking image loading with error handling
2. **Tracks scroll progress** - Uses Framer Motion's `useScroll` hook
3. **Maps scroll to frames** - Transforms scroll position (0-1) to frame index
4. **Renders via Canvas** - High-quality rendering with device pixel ratio support
5. **Updates per frame** - requestAnimationFrame optimization for smooth 60fps

## 🎨 Customization

### Update Personal Info

Edit `/app/page.tsx` and component files:
- Hero section text
- Project details
- Experience items
- Contact links

### Change Colors

Edit `tailwind.config.ts`:
- Primary accent: `#00d4ff` (cyan)
- Secondary: `#4ecdc4` (teal)
- Background: `#121212` (dark)

### Adjust Animation Timing

All Framer Motion components use configurable transitions:
- `duration`: Animation length
- `delay`: Start offset
- `ease`: Easing function

## 📱 Responsive Breakpoints

- Mobile: <768px
- Tablet: 768px - 1024px
- Desktop: >1024px

All components use Tailwind CSS breakpoint utilities for responsive design.

## ⚡ Performance Tips

1. **Image Optimization** - Pre-compress image sequence frames as WebP
2. **Lazy Loading** - Sections load on viewport intersection
3. **Canvas Rendering** - Optimized with `imageSmoothingQuality: 'high'`
4. **CSS Animations** - GPU-accelerated with `transform` and `opacity`

## 🔗 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Connect at https://vercel.com/new
# Select this repository
# Vercel auto-detects Next.js and deploys
```

### Other Hosting

1. Build: `npm run build`
2. Deploy `/.next` directory
3. Set Node.js environment

## 📝 License

Personal portfolio - © 2024 Kunal Bhardwaj

## 🤝 Support

For issues or questions about the portfolio, reach out via:
- 📧 Email: contact@kunalbhardwaj.com
- 💼 LinkedIn: linkedin.com/in/kunalbhardwaj
- 📺 YouTube: youtube.com/@drivewithkunal

---

**Built with ❤️ using Next.js 14, Framer Motion & Tailwind CSS**
# portfolio
# portfolio
