# Test de recrutement Tediber - Suivi de commande

L'application utilise le framework vueJS (version 2.x) et consomme les données d'une API minimaliste (le code source de cette API ne figure pas sur ce dépôt).

Le projet a été généré avec Vue-CLI (l'utilisation d'une configuration personnalisée de webpack semblait superflue).

Les principales dépendances de ce projet sont citées ci-dessous :
* vueJS
* vue-router
* vuex
* axios
* showdown (Conversion de markdown en HTML)
* dompurify (sanitize des contenus récupérés de l'API)

Les cas de test et le contenu de l'application sont détaillés en page d'accueil.

## Installation des dépendances
Après avoir cloné le dépôt sur votre machine, déplacez vous dans le dossier créé et entrez la commande suivante :
```
yarn install
```

### Serveur local
Après avoir lancé la commande yarn install, vous pouvez lancer la commande suivante pour tester en local.
```
yarn serve
```

Rendez-vous ensuite dans votre navigateur et saisissez l'adresse [localhost:8080](http://localhost:8080/).