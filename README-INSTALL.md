# Les Jumelles — v2, fidèle à la maquette validée

⚠️ **Ce lot remplace entièrement les deux zips précédents** (header/footer +
pages de contenu). La v1 réutilisait par erreur le CSS de l'ancien projet
React — celle-ci repart intégralement de la maquette HTML que tu as choisie
et validée, avec uniquement le contenu corrigé pour être fidèle à la réalité
de l'école.

## Ce qui vient exactement de la maquette
- Tout le CSS (`src/app/globals.css`) est extrait tel quel de la maquette :
  couleurs, typographies (Lora + Source Sans 3 via Google Fonts), layout,
  cartes, onglets, formulaires, footer.
- La structure HTML de chaque page (header, sections, classes) est reprise
  à l'identique, convertie en JSX.
- Les onglets interactifs (niveaux sur Formations, thèmes sur Vie scolaire)
  sont recréés en composants client (`LevelTabs.tsx`, `LifeTabs.tsx`) —
  la maquette utilisait du JS vanilla, converti ici en `useState` React.

## Contenu corrigé par rapport à la maquette générée
- **Formations** : ajout d'une section sur la série D, les clubs d'anglais
  mensuels, la F.E.N., le journalisme scolaire, les tests trimestriels et
  les travaux dirigés — absents de la maquette d'origine.
- **Inscription** : la grille tarifaire affichait « Sur demande » partout ;
  remplacée par les vrais montants (détail + total par niveau). Ajout de
  l'entretien parents obligatoire et de l'évaluation diagnostique. Nombre
  exact de photos d'identité (3, dont 1 à la réinscription).
- **Vie scolaire** : l'onglet « uniformes » était généraliste (« à confirmer
  auprès du secrétariat ») ; remplacé par les couleurs et coûts réels par
  cycle. Les onglets « sorties » et « fêtes » incluent maintenant les frais
  réels (4 000 F / 3 000 F / 3 000 F).
- **Actualités** : la maquette affichait un état vide (« le prochain
  chapitre s'écrit ici ») ; remplacé par les résultats 2025 (CEP 100%,
  BEPC 98%, BAC 100%) et les cours de vacances.

## Simplifications assumées (à me dire si tu veux que j'aille plus loin)
- **Pas de mode sombre** : la maquette choisie n'en prévoit pas du tout —
  je l'ai donc retiré entièrement (le `ThemeProvider` des zips précédents
  n'existe plus ici). Dis-moi si tu veux que je le réintègre malgré tout.
- **Formulaires (inscription/contact)** : la maquette ouvrait une boîte de
  dialogue récapitulative avant envoi (JS vanilla assez complexe). Je l'ai
  simplifié en boutons qui ouvrent directement WhatsApp ou l'e-mail — le
  formulaire aide à préparer le message, mais l'envoi se fait manuellement.
  Je peux recréer la boîte de dialogue complète si tu la veux fidèle à 100%.
- **Images** : ce sont les photos d'illustration Unsplash de la maquette
  (`<img>` classique, pas `next/image`, pour éviter une config de domaines
  distants). À remplacer par vos vraies photos d'école quand vous les aurez.
- **Filtres d'actualités** : la maquette prévoyait des boutons de filtre
  (Événements / Réussites / Infos aux familles) pour une future liste
  d'articles. Retirés pour l'instant puisqu'il n'y a que 2 actus réelles —
  à réintroduire quand vous aurez plus de contenu à publier.

## Où copier quoi
Remplace entièrement le contenu de `src/app/` et `src/components/` de ton
projet par celui de ce zip (les composants `ThemeProvider`, `Sidebar`, etc.
des livraisons précédentes ne sont plus utilisés).

## À faire ensuite
1. `npm run dev` et vérifie chaque route.
2. Dépose `public/docs/frais-inscription.pdf` (lien déjà présent sur la
   page Inscription, fichier non fourni).
3. Dis-moi si tu veux que je restaure le mode sombre, la boîte de dialogue
   de confirmation des formulaires, ou autre chose de la maquette que
   j'aurais simplifié.
