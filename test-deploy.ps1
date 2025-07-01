# Script de test pour le deploiement (sans git)
Write-Host "🧪 Test de deploiement (sans git)..." -ForegroundColor Blue

# Executer le script de deploiement avec SkipGit
& "$PSScriptRoot\deploy.ps1" -SkipGit

Write-Host "✅ Test termine !" -ForegroundColor Green
Write-Host "📁 Verifiez le dossier 'docs' pour voir les fichiers generes" -ForegroundColor Cyan 