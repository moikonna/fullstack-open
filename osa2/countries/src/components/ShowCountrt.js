import Wether from "./wether";
const ShowCountry = ({Data}) => {
    const lang = Object.values(Data.languages);
    
    return (
      <div>
        <h1>{Data.name.common}</h1>
        <p>capital {Data.capital}</p>
        <p>population {Data.population}</p>
        <h3>languages</h3>
        <ul>
        {lang.map(result =>  <li key={result}>{result}</li> )}
        </ul>
        <img src={Data.flags.png} alt="No flag found" height="250" width="350" />
        <Wether Data={Data}/>
      </div>
    );
  };
  export default ShowCountry