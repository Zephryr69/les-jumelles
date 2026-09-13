# Mise à jour — vrai logo de l'école

## Ce qui change
Le monogramme "JL" dessiné en CSS (placeholder de la maquette) est remplacé
par ton vrai logo, détouré en deux versions transparentes :
- `public/logo/les-jumelles-mark-black.png` → utilisée dans le header (fond clair)
- `public/logo/les-jumelles-mark-white.png` → utilisée dans le footer (fond bleu foncé)

## Où copier quoi
- `public/logo/*` → à la racine `public/` de ton projet
- `src/components/Header.tsx` → remplace le fichier existant
- `src/components/Footer.tsx` → remplace le fichier existant
- `src/app/globals.css` → remplace le fichier existant (ajout de la règle
  `.brand-logo-img` à la toute fin ; tout le reste est inchangé)

`npm run dev` puis vérifie le rendu du logo dans le header et le footer.
