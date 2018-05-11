## Pré-requis

- NodeJS: (>=8.9.0) - https://nodejs.org/
- Wamp : http://www.wampserver.com/en/download-wampserver-64bits/
- Cordova (permettra de build sur ios/android): npm install -g cordova --save
- Ionic (permettra de build sur ios/android): npm install -g ionic --save

## Infos pour les devs

L'ensemble des routes permettant les requêtes vers l'API sont dans les services dans le dossier "providers".
Par exemple la route permettant de récupérer "tous les patients" se trouve dans "patient.service.ts" dans la fonction "getPatients()". 

! A SAVOIR ! LES DIFFERENTES REQUETES HTTP VERS l'API

Faire atenttion a vérifier si la route est en GET, PUT ou POST
- ex requete get : return this.api.get('/patients/account/patients/');
- ex requete post : return this.api.post(...);
- ex requete put: return this.api.put(...);
