# Mise à jour — icônes lucide-react, navbar Lexend, petits textes agrandis

⚠️ Cette livraison contient TOUT le code source actuel (`src/app` et
`src/components`) — remplace l'intégralité de ces deux dossiers dans ton
projet plutôt que de fusionner fichier par fichier, pour éviter d'oublier
un changement.

## 1. Icônes remplacées par lucide-react
Les icônes "faites maison" (sprite SVG dessiné à la main) sont remplacées
par une vraie bibliothèque, [lucide-react](https://lucide.dev) — des
icônes cohérentes, professionnelles, largement utilisées.

**Installation requise :**
```bash
npm install lucide-react
```

**Fichier à supprimer** : `src/components/IconSprite.tsx` n'existe plus
dans ce lot — supprime-le de ton projet s'il y est encore (plus utilisé
nulle part).

Correspondance des anciennes icônes → nouvelles (au cas où tu veuilles en
changer certaines) :
- flèche → ArrowRight, flèche diagonale → ArrowUpRight
- localisation → MapPin, téléphone → Phone, email → Mail, horloge → Clock
- WhatsApp → MessageCircle (lucide n'a pas de logo de marque WhatsApp,
  c'est l'icône générique de bulle de discussion la plus proche)
- livre → BookOpen, globe → Globe, école → School, coche → Check
- bouclier → ShieldCheck, soleil → Sun, citation → Quote
- menu → Menu, fermer → X, chevron → ChevronRight
- télécharger → Download, calendrier → Calendar, info → Info, cœur → Heart

## 2. Navbar en Lexend, gras
Les liens du menu (Accueil, À propos, etc.) repassent de Playfair Display
à **Lexend**, en gras (700) — cohérent avec ta demande d'utiliser Lexend
pour le texte plus "fonctionnel" du site.

## 3. Petits textes agrandis
Tous les textes à 11px, 12px et 13px sont remontés de 2px chacun
(11→13, 12→14, 13→15) : mentions légales, notes de bas de carte, liens
secondaires, légendes, etc. — plus confortables à lire sans changer la
hiérarchie générale.

## Où copier quoi
Remplace entièrement `src/app/` et `src/components/` de ton projet par
ceux de ce zip.

`npm install lucide-react`, puis `npm run dev` et vérifie que toutes les
icônes s'affichent bien sur chaque page.
