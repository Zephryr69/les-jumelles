# Mise à jour — nouveau texte du hero + nom fusionné dans le header

## Hero (page d'accueil)
Le texte suit ta version : phrases raccourcies, rythme plus marqué,
répétitions supprimées.
- L'accroche ("Apprendre aujourd'hui. / S'ouvrir au monde.") passe sur
  deux lignes courtes.
- Le titre garde l'accent doré/italique sur « de grandir. », maintenant
  sur la même ligne que « Mille façons ».
- La description est reformulée en deux phrases nettes, sans articles
  superflus.

## Header / Footer
Le nom de l'école passe d'un format sur deux lignes (grand nom + petit
sous-titre) à une seule ligne fusionnée :
**Complexe Scolaire Bilingue «Les Jumelles»**

Pour que ça tienne sur une ligne, la taille est descendue de 25px à 19px
en desktop, avec des paliers plus petits sur mobile (jusqu'à 13px sur
très petit écran, où le texte est autorisé à passer sur deux lignes pour
rester lisible plutôt que de devenir minuscule).

## Où copier quoi
- `src/app/page.tsx` → page d'accueil
- `src/app/globals.css` → styles (hero + brand-name)
- `src/components/Header.tsx` → header
- `src/components/Footer.tsx` → footer

`npm run dev` et vérifie le rendu du nom dans le header sur desktop et
mobile — dis-moi si la taille te convient.
