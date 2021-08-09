# Choix techniques

J'ai rencontré des difficultés pour décider de la structure de l'application. En effet, il ne s'agit "que" d'une page et l'utilisation de vuex et du router 

# Conventions (et doutes)

# Expérience Utilisateur

J'ai eu quelques doutes sur certains éléments lors de l'intégration de la maquette. Par exemple, pour le composant de suivi des étapes de livraison, les maquettes ne spécifiaient pas l'aspect du composant en version mobile.
Dans la plupart des cas, nous linéarisons le contenu mais dans ce cas précis, j'ai choisi de conserver les images les unes à côté des autres en réduisant les proportions en fonction de la largeur de l'écran. Une linéarisation aurait forcé l'utilisateur à scroller et l'aurait empêché d'avoir une vision globale du suivi alors que c'est l'objectif même de ce composant.
Pour ce même composant, j'ai choisi de l'afficher "ouvert" par défaut car j'ai pensé que c'est ce que l'utilisateur cherchait en premier lieux et que cela évitait également l'aspect "vide" à gauche quand il y a plus de 3 articles et que les accordéons sont repliés.
De même, la maquette ne précisait pas si l'on pouvait ouvrir plusieurs accordéons en même temps ou si un seul pouvait être ouvert par groupe. J'ai opté pour la solution la plus flexible mais c'est une question que j'aurais posé.
Bien entendu, en contexte professionnel, j'en aurais sans doute discuté avec l'équipe et j'aurais en premier lieux intégré la maquette telle quelle.

# Accessibilité

Je ne peux pas garantir que tout est accessible car je n'ai pas eu le temps d'auditer mon travail mais voici les points qui ont été spécifiquement travaillés :
* sémantique générale (choix des balises, imbrication & passage du code source généré au validateur HTML),
* implémentation ARIA du motif de conception Disclosure (les accordéons),
* gestion de l'agrandissement des tailles de caractères + zoom graphique en même temps que l'aspect sur mobile grâce aux points de rupture en `rem`.
* lien d'accès rapide en début de page pour accéder directement au contenu,
* gestion des changements de page au sein d'une SPA (mise à jour du titre de page + déplacement du focus),
* visibilité du focus (grâce à focus-visible, le focus n'est pas visible lorsque l'on clique sur les éléments, seulement à la tabulation),
* les images sont toutes décoratives (alt vide pour ne pas surcharger la lecture avec un lecteur d'écran),
* hiérarchie de titres cohérente,
* textes masqués en alternative à certains composants délicats (suivi de livraison).
