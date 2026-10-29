# Manicaretti Paris

https://www.facebook.com/manicaretti.paris/?locale=fr_FR
https://www.instagram.com/manicarettibio/

Manicaretti

4,6179 avis


10–20 €‧Restaurant sans gluten

Site Web

Itinéraire

+ 5




À emporter

Se faire livrer

Services disponibles : Convient aux végétariens · Chiens acceptés

Adresse :

60 Rue de Paradis, 75010 Paris, France

Téléphone : +33 9 51 77 57 30

Horaires :

mardi11:30–15:00mercredi11:30–15:00jeudi11:30–15:00vendredi11:30–15:00samediFermédimancheFermélundi11:30–15:00


avec ces informations et d'autres que tu peux trouver en ligne sur le restaurant italien sans gluten "MANICARETTI". Construit un site internet épuré présentant le restaurant, incorporant des liens vers la page facebook et instagram du restaurant. Un thème lié aux couleurs de l'Italie peut être présent. Incorore aussi le système de livraison et contact téléphonique. cette listte est non exhaustive rajoute ce qui semble un standart de site internet de restaurant parisien.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://manicaretti-taste-of-paris.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/edd02229-4599-4ff4-82e9-3f5ac045cc82).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages (en plus de Lovable)

Dans le dépôt GitHub, ouvrir **Settings → Pages → Build and deployment → Source**
et sélectionner **GitHub Actions**. Le workflow `deploy.yml` déploie ensuite
chaque push sur `main`; il peut aussi être lancé depuis l'onglet **Actions**.

Le sous-chemin `/<nom-du-repo>/` est calculé automatiquement dans le workflow.
La version GitHub Pages est statique : elle inclut la page d'accueil, les photos
originales, les styles, les scripts et une copie `404.html`. Les liens externes,
le téléphone et les ancres de section sont conservés. TanStack Router (et non
React Router) utilise le même sous-chemin que Vite.

Les builds Lovable restent sur `/`, avec leur configuration habituelle.
Le workflow exporte le contenu statique `dist/client` dans `dist` et ne publie
aucun fichier serveur. Les images sont téléchargées lors du build depuis leur
adresse actuelle sur le site publié, puis incluses dans GitHub Pages ; un
téléchargement manquant fait échouer le déploiement plutôt que publier une
image cassée. Les futures pages publiques devront être ajoutées à la liste
de pré-rendu de la configuration Vite. Les pages nécessitant un serveur ne
peuvent pas être hébergées par GitHub Pages.

Vérification de la configuration : `bun test scripts/github-pages-config.test.ts`.
Le workflow vérifie aussi les fichiers et liens locaux après le build.
