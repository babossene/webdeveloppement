const { v4: uuidv4 } = require('uuid');
const agent = [
    {
      id: uuidv4(),
      nom: "SENE",
      prenom: "Badara",
      age: 25,
      email: "sene@badara.com",
      service: "Informatique",
    },
  
    {
      id: uuidv4(),
      nom: "NESE",
      prenom: "dara",
      age: 25,
      email: "sene@dara.com",
      service: "Informatique",
    },
  
    {
      id: uuidv4(),
      nom: "SENE",
      prenom: "Bada",
      age: 25,
      email: "sene@bada.com",
      service: "Info",
    }
  ]
  module.exports ={ agent };