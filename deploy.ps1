# Script de déploiement GitHub Pages
Write-Host "🚀 Déploiement du portfolio sur GitHub Pages..." -ForegroundColor Green

# 1. Build avec la configuration GitHub Pages
Write-Host "📦 Build en cours..." -ForegroundColor Yellow
npm run build:github

# 2. Export statique
Write-Host "📤 Export statique en cours..." -ForegroundColor Yellow
npm run export

# 3. Supprimer l'ancien dossier docs s'il existe
if (Test-Path "docs") {
    Write-Host "🗑️ Suppression de l'ancien dossier docs..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "docs"
}

# 4. Copier le dossier out vers docs
Write-Host "📋 Copie des fichiers vers docs..." -ForegroundColor Yellow
Copy-Item -Recurse -Force "out" "docs"

# 5. Ajouter les fichiers au git
Write-Host "📝 Ajout des fichiers au git..." -ForegroundColor Yellow
git add .

# 6. Commit
Write-Host "💾 Commit des changements..." -ForegroundColor Yellow
git commit -m "Update portfolio build - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# 7. Push
Write-Host "🚀 Push vers GitHub..." -ForegroundColor Yellow
git push

Write-Host "✅ Déploiement terminé !" -ForegroundColor Green
Write-Host "🌐 Votre site sera disponible sur: https://[votre-username].github.io/portfolio/" -ForegroundColor Cyan 