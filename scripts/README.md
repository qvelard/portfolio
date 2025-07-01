# 📁 Scripts de Déploiement

Ce dossier contient tous les scripts de déploiement pour le portfolio.

## 🚀 Scripts Disponibles

### `deploy.sh` - Script Bash Principal
- **Usage** : `./deploy.sh [--skip-build] [--skip-git]`
- **Plateformes** : Linux, macOS, Git Bash
- **Fonctionnalités** :
  - Build avec configuration GitHub Pages
  - Export statique
  - Copie vers dossier `docs`
  - Opérations git (optionnel)

### `deploy.ps1` - Script PowerShell
- **Usage** : `powershell -ExecutionPolicy Bypass -File deploy.ps1 [-SkipBuild] [-SkipGit]`
- **Plateformes** : Windows PowerShell
- **Fonctionnalités** : Même que deploy.sh mais pour PowerShell

### `deploy.bat` - Script Batch Windows
- **Usage** : `deploy.bat [--skip-build] [--skip-git]`
- **Plateformes** : Windows
- **Fonctionnalités** : Auto-détecte bash ou PowerShell

### `test-deploy.sh` - Script de Test
- **Usage** : `./test-deploy.sh`
- **Fonctionnalités** : Test de déploiement sans git

## 🔧 Utilisation

### Via npm (recommandé)
```bash
npm run deploy:full    # Déploiement complet
npm run deploy:test    # Test sans git
npm run deploy:copy    # Copie seulement
npm run deploy:build   # Build + copie
```

### Directement
```bash
# Bash (Linux/Mac/Git Bash)
./scripts/deploy.sh

# PowerShell (Windows)
powershell -ExecutionPolicy Bypass -File scripts/deploy.ps1

# Batch (Windows)
scripts/deploy.bat
```

## 📋 Options

- `--skip-build` : Ignore le build/export (utile si déjà fait)
- `--skip-git` : Ignore les opérations git (pour les tests)

## 🔍 Dépannage

### Erreur de permissions (Linux/Mac)
```bash
chmod +x scripts/deploy.sh
chmod +x scripts/test-deploy.sh
```

### Erreur PowerShell (Windows)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 📝 Notes

- Tous les scripts gèrent les erreurs automatiquement
- Les scripts s'arrêtent en cas d'erreur
- Compatible avec tous les systèmes d'exploitation
- Messages colorés pour une meilleure lisibilité 