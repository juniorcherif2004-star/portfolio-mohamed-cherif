# Déploiement sur Vercel

## 🚀 Étape 1 : Créer un dépôt GitHub

1. Allez sur [GitHub](https://github.com)
2. Créez un nouveau dépôt : `portfolio-mohamed-cherif`
3. Choisissez "Public" ou "Privé"
4. Ne cochez pas "Add README" (vous en avez déjà un)

## 🚀 Étape 2 : Connecter le dépôt local

```bash
# Ajouter le dépôt distant
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-mohamed-cherif.git

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
5. Sélectionnez votre dépôt `portfolio-mohamed-cherif`
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

## 🚀 Étape 4 : Configuration du domaine (Optionnel)

1. Dans le dashboard Vercel, allez sur "Settings"
2. Cliquez sur "Domains"
3. Ajoutez votre domaine personnalisé
4. Configurez les DNS selon les instructions Vercel

## ✅ Vérification du déploiement

Après le déploiement :

1. **URL de production** : `https://portfolio-mohamed-cherif.vercel.app`
2. **Build automatique** : Chaque `git push` déclenche un nouveau déploiement
3. **Preview deployments** : Chaque PR crée une URL de preview

## 🎯 Fonctionnalités Vercel activées

- ✅ **HTTPS automatique**
- ✅ **CDN global**
- ✅ **Builds optimisés**
- ✅ **Splitting automatique**
- ✅ **Analytics de base**
- ✅ **Rollbacks instantanés**

## 🔧 Variables d'environnement (si nécessaire)

Si vous avez des variables d'environnement :

1. Allez dans "Settings" → "Environment Variables"
2. Ajoutez vos variables (ex: `NEXT_PUBLIC_API_KEY`)
3. Redéployez

## 📊 Monitoring

Vercel fournit :
- **Logs temps réel**
- **Métriques de performance**
- **Analytics**
- **Speed Insights**

---

## 🎉 Votre portfolio est maintenant en ligne !

URL finale : `https://portfolio-mohamed-cherif.vercel.app`

Le site se mettra à jour automatiquement à chaque modification sur GitHub !
