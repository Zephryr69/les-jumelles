# Correction — titre réduit/blanc, icônes simplifiées

## Titre
En creusant, j'ai trouvé le vrai problème : la règle de base qui mettait
le titre en blanc avait disparu pendant une précédente modification (elle
ne survivait que dans les tailles par palier d'écran, sans la couleur).
Je l'ai rétablie explicitement en blanc, et j'en ai profité pour réduire
la taille à tous les paliers, plus sobre qu'avant.

## Icônes
Retiré le médaillon circulaire doré — l'icône (devise/vision) s'affiche
maintenant directement en doré, sans cercle ni bordure, un peu plus
grande. Plus simple, plus direct.

Si ce n'est pas le style d'icône que tu avais en tête, dis-moi plus
précisément ce que tu envisages (taille, couleur, avec/sans fond) et je
recommence.

## Où copier quoi
- `src/app/globals.css` → remplace le fichier existant

`npm run dev` et vérifie le rendu.
