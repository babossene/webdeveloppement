//acceder au framework ExpressJS
const express = require("express");
//acceder a la librairi bodyParser vos requetes/reponse
const bodyParser = require("body-parser");
//inicialiser l'application en mode ExpressJS
const { v4: uuidv4 } = require("uuid");
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

// FAKE DATABASE : simuler une base de donnees


const agent = require('./databases/agent.db.js');
const services = require('./databases/services.db.js');
const app = express();

app.get("/agent", (req, res) => {
  res.json(agent);
});

app.get("/agent/:id", (req, res) => {
  const id = req.params.id;
  const currentagent = agent.find(agent => agent.id === id);
  res.json(currentagent);
});



app.post("/agent", (req, res) => {
  const id = req.params.id;
  res.send(`POST en cours de mise en oeuvre ${id}`);
});

app.put("agent/:id", (req, res) => {
  const id = req.params.id;
  res.json(`PUT en cours de mise en oeuvres ${id}`);
});

app.delete("agent/:id", (req, res) => {
  const id = req.params.id;
  res.json(`DELETE en cours de mise en oeuvre ${id}`);
});

// home page
app.get("/services", (req, res) => {
  res.json(services);
});

app.get("/services/:id", (req, res) => {
  const id = req.params.id;
  const currentServices = serices.find(services => services.id === id);
  res.json(currentServices);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
