import { useState, useEffect } from 'react'
import FilterPerson from './components/filter.js'
import AddPerson from './components/AddPerson.js'
import Persons from './components/Persons.js'
import api from './components/rest.js'
import Notification from './components/virhe.js'
import Success from './components/ok.js'
import './index.css'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [okMessage, setOkMessage] = useState('')
  const Deleteperson = (id) => {
    
      if (window.confirm(`Poistetaanko?`)) {
        api
          .deleteP(id)
          .then(() => {
            setPersons(persons.filter(n => n.id !== id));
            setNewName("");
            setNewNumber("");
            setOkMessage('id poistettu')
          })
          .catch(error => {
            setErrorMessage(
              ` person was already removed from server`
            )
          });
        setTimeout(() => {
        
        }, 3000);
      }
    
  };
  useEffect(() => {
    api
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
        

  const addName = (event) => {

    event.preventDefault()
    const newname = {
      name: newName,
      number : newNumber
    }
    if(persons.some(e => e.name === newName)){
      let id = persons.filter(person => person.name === newName)[0].id;
      if (window.confirm("Already added wish to update?")) {
        api
        .update(id,newname)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          setOkMessage('Päivitetty onnistuneesti')
        })
      }

  }
  else{
   // setPersons(persons.concat(newname))
 
   api
   .create(newname)
   .then(response => {
     setPersons(persons.concat(response.data))
     setNewName('')
     setNewNumber('')
     setOkMessage('Lisätty onnistuneesti')
   })
 
  }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilter = (event)=>{
    setFilter(event.target.value)
  }
  return (
    <div>
      <Notification message={errorMessage} />
      <Success message={okMessage}/>
      <h2>Phonebook</h2>
      <FilterPerson newFilter={newFilter} handleFilter={handleFilter}/>
      <h2>add new</h2>
      <AddPerson
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Numbers</h2>     
       <Persons persons={persons} newFilter={newFilter} Deleteperson={Deleteperson}/>
    </div>
    
  )

}

export default App
