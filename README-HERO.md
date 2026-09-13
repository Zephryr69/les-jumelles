# Mise à jour — bannière supprimée + hero en image de fond

## Ce qui change
- **Bannière du haut** (la fine barre bleue avec le slogan, la localisation
  et le téléphone au-dessus du header) : supprimée. Le header commence
  directement en haut de page.
- **Hero de l'accueil** : l'image n'est plus à côté du texte en colonne,
  elle est maintenant en arrière-plan de toute la section, avec un
  dégradé sombre superposé pour que le texte blanc reste bien lisible.
  Le texte passe en blanc/or (au lieu de bleu foncé/gris) pour ressortir
  sur la photo. Le badge "Bonjour. / Hello." flotte maintenant en bas à
  droite du hero plutôt que collé à l'ancienne colonne image.
- La carte "Ici, chaque enfant trouve sa place" (qui flottait sur l'image)
  a été retirée — elle n'avait plus de sens comme élément flottant sur un
  fond plein écran. Dis-moi si tu veux que je la réintègre autrement
  (par exemple comme bandeau sous le hero).

## Où copier quoi
- `src/components/Header.tsx` → remplace le fichier existant
- `src/app/globals.css` → remplace le fichier existant
- `src/app/page.tsx` → remplace le fichier existant (page d'accueil)

`npm run dev` et vérifie le rendu du hero et du header sur desktop et mobile.
