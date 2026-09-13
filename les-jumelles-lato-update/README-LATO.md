# Mise à jour — texte courant en Lato

## Ce qui change
`--sans` passe de Source Sans 3 à **Lato** — chaleureuse et très lisible,
s'accorde bien avec Playfair Display pour les titres.

Lato n'a que 3 graisses standard (400 normal, 700 gras, 900 très gras),
contrairement à Source Sans 3 qui avait des graisses intermédiaires
(450, 550, 650). Les quelques endroits qui demandaient un poids 550
(certains `<strong>`, les résumés FAQ) passent explicitement à 700 pour
un rendu net. Les nombreux endroits en 600 (boutons, liens, libellés)
n'ont pas besoin d'être touchés : le navigateur les affiche automatiquement
en 700, le poids disponible le plus proche.

## Où copier quoi
- `src/app/globals.css` → remplace le fichier existant
- `src/app/layout.tsx` → remplace le fichier existant (nouveau lien Google Fonts)

`npm run dev` et vérifie le rendu du texte courant.
