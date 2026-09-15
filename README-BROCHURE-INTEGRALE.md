# Mise à jour — tenues stylisées, résultats animés, Formations enrichie

## 1. Tenues scolaires plus originales (confirmées justes, pas touchées niveau contenu)
Chaque tenue est maintenant représentée par une petite silhouette
stylisée (haut + bas colorés selon les vraies couleurs), plutôt que du
texte avec des pastilles. Légère rotation + zoom au survol pour un
rendu plus vivant.
- Nouveau fichier : `src/components/UniformSwatch.tsx`

## 2. Page Actualités — recentrée sur les résultats, animée
Plus de "cours de vacances" ni de barre latérale : juste les résultats,
mis en scène avec deux anneaux de progression animés (CEP 100%,
BEPC 98%) qui se remplissent et comptent jusqu'au chiffre final au
défilement.
- Nouveau fichier : `src/components/ResultsShowcase.tsx`
- `src/app/actualites/page.tsx` réécrite

## 3. Page Formations — enfin une vraie valeur ajoutée
La section "Pourquoi choisir «Les Jumelles»" reprend maintenant les
points 2 à 6 de la brochure en cartes numérotées (comme sur la page
d'accueil) : directeur spécialiste, clubs d'anglais mensuels, aucune
rétrogradation, garderie, cantine — avec le vrai texte de la brochure,
pas des reformulations vagues.

## Ce qui était déjà là (confirmé, pas retouché)
D'un tour précédent : accroche "L'école bilingue moderne de vos rêves",
citation de clôture, tableau des tranches et des TD sur Inscription,
scoping Maternelle/Primaire sur Vie scolaire. Si tu ne voyais pas ces
changements, c'est probablement que le zip précédent n'avait pas encore
été copié dans ton projet — vérifie que `src/app/formations/page.tsx`
correspond bien à celui-ci avant de juger.

## Où copier quoi
- `src/app/globals.css`
- `src/app/formations/page.tsx`
- `src/app/actualites/page.tsx`
- `src/components/ResultsShowcase.tsx`
- `src/components/UniformSwatch.tsx`
- `src/components/VieScolaireContent.tsx`

`npm run dev` et regarde en particulier : les tenues sur Vie scolaire,
les anneaux animés sur Actualités, et la nouvelle grille "Pourquoi nous
choisir" sur Formations.
