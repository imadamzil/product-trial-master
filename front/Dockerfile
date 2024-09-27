# product-trial-master/front/Dockerfile

# Utiliser l'image officielle Node.js comme image de base
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer Angular CLI et les dépendances du projet
RUN npm install -g @angular/cli@16
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port 4200
EXPOSE 4200

# Démarrer l'application Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
