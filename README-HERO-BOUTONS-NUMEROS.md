# Mise à jour — hero enrichi, boutons colorés, numéros corrigés

⚠️ Remplace entièrement `src/app/` et `src/components/` — beaucoup de
fichiers touchés cette fois (numéro WhatsApp changé partout).

## 1. Hero : devise/vision mises en avant + logo visible
- Le logo (version blanche) apparaît maintenant en haut du hero, bien visible
- « Notre devise » et « Notre vision » sont devenues deux cartes distinctes
  avec icône, étiquette dorée en majuscules, et texte en gras — beaucoup
  plus visibles qu'une simple ligne de texte
- Le bouton WhatsApp n'a plus l'emoji 💬 : il utilise l'icône lucide
  `MessageCircle`, cohérente avec les autres boutons du site

## 2. Boutons : plus de nuance et de contraste
- **Bouton principal (bleu)** : léger dégradé + ombre portée, moins plat
- **Bouton blanc** (fees-box) : bordure dorée pour plus de chaleur
- **Nouveau : bouton WhatsApp (vert `#25d366`)** — appliqué à tous les
  boutons WhatsApp du site (hero, inscription ×2, contact, bouton flottant)
  pour une vraie distinction visuelle par type d'action, plutôt que tout
  en bleu

## 3. Numéros de téléphone / WhatsApp corrigés
- **Un seul numéro WhatsApp partout** : `+229 01 97 85 89 51`
  (`wa.me/2290197858951`) — hero, inscription, contact, footer, bouton flottant
- **Le numéro d'appel classique reste** `+229 01 97 29 44 34` (`tel:`), resté
  inchangé — ce n'est PAS le numéro WhatsApp, juste un numéro de téléphone
- **`+229 01 96 67 70 04` entièrement retiré du site** (inactif) — footer et
  page Contact ne le mentionnent plus du tout
- La page Contact distingue maintenant clairement "Téléphone" et "WhatsApp"
  comme deux moyens de contact séparés (avant, le texte disait à tort que
  le même numéro faisait les deux)

## Où copier quoi
Remplace entièrement `src/app/` et `src/components/`.

`npm run dev` et vérifie : le hero (logo + cartes devise/vision), les
couleurs des boutons, et les numéros sur la page Contact et le footer.
