# Mise à jour — typographie : Playfair Display

⚠️ Remplace les deux lots précédents (Lora puis Fraunces).

## Le choix
**Playfair Display** pour tous les titres — une serif élégante et
contrastée (empattements fins, forts contrastes pleins/déliés), très
affirmée visuellement, qui capte bien l'attention sur les grands titres
tout en gardant un esprit soigné et institutionnel.

Contrairement à Fraunces, Playfair Display n'a pas d'axe de taille optique
variable — pas de risque du bug précédent (déformation à petite taille).

**Source Sans 3** reste la police du texte courant.

## Ce qui a changé
- `--serif` pointe vers Playfair Display
- Tracking (letter-spacing) légèrement resserré sur les grands titres
  (h1 : -2px, h2 : -1.1px) — Playfair rend particulièrement bien avec un
  espacement plus serré, ça renforce le côté "affirmé"
- Les mots en emphase (`<em>`) dans les grands titres restent en italique —
  les italiques de Playfair Display sont particulièrement travaillées,
  encore plus marquées que celles de Fraunces
- **Liens du menu de navigation** (Accueil, À propos, etc.) : passés en
  Playfair Display aussi, pour une identité homogène avec le nom de l'école.
  Taille remontée à 16px (au lieu de 14px) car une serif d'affiche comme
  Playfair reste moins dense qu'une sans-serif à petite taille — nécessaire
  pour ne pas perdre en lisibilité.

## Où copier quoi
- `src/app/globals.css` → remplace le fichier existant
- `src/app/layout.tsx` → remplace le fichier existant

`npm run dev` et regarde le rendu.
