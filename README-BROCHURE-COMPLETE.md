# Mise à jour — brochure exploitée à fond + bug corrigé

## Sur l'icône WhatsApp
Le symbole n'a probablement pas changé parce que le build plantait
(fichier manquant) avant que tu ajoutes `WhatsAppIcon.tsx` — l'app ne
pouvait rien afficher du tout tant que l'erreur n'était pas corrigée.
Avec le fichier en place, le nouveau logo (silhouette du combiné dans
une bulle, remplie) devrait bien apparaître. Si ce n'est toujours pas
visible après un redémarrage de `npm run dev`, dis-le-moi — ça
voudrait dire autre chose.

## Nouveau contenu tiré de la brochure

**1. Page Inscription — détail des 3 tranches de paiement**
Tableau complet par classe (1ère tranche à la rentrée / 2e fin novembre
/ 3e fin janvier), avec les vrais montants de la brochure. Avant, on
disait juste "peut se faire en plusieurs tranches" sans détail.

**2. Page Formations — largement enrichie**
- Accroche officielle ajoutée : "L'école bilingue moderne de vos rêves."
- Nouvelle section "Pourquoi choisir «Les Jumelles»" avec le vrai texte
  de la brochure sur l'exigence pédagogique du bilinguisme au Bénin,
  plus : le directeur (professeur certifié d'anglais), la
  non-rétrogradation, la garderie, la cantine (avec lien vers Vie scolaire)
- Citation de clôture : "Nous formons pour un label. L'approche
  bilingue est un art."
- **Bug corrigé** : la FAQ citait encore l'ancien numéro inactif
  (01 96 67 70 04) — retiré.

**3. Page Vie scolaire**
Précisé que les sorties/fêtes concernent les enfants de Maternelle et
de Primaire (information de la brochure, absente avant).

## Où copier quoi
- `src/app/formations/page.tsx`
- `src/app/inscription/page.tsx`
- `src/components/VieScolaireContent.tsx`

`npm run dev` et relis la page Formations en entier — c'est elle qui a
le plus changé.
