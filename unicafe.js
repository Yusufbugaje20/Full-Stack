
import React, { useState } from 'react'

const Display = (props) => <h1>{props.text}</h1>

const Statisic = ({text, value}) => {
  if (text === 'positive') {
    return (
      <tr><td>{text} {value}</td></tr>
    )
  }
  return (
    
    <tr><td>{text} {value}</td></tr>
  )
}

const Statisitics = ({clicks}) => {
  const total = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good * 1 + clicks.bad * -1) / total
  const positive = clicks.good * (100/total)

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statisic text ='good' value = {clicks.good} />
          <Statisic text ='neutral' value = {clicks.neutral} />
          <Statisic text ='bad' value = {clicks.bad} />
          <Statisic text ='all' value = {total} />
          <Statisic text ='average' value = {average} />
          <Statisic text ='positive' value = {positive} />

        </tbody>
      </table>
    </div>
  )
}

const Button =({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral:0, bad:0
  })

  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good +1})

  const handleNeutralClick = () =>
    setClicks({...clicks, neutral: clicks.neutral +1})

    const handleBadClick = () => 
      setClicks({...clicks, bad: clicks.bad +1})
     
  return (
    <div>
      <Display text = 'give feedback' />
      <Button onClick={handleGoodClick} text ='good' />
      <Button onClick={handleNeutralClick} text ='neutral' />
      <Button onClick={handleBadClick} text ='bad' />
      <Display text = 'statistics'/>
      <Statisitics clicks={clicks} />
    </div>
  )

}

export default App