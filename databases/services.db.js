const { v4: uuidv4 } = require('uuid');
const services = [
    {
      id: uuidv4(),
      department: "dst",
      service: "dch",
    },
  
    {
      id: uuidv4(),
      department: "information technology",
      service: "Informatique",
    },
  
    {
      id: uuidv4(),
      department: "information technology",
      service: "comunication",
    }
  ]
  
  module.exports = { services };