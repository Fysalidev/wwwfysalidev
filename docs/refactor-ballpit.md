# Refactor: Extract Ballpit three.js logic

Commit: `265062e`

Résumé
------
- Extraction de la logique Three.js du composant volumineux `app/components/Ballpit.jsx` vers `app/lib/ballpit.js`.
- Simplification du composant `Ballpit.jsx` pour qu'il importe `createBallpit` depuis `app/lib/ballpit.js`.
- Build et lint passés localement ; PR de refactor poussée et mergée sur `main`.

Motivation
----------
Le fichier `Ballpit.jsx` était très volumineux (~788 lignes) et difficile à maintenir. L'extraction permet :
- meilleure lisibilité et séparation des responsabilités,
- possibilité d'ajouter des tests unitaires ciblés pour la logique Three.js,
- facilité pour de futures optimisations et refactorings.

Actions effectuées
------------------
- Nouvelle branche de travail : `refactor/ballpit` (merge dans `main`).
- Nouveau fichier : `app/lib/ballpit.js` (extraction de la logique).
- `app/components/Ballpit.jsx` simplifié.
- Workflow CI ajouté (lint & build) dans `.github/workflows/ci.yml`.

Si besoin, je peux ajouter des tests basiques pour `app/lib/ballpit.js` et ouvrir une PR dédiée pour la coverage.
