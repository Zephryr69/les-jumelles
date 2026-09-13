# Mise à jour — textes sur une ligne, icônes centrées, plus d'italique

## Ce qui change
- **Titre, devise, vision** : passés en `white-space: nowrap` (pas de saut
  de ligne) sur desktop et tablette
- **Icônes** : centrées verticalement par rapport au texte (au lieu
  d'être alignées en haut), pour un rendu plus net avec du texte sur
  une seule ligne
- **Plus d'italique** : le texte des cartes repasse en Lexend (sans-serif),
  gras, comme le reste du site — plus simple, plus lisible
- **Cartes en pleine largeur** : la devise et la vision sont maintenant
  chacune sur toute la largeur du hero (au lieu d'être côte à côte à
  moitié chacune) — ça leur donne la place nécessaire pour tenir sur
  une ligne

## ⚠️ Un compromis nécessaire sur mobile
Le texte de la vision ("Un enseignement bilingue dès la maternelle, pour
l'excellence et l'ouverture sur le monde.") fait environ 90 caractères.
Sur un écran large, il tient sur une ligne sans problème. Mais sur un
téléphone étroit (moins de 740px de large), le faire tenir sur une seule
ligne obligerait à une taille de texte illisible (8-9px) — donc en dessous
de 740px, j'ai laissé cette phrase repasser en retour à la ligne normal,
pour rester lisible. Le titre et la devise, plus courts, restent sans
saut de ligne jusqu'à un très petit écran (ils rétrécissent progressivement).

Si tu préfères une autre approche pour mobile (texte plus court, ou
défilement horizontal plutôt que retour à la ligne), dis-le-moi.

## Où copier quoi
- `src/app/globals.css` → remplace le fichier existant
- `src/app/page.tsx` → remplace le fichier existant

`npm run dev` et vérifie le rendu sur desktop ET sur mobile (redimensionne
la fenêtre ou utilise les outils de dev du navigateur).
