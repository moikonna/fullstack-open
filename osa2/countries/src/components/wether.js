import axios from 'axios'
import {useEffect,useState } from 'react'
const Wether = ({Data}) => {
    const cap= Data.capital[0]
    const [newSaa, setSaa] = useState()
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(() => {    
        axios
          .get('https://api.openweathermap.org/data/2.5/weather?q='+cap+'&lang=fi&appid='+api_key)
          .then(response => {     
           setSaa(response.data)   
          })
      }, [])
    if(newSaa !== undefined){
    return (
      <div>
        <p>temperature {Math.round((newSaa.main.temp -273.15) * 100) / 100} C</p>
        <img src={"http://openweathermap.org/img/wn/" + newSaa.weather[0].icon + "@2x.png"} alt={newSaa.weather[0].description}  />
        <p>{newSaa.wind.speed} m/s</p>
      </div>
    );
    }
    else{
        <div><p>Loading please wait...</p></div>
    }
  };
  export default Wether