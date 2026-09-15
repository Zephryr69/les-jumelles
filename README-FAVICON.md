# Favicon — le vrai logo de l'école

## Où copier
Place les deux fichiers dans `src/app/` (à côté de `layout.tsx`) :
- `icon.png` (512×512)
- `apple-icon.png` (180×180)

Next.js les détecte automatiquement grâce à leur nom — aucune ligne de
config à ajouter dans `layout.tsx` ou ailleurs.

## Étape importante : supprimer l'ancien favicon par défaut
Si un fichier `favicon.ico` existe encore quelque part dans ton projet
(généré par défaut par `create-next-app`, généralement dans `src/app/`
ou `public/`), certains navigateurs continueront de l'afficher en
priorité au lieu du nouveau logo. Vérifie et supprime-le :

```powershell
Get-ChildItem -Recurse -Filter favicon.ico
```

Si ça en trouve un, supprime-le :
```powershell
Remove-Item src/app/favicon.ico -ErrorAction SilentlyContinue
Remove-Item public/favicon.ico -ErrorAction SilentlyContinue
```

## Vérification
`npm run dev`, puis regarde l'onglet du navigateur. Si tu ne vois
toujours pas le changement, fais un rechargement forcé (Ctrl+Maj+R) —
les favicons restent souvent en cache navigateur.
