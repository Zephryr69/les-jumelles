# Mise à jour — police, icônes, favicon, résultats, adresse, horaires, photos

⚠️ Remplace entièrement `src/app/` et `src/components/` — beaucoup de
fichiers touchés. Ce zip contient aussi 2 nouveaux fichiers image
(`src/app/icon.png` et `src/app/apple-icon.png`) : le favicon.

## 1. Police : Lexend uniquement
Playfair Display est retiré. Titres et texte courant utilisent Lexend
partout. Les quelques italiques qui dépendaient de Playfair (accents de
titre, mot anglais sur la page À propos) sont passées en gras + couleur
plutôt qu'en italique de substitution (Lexend italique n'était pas
chargée, le rendu aurait été moche).

## 2. Icônes au lieu d'émojis
Tous les emojis restants (🌍👩‍🏫📍🎓 dans la bande de confiance, 📚🍽️🎨🚌🎉👩‍🏫
dans la galerie vie scolaire, 🎓📚 sur la page Actualités) sont remplacés
par des icônes lucide-react, cohérentes avec le reste du site.

## 3. Favicon
Généré à partir de ton logo officiel (le badge circulaire noir/blanc).
`icon.png` (512×512) et `apple-icon.png` (180×180) sont placés dans
`src/app/` — Next.js les détecte automatiquement, aucune configuration
supplémentaire nécessaire.

## 4. Résultats mis à jour (2026)
CEP 100% et BEPC 98% (2026) — le BAC n'est plus affiché. Mis à jour à la
fois sur la page d'accueil (section résultats) et sur la page Actualités.

## 5. "Aux Jumelles" → nom complet
Toutes les occurrences remplacées par "au Complexe Scolaire Bilingue
«Les Jumelles»" (page d'accueil, page Vie scolaire).

## 6. Horaires du samedi ajoutés
"Samedi jusqu'à 18h00" ajouté partout où les horaires apparaissent :
footer, page Contact, page Inscription, note sur la garderie (Vie scolaire).

## 7. Adresse de l'annexe corrigée
"À proximité de l'Hôtel Palais Oriental" → "Dans la zone de l'Hôtel
Palais Oriental 2" — footer, page À propos, page Contact (texte + lien
Google Maps), page Inscription (menu déroulant).

## 8. Photos : enfants africains
J'ai cherché et vérifié des photos Unsplash montrant réellement des
enfants africains en contexte scolaire (et non des photos génériques),
et remplacé toutes les images du site par ce nouveau lot — page
d'accueil (hero, 4 cartes de niveaux, section mission, galerie 6 tuiles),
page À propos, page Vie scolaire (hero + 5 onglets), et les niveaux de
la page Formations.

**Limite à connaître** : je n'ai trouvé qu'une douzaine de photos
vérifiées correspondant bien au sujet, donc certaines reviennent sur
plusieurs pages différentes (jamais deux fois sur la même page). Deux
approximations à noter en particulier :
- **Cantine** : pas de photo trouvée montrant précisément un repas/une
  cantine — j'ai mis une photo d'enfants assis ensemble en attendant
  mieux.
- **Fêtes et événements** : pas de photo de fête trouvée non plus —
  photo de groupe utilisée à la place.

Dès que tu as de vraies photos de l'école (même prises au téléphone),
elles remplaceront avantageusement tout ça — c'est ce qu'il y a de mieux
à terme, comme le soulignait le document de conseils que tu avais partagé.

## Où copier quoi
Remplace entièrement `src/app/` et `src/components/`.

`npm run dev` et vérifie : le favicon dans l'onglet du navigateur, les
résultats (accueil + actualités), les horaires et l'adresse (footer,
contact, inscription), et les nouvelles photos sur chaque page.
