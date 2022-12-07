const FilterPerson = (props)=>{
    return(
        <div>
        hae <input value ={props.newFilter} onChange={props.handleFilter}></input>
      </div>
    )
}
export default FilterPerson