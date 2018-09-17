# Semantic-Experts-Test
Test Technique pour Semantic Experts
 
 ## Installation

```bash
# Lancer la partie Front
cd Front-End
npm install
npm run start
```
## Sénario de Test 

- Dans le formulaire d'authentification pour la champ username s'il est vide un message d'erreur s'affiche  pour le tester il suffit d'écrire quelque chose et effacer pour que le message s'affiche.
- Pour le champs password pareil mais pour des raisons de test un mot de passe doit contenir au minimun 6 caractére et au maximum 12
- Le boutton de connexion est désactiver si les deux conditions si dessus ne sont pas rempli.
- Si vous entrez un mot de pas et un username incorrect un message alerte s'affiche.
- Une fois entrez les corrects identifiant un modal s'affiche qui contient les conditions et potiques obligatoires pour l'authentification.
- Pour pouvoir crocher le bouttons "Accepter" il faut scroller jusqu'a la fin sinon le boutton reste désactiver
- Si vous voulez validez sans cocher un message d'erreur s'affiche.
- Une fois lire tous les politiques , crocher le checkbox et valider vous serez mener à la page d'acceuil.
