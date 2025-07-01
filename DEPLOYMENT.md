# 🚀 Guide de Déploiement GitHub Pages

Ce guide explique comment déployer votre portfolio sur GitHub Pages.

## 📋 Prérequis

- Node.js et npm installés
- Git configuré avec votre repository GitHub
- Repository GitHub configuré pour GitHub Pages (source: `/docs`)

## 🛠️ Scripts de Déploiement

### Scripts npm disponibles :

```bash
# Déploiement complet (build + export + git)
npm run deploy:full

# Copie seulement (sans build, utile si build déjà fait)
npm run deploy:copy

# Build + copie (sans git, pour tester)
npm run deploy:build

# Test de déploiement (sans git)
npm run deploy:test
```

### Scripts directs :

```bash
# Script bash (Linux/Mac/Git Bash)
./deploy.sh [--skip-build] [--skip-git]

# Script PowerShell (Windows)
powershell -ExecutionPolicy Bypass -File deploy.ps1 [-SkipBuild] [-SkipGit]

# Script batch (Windows - auto-détecte bash ou PowerShell)
deploy.bat [--skip-build] [--skip-git]
```

## 🔧 Configuration

### 1. Configuration Next.js (`next.config.js`)
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.GITHUB_PAGES ? '/portfolio' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/portfolio/' : '',
};
```

### 2. Configuration GitHub Pages
- Allez dans Settings > Pages de votre repository
- Source : "Deploy from a branch"
- Branch : `main` (ou votre branche principale)
- Folder : `/docs`

## 📁 Structure des Fichiers

```
portfolio/
├── out/           # Fichiers exportés par Next.js
├── docs/          # Fichiers servis par GitHub Pages
├── deploy.sh      # Script bash
├── deploy.ps1     # Script PowerShell
├── deploy.bat     # Script batch Windows
└── package.json   # Scripts npm
```

## 🚀 Processus de Déploiement

1. **Build** : `npm run build:github` (avec GITHUB_PAGES=true)
2. **Export** : `npm run export` (génère le dossier `out`)
3. **Copie** : Copie `out` vers `docs`
4. **Git** : Add, commit, push (optionnel)

## 🔍 Dépannage

### Erreur "out directory not found"
```bash
npm run build:github
npm run export
```

### Erreur "docs directory not found"
```bash
npm run deploy:copy
```

### Erreur git
```bash
npm run deploy:build
# Puis manuellement :
git add .
git commit -m "Update portfolio"
git push
```

## 🌐 URLs

- **Local** : http://localhost:3001 (après `npm run serve:local`)
- **GitHub Pages** : https://[username].github.io/portfolio/

## 📝 Notes

- Le script détecte automatiquement s'il y a des changements à commiter
- Les erreurs sont gérées avec des messages clairs
- Le script s'arrête en cas d'erreur (`set -e` pour bash)
- Compatible Windows/Linux/Mac 