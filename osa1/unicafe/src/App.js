import React, { useState } from 'react'

const Statistics = (props) => {
  if (props.sum === 0 && props.title===true) {
    return (
      <table>
      <tbody>
      <tr>
        <td>No feedback given</td>
      </tr>
      </tbody>
      </table>
    )
  }
 else if (props.sum!==0){
  return (
    <table>
    <tbody>
    <tr>
      <td>{props.nimi} {props.sisältö}</td>
    </tr>
    </tbody>
    </table>
  )
 }
}

const Button = ({Click, text }) => (  
  <button onClick={Click}>    
    {text}  
  </button>
)

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const GClick = () => {
    setGood(good + 1)
  }

  const NClick = () => {
    setNeutral(neutral + 1)
  }

  const BClick = () => {
    setBad(bad + 1)
  }

  return (
    <div> 
        <h1>Give feedback</h1>
        <Button Click={GClick} text='Good' />
        <Button Click={NClick} text='Neutral' />
        <Button Click={BClick} text='Bad' />
        <h1>Statistics</h1>
        <Statistics title={true} sum={good+bad+neutral}/>
        <Statistics nimi="Good" sum={good+bad+neutral} sisältö={good}/>
        <Statistics nimi="Neutral" sum={good+bad+neutral} sisältö={neutral}/>
        <Statistics nimi="Bad" sum={good+bad+neutral} sisältö={bad}/>
        <Statistics nimi="average" sum={good+bad+neutral} sisältö={(good-bad)/(good+bad+neutral)}/>
        <Statistics nimi="All" sum={good+bad+neutral} sisältö={good+neutral+bad}/>
        <Statistics nimi="Positive" sum={good+bad+neutral} sisältö={(good)/(bad+good+neutral)*100 +" %"}/>
    </div>
  )
}

export default App