
const Persons = (props)=>{
    return(
        <div>
         {props.persons.filter(person => person.name.toUpperCase().includes(props.newFilter.toUpperCase())).map(part => 
         <p>{part.name} {part.number}<button onClick={() => props.Deleteperson(part.id)}>delete</button></p>)} 
      </div>
    )
}
export default Persons