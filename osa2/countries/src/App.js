import axios from 'axios'
import {useEffect, useState } from 'react'
import Country from './components/country'

function App() {
  const [countries, setcountries] = useState([]) 
  const [newFilter, setFilter] = useState('')
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setcountries(response.data)
      })
  }, [])
  const handleFilter = (event)=>{
    setFilter(event.target.value)
  }
  return (

    <div>
       Find countries <input value ={newFilter} onChange={handleFilter}></input>
       <Country countries={countries} newFilter={newFilter}></Country>
    </div>
  );
}

export default App;
