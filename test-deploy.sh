#!/bin/bash

# Script de test pour le deploiement (sans git)
echo -e "\033[0;34m🧪 Test de deploiement (sans git)...\033[0m"

# Execute le script de deploiement avec --skip-git
./deploy.sh --skip-git

echo -e "\033[0;32m✅ Test termine !\033[0m"
echo -e "\033[0;36m📁 Verifiez le dossier 'docs' pour voir les fichiers generes\033[0m" 