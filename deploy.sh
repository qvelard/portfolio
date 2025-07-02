#!/bin/bash

# Arrêt en cas d'erreur
env | grep GIT
set -e

# Ajoute tous les changements dans le dossier out/
git add out/

# Crée un message de commit avec la date et l'heure actuelles
commit_msg="deploy: $(date '+%Y-%m-%d %H:%M:%S')"

git commit -m "$commit_msg"

git push

echo "✅ Déploiement git terminé à $commit_msg" 