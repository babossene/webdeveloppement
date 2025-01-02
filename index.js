const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Badara SENE!');
    });



// lancer l'application avec un port
console.log("Demarrage lancer sur le port 3001")
app.listen(process.env.PORT || 3001)