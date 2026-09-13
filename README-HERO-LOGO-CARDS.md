# Mise à jour — logo à côté du titre, cartes devise/vision raffinées

## Logo
Passé au-dessus → à **côté** du titre, dans une rangée horizontale, et
agrandi (168px, contre 100px avant). Sur mobile/tablette (< 980px), il
repasse au-dessus du titre (110px) pour rester lisible en colonne étroite.

## Cartes devise/vision
Traitement plus soigné :
- Icône dans un médaillon circulaire doré (au lieu d'une icône nue)
- Fine barre dorée verticale sur le bord gauche de chaque carte
- Fond en dégradé subtil + ombre portée pour un effet de profondeur
- Le texte de la devise/vision passe en italique serif (Playfair Display)
  pour une touche plus élégante, distincte du reste du texte

## Où copier quoi
- `src/app/globals.css` → remplace le fichier existant
- `src/app/page.tsx` → remplace le fichier existant

`npm run dev` et regarde le rendu du hero sur desktop et mobile.
