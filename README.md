# Landing page

A single stylized landing page: an animated **QV** monogram over an interactive
particle field. Built with Next.js and Tailwind CSS, statically exported and
deployed to [velard.fr](https://velard.fr) via GitHub Pages.

## 🚀 Stack

- **Framework**: Next.js 13 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: Framer Motion + a native `<canvas>` particle field
- **Hosting**: GitHub Pages on a custom domain (`velard.fr`)

## 📦 Getting Started

```bash
git clone https://github.com/qvelard/portfolio.git
cd portfolio
npm install
npm run dev
```

The site is available at [http://localhost:3000](http://localhost:3000).

## 🛠️ Scripts

```bash
npm run dev          # Start the development server
npm run build        # Production build + static export (outputs to ./out)
npm run lint         # Lint the codebase
npm run serve:local  # Serve the exported ./out folder locally
npm run deploy       # Commit & push the current branch (see deploy.sh)
```

## 🚀 Deployment

Deployment is fully automated. Pushing to `main` triggers the GitHub Actions
workflow (`.github/workflows/nextjs.yml`), which builds the static site, adds the
`CNAME` for `velard.fr`, and publishes it to GitHub Pages.

## 🗂️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx            # Root layout (theme, metadata)
│   ├── page.tsx              # Landing page (QV monogram + particle field)
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # shadcn/ui primitives
│   ├── particle-field.tsx    # Interactive canvas background
│   └── theme-provider.tsx
├── public/                   # Static assets (favicon)
└── .github/workflows/        # GitHub Pages deployment
```

## 📝 Customization

- The monogram lives in `app/page.tsx` (inline SVG)
- Particle behaviour (density, link distance, pointer radius) is tunable at the
  top of `components/particle-field.tsx`
- Global styles in `app/globals.css`

## 📄 License

MIT
