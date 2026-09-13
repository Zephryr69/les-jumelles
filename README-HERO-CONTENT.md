# Mise à jour — nouveau contenu du hero

## Ce qui change
Le hero reprend ton texte : titre officiel, mission, devise, vision, et
deux boutons.

- **Titre** : « Complexe Scolaire Bilingue «Les Jumelles» » — taille
  réduite par rapport à l'ancien titre poétique (c'est une phrase plus
  longue, il fallait l'adapter pour que ça reste lisible et élégant)
- **Description** : la mission de l'école, inchangée par rapport à ton texte
- **Devise et vision** : deux lignes compactes sous la description, avec
  les mots-clés en surbrillance dorée
- **Deux boutons** :
  - « Découvrir nos formations » → pointe vers `/formations` (la vraie
    route Next.js du site, pas l'ancien lien GitHub Pages en `#/formations`
    que tu m'avais donné — ce lien ne fonctionnerait plus sur le nouveau site)
  - « 💬 Contact rapide via WhatsApp » → `wa.me/22997858951`, exactement
    le lien que tu as donné

## Où copier quoi
- `src/app/globals.css` → remplace le fichier existant
- `src/app/page.tsx` → remplace le fichier existant

`npm run dev` et regarde le rendu.
