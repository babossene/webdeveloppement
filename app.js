//acceder au framework ExpressJS
const express = require("express");
//acceder a la librairi bodyParser vos requetes/reponse
const bodyParser = require("body-parser");
//inicialiser l'application en mode ExpressJS
const app = express();
//les verbes 
// GET : Recuperr une resssource ou une parities de ressource
// POST : Creer une ressource
// PUT : Mettre a jour une ressource
// DELETE : Supprimer une ressource
// PATCH : Mettre a jour partiellement une ressource
// OPTIONS : Recuperer les methodes HTTP supportees par une ressource
// HEAD : Recuperer les entetes d'une ressource
// TRACE : Retourner les entetes d'une ressource
// CONNECT : Convertir la requete en tunnel TCP/IP

app.get("/", (req, res) => {
  res.send("BADARA SENE!");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
