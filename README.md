# Portfolio — Quentin Velard

Personal portfolio of **Quentin Velard**, Machine Learning Engineer specializing in
computer vision and NLP. Built with Next.js and Tailwind CSS, statically exported and
deployed to [velard.fr](https://velard.fr) via GitHub Pages.

## 🚀 Stack

- **Framework**: Next.js 13 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: Framer Motion
- **Contact form**: [Formspree](https://formspree.io/) (no backend required)
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
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout (header, footer, theme, metadata)
│   ├── page.tsx              # Home page
│   └── projects/
│       ├── page.tsx          # Projects listing
│       └── [slug]/page.tsx   # Project detail page
├── components/               # React components
│   ├── ui/                   # shadcn/ui primitives
│   ├── projects-carousel.tsx # Featured-projects carousel
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   └── contact-form.tsx
├── lib/
│   └── projects.ts           # Project data + helpers
├── public/                   # Static assets (images, PDFs, favicon)
└── .github/workflows/        # GitHub Pages deployment
```

## 📝 Customization

- Edit page content in `app/`
- Manage projects in `lib/projects.ts`
- Static assets (images, slides) live in `public/`
- Global styles in `app/globals.css`

## 📄 License

MIT
