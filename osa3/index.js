
const express = require('express')
const app = express()
let persons={

  "persons":[
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ]
}
app.get('/api/persons', (req, res) => {
  res.json(persons)
})
app.get('/persons/:id', (req, res) => {
  if(req.params.id <= persons.persons.length){
   res.json(persons.persons[req.params.id])
  }
  else{res.sendStatus(404);}

})
app.get('/info', (req, res) => {
  const date = new Date();
    res.send(
      `<p>Puhelinluettelossa ${persons.persons.length} henkilön tiedot</p>` + date
    );
 
})

app.delete('/api/:id', (req, res) => {
 persons.persons.splice(req.params.id,1)
  res.send("DELETE Request Called")
})
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)