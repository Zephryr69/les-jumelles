# Correction — débordement du titre, icônes et centrage des cartes

Seul `globals.css` change cette fois — pas besoin de toucher à `page.tsx`.

## 1. Débordement du nom de l'établissement corrigé
La taille du titre était trop optimiste par rapport à l'espace réellement
disponible à côté du logo. Je suis reparti sur des tailles beaucoup plus
prudentes à chaque palier d'écran, avec une marge de sécurité — le titre
reste sur une seule ligne sans déborder, y compris sur petit écran (il
devient simplement plus compact).

## 2. Icônes repositionnées
Au lieu d'être à gauche du texte (ce qui créait un décalage visuel bizarre
une fois le texte centré), l'icône est maintenant **au-dessus** du texte,
centrée, dans chaque carte — disposition classique et équilibrée.

## 3. Textes centrés
Le texte de la devise et de la vision est maintenant centré dans sa carte,
aligné avec l'icône au-dessus.

## Où copier quoi
- `src/app/globals.css` → remplace le fichier existant

`npm run dev` et vérifie le hero à plusieurs largeurs d'écran (redimensionne
la fenêtre ou utilise les outils de dev du navigateur en mode responsive).
