# Script de déploiement GitHub Pages
param(
    [switch]$SkipBuild = $false,
    [switch]$SkipGit = $false
)

# Fonction pour afficher les erreurs
function Write-Error {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

# Fonction pour verifier si une commande a reussi
function Test-CommandSuccess {
    param([int]$ExitCode, [string]$CommandName)
    if ($ExitCode -ne 0) {
        Write-Error "$CommandName a echoue avec le code $ExitCode"
        exit $ExitCode
    }
}

Write-Host "🚀 Déploiement du portfolio sur GitHub Pages..." -ForegroundColor Green

try {
    # 1. Build avec la configuration GitHub Pages
    if (-not $SkipBuild) {
        Write-Host "📦 Build en cours..." -ForegroundColor Yellow
        npm run build:github
        Test-CommandSuccess $LASTEXITCODE "Build"
        
        Write-Host "📤 Export statique en cours..." -ForegroundColor Yellow
        npm run export
        Test-CommandSuccess $LASTEXITCODE "Export"
    } else {
        Write-Host "⏭️ Build ignoré (SkipBuild activé)" -ForegroundColor Cyan
    }

    # 2. Verifier que le dossier out existe
    if (-not (Test-Path "out")) {
        Write-Error "Le dossier 'out' n'existe pas. Assurez-vous d'avoir fait un build."
        exit 1
    }

    # 3. Supprimer l'ancien dossier docs s'il existe
    if (Test-Path "docs") {
        Write-Host "🗑️ Suppression de l'ancien dossier docs..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force "docs" -ErrorAction Stop
    }

    # 4. Copier le dossier out vers docs
    Write-Host "📋 Copie des fichiers vers docs..." -ForegroundColor Yellow
    Copy-Item -Recurse -Force "out" "docs" -ErrorAction Stop

    # 5. Verifier que docs a ete cree
    if (-not (Test-Path "docs")) {
        Write-Error "Echec de la creation du dossier docs"
        exit 1
    }

    Write-Host "✅ Fichiers copiés avec succès" -ForegroundColor Green

    # 6. Git operations (optionnel)
    if (-not $SkipGit) {
        Write-Host "📝 Ajout des fichiers au git..." -ForegroundColor Yellow
        git add .
        Test-CommandSuccess $LASTEXITCODE "Git add"

        # Verifier s'il y a des changements a commiter
        $status = git status --porcelain
        if ($status) {
            Write-Host "💾 Commit des changements..." -ForegroundColor Yellow
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            git commit -m "Update portfolio build - $timestamp"
            Test-CommandSuccess $LASTEXITCODE "Git commit"

            Write-Host "🚀 Push vers GitHub..." -ForegroundColor Yellow
            git push
            Test-CommandSuccess $LASTEXITCODE "Git push"
        } else {
            Write-Host "ℹ️ Aucun changement a commiter" -ForegroundColor Cyan
        }
    } else {
        Write-Host "⏭️ Git ignoré (SkipGit activé)" -ForegroundColor Cyan
    }

    Write-Host "✅ Deploiement termine avec succes !" -ForegroundColor Green
    Write-Host "🌐 Votre site sera disponible sur: https://[votre-username].github.io/portfolio/" -ForegroundColor Cyan
    Write-Host "📁 Fichiers generes dans le dossier 'docs'" -ForegroundColor Cyan

} catch {
    Write-Error "Erreur lors du deploiement: $($_.Exception.Message)"
    exit 1
} 