# Refonte — page Vie scolaire

⚠️ Installation requise :
```bash
npm install framer-motion
```

## Ce qui change
J'ai repris le contenu exact de ton ancien `VieScolaire.jsx` (celui du
projet React d'origine) plutôt que la version en onglets que j'avais
inventée — c'est elle qui rendait la page confuse : deux onglets
(cantine, garderie) avaient un contenu vague ("à confirmer auprès du
secrétariat") faute de vraie information, ce qui cassait la cohérence
de l'ensemble.

**Suppression** : `src/components/LifeTabs.tsx` n'est plus utilisé,
supprime-le de ton projet.

**Nouveau** : `src/components/VieScolaireContent.tsx`, avec 3 sections
qui s'affichent directement les unes sous les autres (plus simple à
suivre qu'un système d'onglets) :

1. **Les uniformes scolaires** — une carte par cycle (Maternelle &
   Primaire / Secondaire 1er cycle / Secondaire 2e cycle), avec :
   - Les tenues du lundi-mercredi et du jeudi-vendredi, clairement séparées
   - De petites **pastilles de couleur** à côté de chaque description
     (kaki, bleu nuit, marron, rose claire, beige, vert foncé) — un
     repère visuel immédiat, plus besoin de déchiffrer le texte pour
     savoir à quoi ressemble la tenue
   - Les coûts, séparés visuellement en bas de carte
2. **Activités & clubs** — le texte original sur les sorties, fêtes et
   clubs d'anglais mensuels
3. **Frais divers** — présentés en liste avec montants alignés à
   droite, plus le total

## Animations (framer-motion)
Chaque section apparaît en fondu + léger glissement vers le haut au
défilement (une seule fois, pas à chaque scroll). Les 3 cartes
d'uniformes apparaissent en cascade (léger décalage entre chacune)
plutôt que toutes en même temps, pour un effet plus soigné.

## Où copier quoi
- `src/app/globals.css` → remplace le fichier existant
- `src/app/vie-scolaire/page.tsx` → remplace le fichier existant
- `src/components/VieScolaireContent.tsx` → nouveau fichier
- Supprime `src/components/LifeTabs.tsx`

`npm install framer-motion`, puis `npm run dev` et vérifie le rendu et
les animations au défilement.
