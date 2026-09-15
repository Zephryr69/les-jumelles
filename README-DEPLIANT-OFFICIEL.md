# Mise à jour — vrais tarifs et infos du dépliant officiel

## Confirmé sans changement (déjà bon sur le site)
- WhatsApp/téléphone : 01 96 67 70 04 reste inactif (le dépliant a une coquille : 98 au lieu de 96)
- Annexe : reste "Hôtel Palais Oriental 2"
- Uniforme garçon, 1ère tenue (lundi-mercredi) Maternelle/Primaire : reste bleu nuit

## 1. Grille tarifaire — page Inscription (corrigée en profondeur)
L'ancien tableau mélangeait inscription + scolarité + TD + activités en un
seul total approximatif. Le dépliant montre une structure différente et
plus précise :

**Frais de formation** (inscription 5 000 F / réinscription 4 000 F,
1 000 F de moins) :
- Pré-maternelle : 95 000 F de scolarité → total 100 000 F (pas de réinscription indiquée)
- Maternelle 1&2 : 88 000 F → total 93 000 F / 92 000 F
- Primaire (CI-CM2) : 93 000 F → total 98 000 F / 97 000 F
- Collège (6e-3e) : 113 000 F → total 118 000 F / 117 000 F
- Seconde D : 125 000 F → total 130 000 F / 129 000 F
- Première/Tle D : 130 000 F → total 135 000 F / 134 000 F

**Travaux dirigés (TD)** — frais annuels séparés, payés à l'inscription,
pas de TD avant le CM1 : CM1 13 000 F, CM2 15 000 F, 4ème 20 000 F,
3ème 25 000 F, 2nde 25 000 F, 1ère 25 000 F, Tle D 30 000 F.

Le tableau principal et le résumé de la barre latérale sont mis à jour
en conséquence. J'ai retiré la ligne "Frais d'activités : 10 000 F" du
tableau principal, qui ne correspondait à rien dans le dépliant — les
frais divers (sortie, Noël, fin d'année) restent affichés séparément
sur la page Vie scolaire, où ils étaient déjà.

## 2. Page Inscription — nuance sur le test diagnostique
L'évaluation diagnostique écrite s'applique seulement aux nouveaux
élèves dont le dossier ne rassure pas l'administration (précision du
dépliant, avant c'était formulé plus vaguement).

## 3. Page Vie scolaire — nouvelle section "Cantine & garderie"
Cette section n'existait pas vraiment avant (le contenu était vague,
"à confirmer avec le secrétariat"). Le dépliant donne enfin de vraies
infos :
- Cantine : 3 options de menu, élèves et personnel y mangent ensemble
  pour une alimentation sûre
- Garderie : pour les enfants qui passent le midi à l'école

Aussi précisé : les chemises + macarons de l'uniforme Maternelle/Primaire
coûtent 4 000 F pour les anciens élèves (gratuit pour les nouveaux,
comme déjà su).

## 4. Page À propos — directeur + non-rétrogradation
Ajouté : le directeur est professeur certifié d'anglais, spécialiste de
l'approche bilingue. Précisé : les élèves venant d'écoles non bilingues
ne sont jamais rétrogradés dans une classe inférieure.

## Où copier quoi
- src/app/globals.css
- src/app/inscription/page.tsx
- src/app/a-propos/page.tsx
- src/components/VieScolaireContent.tsx

npm run dev et vérifie surtout la page Inscription (nouveaux tableaux)
et la nouvelle section Cantine & garderie sur Vie scolaire.
