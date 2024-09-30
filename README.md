# Projet Product Trial Master

Ce projet est un test KATA pour une application web de e-commerce développée avec Angular pour le front-end et Symfony pour le back-end. Il permet de gérer les produits, d'effectuer des opérations CRUD via une API construite avec **API Platform** et d'envoyer des messages de contact.

## Cloner le Projet

Pour cloner ce projet, exécutez les commandes suivantes dans votre terminal :

```bash
git clone https://github.com/imadamzil/product-trial-master.git
cd product-trial-master

```
## Structure Projet

product-trial-master/
├── front/  # Contient l'application Angular
├── back/   # Contient l'application Symfony

## Installation et Configuration

### Front-end (Angular)

1. **Accéder au dossier `front`** :

   ```bash
   cd front
   ```
2. **Installer des dépendances** :

   ```bash
    npm install
   ```

3. **Démarer l'application** :

   ```bash
    ng serve
   ```
L'application sera alors disponible sur http://localhost:4200.
 
### Back-end (Symfony)

1. **Accéder au dossier `back`** :
 ```bash
   cd back
   ```

2. **Créer les conteneurs de l'application : Utilisez Docker pour créer les conteneurs nécessaires (Apache, PHP, PHPMyAdmin).** :
 ```bash
docker compose up -d

   ```

3. **Accéder au conteneur www_docker_symfony : Exécutez la commande suivante pour accéder au conteneur**
 ```bash
docker exec -it www_docker_symfony bash

   ```

4. **Installer les dépendances de l'application back**
 ```bash
 cd products_back
composer install

   ```
5. **executez ces commandes**
 ```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate --no-interaction
php bin/console doctrine:fixtures:load --no-interaction
 
   ```
   L'API sera alors disponible sur http://localhost:8787/api  (vous trouverez l'API documenté avec possibilité de tester)

## Remarque

En raison de contraintes de temps, ce test n'a pas pu être terminé dans son intégralité. Certaines fonctionnalités peuvent ne pas être pleinement implémentées ou testées. Votre compréhension est appréciée.
