# Portfolio

Ce projet est un portfolio personnel réalisé avec Next.js, Tailwind CSS et déployé sur GitHub Pages.

## 🚀 Aperçu
- **Stack** : Next.js 13+, React, TypeScript, Tailwind CSS
- **Déploiement statique** : GitHub Pages (branche `main`, dossier `/docs`)
- **Formulaire de contact** : Intégré avec [Formspree](https://formspree.io/)

---

## 📦 Installation

1. Clone le repo :
   ```bash
   git clone https://github.com/<ton-pseudo>/<nom-du-repo>.git
   cd <nom-du-repo>
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

## 🏗️ Export statique & déploiement GitHub Pages

1. **Exporter le site statique**
   ```bash
   npm run build
   npm run export
   ```
   Le site statique est généré dans le dossier `out/`.

2. **Déplacer le dossier `out` dans `/docs`**
   ```bash
   rm -rf docs
   mv out docs
   ```

3. **Commit & push**
   ```bash
   git add docs
   git commit -m "Déploiement statique dans /docs pour GitHub Pages"
   git push
   ```

4. **Configurer GitHub Pages**
   - Settings > Pages
   - Source : `main` branch, `/docs` folder

Le site sera accessible à :
```
https://<ton-pseudo-github>.github.io/<nom-du-repo>/
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

## 📄 Licence
MIT

