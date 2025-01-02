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
  res.send("GET mise en oeuvre");
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`GET en cours ${id}`);
});

app.post("/", (req, res) => {
  const id = req.params.id;
  res.send(`POST en cours ${id}`);
});

app.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json(`PUT en cours ${id}`);
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json(`DELETE en cours ${id}`);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
