@echo off
REM Script de deploiement pour Windows
REM Utilise bash si disponible, sinon PowerShell

echo 🚀 Deploiement du portfolio...

REM Essayer d'utiliser bash (Git Bash ou WSL)
where bash >nul 2>&1
if %errorlevel% equ 0 (
    echo 📦 Utilisation de bash...
    bash deploy.sh %*
) else (
    echo 📦 Bash non trouve, utilisation de PowerShell...
    powershell -ExecutionPolicy Bypass -File deploy.ps1 %*
)

echo ✅ Deploiement termine ! 