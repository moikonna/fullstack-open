import ShowCountry from "./ShowCountrt"
import {useState } from 'react'
const Country = ({countries, newFilter})=>{
    const entries = countries.filter(country =>
      country.name.common.toUpperCase().includes(newFilter.toUpperCase())
    );
    const gungi = []
    let ginga = gungi.concat(entries);
    const [newShow, setShow] = useState()
   
    const Show=(props)=>{
      setShow(props)
    };
  
      
      if(ginga.length<=1){
      
    return(
      
        <div>
        {countries.filter(country => country.name.common.toUpperCase().includes(newFilter.toUpperCase())).map(result =>           
        <ShowCountry
            Data={result}
          />)}
      </div>
    )
      }
      else if(newShow!==undefined){
        return(
          <ShowCountry
          Data={newShow}
        />
        )
        
      }
      else if(ginga.length<=10){
        
        return(
        <div>
        {countries.filter(country => country.name.common.toUpperCase().includes(newFilter.toUpperCase())).map(result =>    
        <p>{result.name.common} <button onClick={() => Show(result)}>show</button></p>)}
      </div>
        )
      }
      else{
        return(
        <div>
          <p>liikaa maita hae tarkemmin</p>
      </div>
        )
      }
      
  
  }
  export default Country