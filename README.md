# Portfolio - Quentin Velard

A personal portfolio website built with Next.js, Tailwind CSS, and deployed on GitHub Pages. Showcasing my work as a Machine Learning Engineer specializing in computer vision and machine learning.

## 🚀 Overview
- **Stack**: Next.js 13+, React, TypeScript, Tailwind CSS, Framer Motion
- **Static Deployment**: GitHub Pages (main branch, `/docs` folder)
- **Contact Form**: Integrated with [Formspree](https://formspree.io/)
- **Theme**: Dark mode by default with toggle capability
- **UI Components**: shadcn/ui library for consistent design

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/qvelard/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 🛠️ Local Development

```bash
npm run dev
```
The site will be available at [http://localhost:3000](http://localhost:3000).

---

## 🚀 GitHub Pages Deployment

### Automated Deployment Scripts

```bash
# Full deployment (build + export + git)
npm run deploy:full

# Test deployment (without git)
npm run deploy:test

# Copy only (without build, useful if build already done)
npm run deploy:copy

# Build + copy (without git, for testing)
npm run deploy:build
```

> 📁 **Organized Scripts**: All deployment scripts are in the `scripts/` folder

### Manual Deployment

1. **Export static site**
   ```bash
   npm run build:github
   npm run export
   ```
   The static site is generated in the `out/` folder.

2. **Move the `out` folder to `/docs`**
   ```bash
   rm -rf docs
   cp -r out docs
   ```

3. **Commit & push**
   ```bash
   git add docs
   git commit -m "Static deployment in /docs for GitHub Pages"
   git push
   ```

### GitHub Pages Configuration
- Settings > Pages
- Source: `main` branch, `/docs` folder

The site will be available at:
```
https://qvelard.github.io/portfolio/
```

---

## 📬 Contact Form (Formspree)

The contact form uses [Formspree](https://formspree.io/f/mqapznyb) to receive messages without a backend.

- The form action URL is already configured
- Messages are sent directly to your Formspree dashboard

---

## 📝 Customization
- Modify content in the `app/` folder and components in `components/`
- Projects are managed in `lib/projects.ts`
- Global styles are in `app/globals.css`
- UI components are in `components/ui/`

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Linting

# Export and deployment
npm run build:github # Build with GitHub Pages config
npm run export       # Static export
npm run deploy:full  # Full deployment
npm run deploy:test  # Test without git
npm run serve:local  # Local server to test export

# Tests
npm run test:export  # Build + local server
```

---

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js app router
│   ├── v1/                # New portfolio version
│   │   ├── page.tsx       # Homepage
│   │   └── projects/      # Project pages
├── components/             # React components
│   ├── ui/               # shadcn/ui components
│   ├── projects-carousel.tsx
│   ├── project-gallery.tsx
│   └── contact-form.tsx
├── lib/                   # Utilities and data
│   ├── projects.ts       # Project data
│   └── utils.ts          # Utility functions
├── public/v1/            # Static assets
└── scripts/              # Deployment scripts
```

---

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions with Framer Motion
- **Project Showcase**: Featured projects carousel and detailed project pages
- **Contact Integration**: Working contact form with Formspree
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized images and static generation

---

## 📄 License
MIT

