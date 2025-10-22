# Configuration du Token GitHub

## Pourquoi un token GitHub ?

Pour afficher **toutes vos contributions** (publiques **ET** privées) sur votre portfolio, vous devez configurer un token d'authentification GitHub.

Sans ce token, seules les contributions publiques seront affichées.

## Étapes de configuration

### 1. Créer un Personal Access Token

1. Connectez-vous à GitHub
2. Allez sur : [https://github.com/settings/tokens](https://github.com/settings/tokens)
3. Cliquez sur **"Generate new token"** → **"Generate new token (classic)"**
4. Remplissez le formulaire :
   - **Note** : `Portfolio Contributions` (ou un nom de votre choix)
   - **Expiration** : Choisissez une durée (recommandé : 90 jours ou No expiration pour un usage personnel)
   - **Permissions** : Cochez uniquement **`read:user`**
     - Cette permission permet de lire vos contributions privées sans donner accès à d'autres données sensibles
5. Cliquez sur **"Generate token"** en bas de la page
6. **⚠️ IMPORTANT** : Copiez le token généré (il commence par `ghp_`)
   - Vous ne pourrez plus le voir après avoir quitté cette page !

### 2. Configurer le token dans votre projet

1. À la racine de votre projet, créez un fichier nommé **`.env.local`**
2. Ajoutez-y la ligne suivante :

```env
GITHUB_TOKEN=ghp_votre_token_ici
```

Remplacez `ghp_votre_token_ici` par le token que vous avez copié.

### 3. Redémarrer le serveur de développement

1. Arrêtez votre serveur Next.js (Ctrl+C dans le terminal)
2. Relancez-le avec :

```bash
npm run dev
# ou
pnpm dev
# ou
yarn dev
```

### 4. Vérification

1. Ouvrez votre portfolio dans le navigateur
2. Allez à la section des contributions GitHub
3. Vous devriez voir un badge **"✓ PRIVÉ INCLUS"** en vert
4. Le nombre de contributions devrait maintenant inclure vos contributions privées

Si vous voyez un badge **"⚠ PUBLIC SEULEMENT"** en orange, cela signifie que le token n'est pas configuré correctement.

## Dépannage

### Le badge affiche toujours "PUBLIC SEULEMENT"

1. Vérifiez que le fichier `.env.local` est bien à la racine du projet
2. Vérifiez qu'il n'y a pas d'espace avant ou après le token
3. Vérifiez que le serveur a été redémarré après avoir créé le fichier
4. Vérifiez les logs dans la console du serveur

### Le token a expiré

Si vous avez choisi une date d'expiration et que le token a expiré :

1. Retournez sur [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Supprimez l'ancien token
3. Créez-en un nouveau en suivant les étapes ci-dessus
4. Remplacez le token dans votre fichier `.env.local`
5. Redémarrez le serveur

## Sécurité

- ⚠️ **NE JAMAIS** commiter le fichier `.env.local` dans Git
- Le fichier `.env.local` est déjà dans `.gitignore`, il ne sera donc pas commité
- Ne partagez jamais votre token GitHub avec personne
- Si vous pensez que votre token a été compromis, supprimez-le immédiatement sur GitHub et générez-en un nouveau

## Configuration pour la production (Vercel)

Si vous déployez sur Vercel :

1. Allez dans votre projet sur Vercel
2. Settings → Environment Variables
3. Ajoutez une nouvelle variable :
   - **Name** : `GITHUB_TOKEN`
   - **Value** : Votre token GitHub
   - **Environment** : Production, Preview, Development (cochez tous)
4. Redéployez votre application

## Documentation technique

### Comment ça fonctionne ?

- Sans token : L'API utilise la requête `user(login: "username")` qui retourne uniquement les contributions publiques
- Avec token : L'API utilise la requête `viewer` qui retourne toutes les contributions (publiques + privées) du compte authentifié

### Permissions du token

Le token a uniquement la permission `read:user` qui permet de :

- ✅ Lire les informations de profil public
- ✅ Lire les contributions privées du compte authentifié
- ❌ Modifier quoi que ce soit
- ❌ Accéder aux repositories privés
- ❌ Effectuer des actions au nom de l'utilisateur

C'est la permission la plus restrictive qui permet de voir les contributions privées.
