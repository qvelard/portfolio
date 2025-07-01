# Portfolio - Quentin Velard

Ce projet est un portfolio personnel réalisé avec Next.js, Tailwind CSS et déployé sur GitHub Pages.

## 🚀 Aperçu
- **Stack** : Next.js 13+, React, TypeScript, Tailwind CSS
- **Déploiement statique** : GitHub Pages (branche `main`, dossier `/docs`)
- **Formulaire de contact** : Intégré avec [Formspree](https://formspree.io/)
- **Thème** : Dark mode par défaut avec toggle

---

## 📦 Installation

1. Clone le repo :
   ```bash
   git clone https://github.com/qvelard/portfolio.git
   cd portfolio
   ```
2. Installe les dépendances :
   ```bash
   npm install
   ```

---

## 🛠️ Développement local

```bash
npm run dev
```
Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## 🚀 Déploiement GitHub Pages

### Scripts de déploiement automatique

```bash
# Déploiement complet (build + export + git)
npm run deploy:full

# Test de déploiement (sans git)
npm run deploy:test

# Copie seulement (sans build, utile si build déjà fait)
npm run deploy:copy

# Build + copie (sans git, pour tester)
npm run deploy:build
```

> 📁 **Scripts organisés** : Tous les scripts de déploiement sont dans le dossier `scripts/`

### Déploiement manuel

1. **Exporter le site statique**
   ```bash
   npm run build:github
   npm run export
   ```
   Le site statique est généré dans le dossier `out/`.

2. **Déplacer le dossier `out` dans `/docs`**
   ```bash
   rm -rf docs
   cp -r out docs
   ```

3. **Commit & push**
   ```bash
   git add docs
   git commit -m "Déploiement statique dans /docs pour GitHub Pages"
   git push
   ```

### Configuration GitHub Pages
- Settings > Pages
- Source : `main` branch, `/docs` folder

Le site sera accessible à :
```
https://qvelard.github.io/portfolio/
```

---

## 📬 Formulaire de contact (Formspree)

Le formulaire de contact utilise [Formspree](https://formspree.io/f/mqapznyb) pour recevoir les messages sans backend.

- L'URL d'action du formulaire est déjà configurée.
- Les messages sont envoyés directement à ton tableau de bord Formspree.

---

## 📝 Personnalisation
- Modifie le contenu dans le dossier `app/` et les composants dans `components/`.
- Les projets sont gérés dans `lib/projects.ts`.
- Les styles globaux sont dans `app/globals.css`.

---

## 🔧 Scripts disponibles

```bash
# Développement
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting

# Export et déploiement
npm run build:github # Build avec config GitHub Pages
npm run export       # Export statique
npm run deploy:full  # Déploiement complet
npm run deploy:test  # Test sans git
npm run serve:local  # Serveur local pour tester l'export

# Tests
npm run test:export  # Build + serveur local
```

---

## 📄 Licence
MIT

