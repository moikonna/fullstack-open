import React from 'react'
const Header = (props) => {
    return (
      <h1>{props.course.name}</h1>
    )
  }
  const Content = (props) => {
    return (
      <div>
        {props.course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}  
    </div>
    )
  }
  const Part = (props) => {
    return (
      <div>
      <p>{props.name} {props.exercises}</p>
      </div>
    )
  }
  const Total = (props) => {
    const parts = props.course.parts.map(course => course.exercises)
    return (
      <div>
      
        <h3>yhteensä {parts.reduce((s, p) => s + p)} tehtävää</h3>
        </div>
    )
  }
  const Course = (props) => {
    return (
      <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course}/>
  </div>
    )
  }
  export default Course