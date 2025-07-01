#!/bin/bash

# Script de deploiement GitHub Pages
# Usage: ./deploy.sh [--skip-build] [--skip-git]

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Parse arguments
SKIP_BUILD=false
SKIP_GIT=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --skip-build)
            SKIP_BUILD=true
            shift
            ;;
        --skip-git)
            SKIP_GIT=true
            shift
            ;;
        *)
            echo "Unknown option: $1"
            echo "Usage: $0 [--skip-build] [--skip-git]"
            exit 1
            ;;
    esac
done

echo -e "${GREEN}🚀 Deploiement du portfolio sur GitHub Pages...${NC}"

# Function to check if command succeeded
check_exit() {
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ $1 failed with exit code $?${NC}"
        exit 1
    fi
}

# 1. Build with GitHub Pages configuration
if [ "$SKIP_BUILD" = false ]; then
    echo -e "${YELLOW}📦 Build en cours...${NC}"
    npm run build:github
    check_exit "Build"
    
    echo -e "${YELLOW}📤 Export statique en cours...${NC}"
    npm run export
    check_exit "Export"
else
    echo -e "${CYAN}⏭️ Build ignore (--skip-build active)${NC}"
fi

# 2. Check if out directory exists
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Le dossier 'out' n'existe pas. Assurez-vous d'avoir fait un build.${NC}"
    exit 1
fi

# 3. Remove old docs directory if it exists
if [ -d "docs" ]; then
    echo -e "${YELLOW}🗑️ Suppression de l'ancien dossier docs...${NC}"
    rm -rf docs
fi

# 4. Copy out directory to docs
echo -e "${YELLOW}📋 Copie des fichiers vers docs...${NC}"
cp -r out docs
check_exit "Copy"

# 5. Check if docs was created
if [ ! -d "docs" ]; then
    echo -e "${RED}❌ Echec de la creation du dossier docs${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Fichiers copies avec succes${NC}"

# 6. Git operations (optional)
if [ "$SKIP_GIT" = false ]; then
    echo -e "${YELLOW}📝 Ajout des fichiers au git...${NC}"
    git add .
    check_exit "Git add"
    
    # Check if there are changes to commit
    if [ -n "$(git status --porcelain)" ]; then
        echo -e "${YELLOW}💾 Commit des changements...${NC}"
        timestamp=$(date '+%Y-%m-%d %H:%M:%S')
        git commit -m "Update portfolio build - $timestamp"
        check_exit "Git commit"
        
        echo -e "${YELLOW}🚀 Push vers GitHub...${NC}"
        git push
        check_exit "Git push"
    else
        echo -e "${CYAN}ℹ️ Aucun changement a commiter${NC}"
    fi
else
    echo -e "${CYAN}⏭️ Git ignore (--skip-git active)${NC}"
fi

echo -e "${GREEN}✅ Deploiement termine avec succes !${NC}"
echo -e "${CYAN}🌐 Votre site sera disponible sur: https://[votre-username].github.io/portfolio/${NC}"
echo -e "${CYAN}📁 Fichiers generes dans le dossier 'docs'${NC}" 