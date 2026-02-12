# Déploiement sur Vercel

## 🚀 Étape 1 : Créer un dépôt GitHub

1. Allez sur [GitHub](https://github.com/juniorcherif2004-star?tab=repositories)
2. Cliquez sur "New repository" (vert en haut à droite)
3. Nom du dépôt : `portfolio-mohamed-cherif`
4. Choisissez "Public" (recommandé pour portfolio)
5. Ne cochez pas "Add README" (vous en avez déjà un)
6. Cliquez sur "Create repository"

## 🚀 Étape 2 : Connecter le dépôt local

```bash
# Ajouter le dépôt distant (déjà fait)
git remote add origin https://github.com/juniorcherif2004-star/portfolio-mohamed-cherif.git

# Pousser le code
git branch -M main
git push -u origin main
```

## 🚀 Étape 3 : Déployer sur Vercel

### Option A : Via l'interface Vercel (Recommandé)

1. Allez sur [Vercel](https://vercel.com)
2. Cliquez sur "Sign Up" → "Continue with GitHub"
3. Autorisez Vercel à accéder à vos dépôts GitHub
4. Cliquez sur "New Project"
5. Cherchez et sélectionnez `portfolio-mohamed-cherif`
6. Cliquez sur "Import"

### Configuration Vercel

Vercel détectera automatiquement que c'est un projet Next.js :

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

Cliquez sur "Deploy" !

### Option B : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel
```

## ✅ État Actuel

- ✅ **Git initialisé** : Repository local prêt
- ✅ **Configuration Vercel** : `vercel.json` créé
- ✅ **Code commité** : Tous les fichiers prêts
- ⏳ **Dépôt distant** : À créer sur GitHub

## 🎯 URL Finale Attendue

`https://portfolio-mohamed-cherif.vercel.app`

## 🔧 Fonctionnalités Vercel

- ✅ **HTTPS automatique**
- ✅ **CDN global**
- ✅ **Builds optimisés**
- ✅ **Deploys automatiques** à chaque push
- ✅ **Preview URLs** pour les PR

---

## 📋 Instructions finales

1. **Créez le dépôt GitHub** manuellement
2. **Poussez le code** avec `git push -u origin main`
3. **Connectez Vercel** et déployez

Votre portfolio sera en ligne en quelques minutes !
