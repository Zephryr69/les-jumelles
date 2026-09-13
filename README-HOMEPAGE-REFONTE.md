# Refonte de la page d'accueil — suite au document de conseils

J'ai repris la plupart des suggestions du document. Voici ce qui a changé,
section par section :

## ✅ Implémenté

**1. Titre agrandi (PC)** — jusqu'à 36px sur grand écran, toujours sans
débordement (voir échelle par palier dans `globals.css`).

**2. Bande de confiance (4 éléments avec émojis)**
🌍 Bilingue dès la maternelle · 👩‍🏫 Suivi individualisé · 📍 2 sites à
Porto-Novo · 🎓 De la pré-maternelle à la terminale — le "suivi
individualisé" manquait, il est ajouté.

**3. "Ce qui nous rend différents" (nouvelle section, 01-04)**
Reprend exactement ta proposition : bilinguisme vivant, suivi attentif,
cadre structurant, ouverture sur le monde — en cartes numérotées, sans
surcharge (pas d'image + icône + titre + texte comme tu le redoutais).

**4. Parcours complet en 4 cartes photo**
Pré-maternelle & Maternelle / Primaire / Collège / Lycée, chacune avec
photo, effet d'assombrissement au survol, et bouton "Découvrir".

**5. Galerie "Vie à l'école" (6 aspects)**
📚 En classe · 🍽️ À la cantine · 🎨 Activités et projets · 🚌 Sorties
scolaires · 🎉 Fêtes et événements · 👩‍🏫 Vie avec les enseignants.

**6. Section résultats (chiffres RÉELS uniquement)**
CEP 100%, BEPC 98%, BAC 100% (2025) — ce sont les seuls chiffres que je
connais avec certitude d'après tes documents. Je n'ai *rien* inventé
au-delà.

**7. CTA final reformulé**
« Construisons ensemble le parcours de votre enfant » + deux boutons :
prendre rendez-vous et WhatsApp — dans le bandeau partagé par toutes les
pages (footer).

## ⚠️ Deux points laissés de côté — j'ai besoin de vraies infos

**Le slogan du hero** : le document propose un nouveau slogan poétique
("Deux langues. Une exigence...") mais ton hero actuel affiche le nom
officiel de l'école, pas un slogan — ce sont deux directions différentes.
Je n'ai pas touché au hero pour éviter de trancher à ta place. Tu veux
garder le nom officiel tel quel, ou basculer vers un slogan avec le nom
en accroche secondaire ?

**La section "Preuves & confiance" (témoignages + chiffres clés)** : le
document insiste bien — à raison — sur le fait de n'utiliser que de vrais
chiffres vérifiables. Je n'ai pas les informations suivantes dans ce que
tu m'as partagé :
- Nombre d'années d'existence de l'école
- Nombre d'élèves accompagnés
- Nombre d'enseignants/encadreurs
- De vrais témoignages de parents (avec leur accord pour publication)

Si tu me donnes ces éléments, je construis cette section. Sinon, je
préfère ne pas la publier plutôt que d'inventer des chiffres.

## ⚠️ Rappel sur les photos
Comme signalé dans le document lui-même : toutes les photos du site
restent pour l'instant des photos d'illustration Unsplash (pas les
vraies photos de l'école). Ce n'est pas nouveau, mais ça vaut le
rappel — à remplacer avant la mise en ligne définitive.

## Où copier quoi
- `src/app/page.tsx` → page d'accueil
- `src/app/globals.css` → styles
- `src/components/Footer.tsx` → CTA final

`npm run dev` et parcours toute la page d'accueil.
