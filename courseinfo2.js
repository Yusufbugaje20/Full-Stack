

import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
  
}

const Content = (props) => {
  return(
    <div>
      <p> Part 1 = {props.parts.name1} {props.parts.exercise1} </p>
      <p> Part 2 = {props.parts.name2} {props.parts.exercise2} </p>
      <p> Part 3 = {props.parts.name3} {props.parts.exercise3} </p>
    </div>
  )

}

const Total = (props) => {
  return (
    <div>
      <p>{props.total}</p>
    </div>
  )
}


const App = () => {
  const Course = {
    name : 'Computer Engineering',
    parts : [
  {
    name1 : 'Python Programming',
    exercise1 : 10
  }, 
  
  {
    name2 : 'Computer Electronics',
    exercise2 : 15
  },
  {
    name3 : 'Computer Architecture',
    exercise3 : 20
  }
 ] 
}

  

  const total = Course.exercise1 + Course.exercise2 + Course.exercise3

  return(
    <div>
      <Header course = {Course} />
      <Content parts = {Course} />
      <Total total = {total}/> 
    </div>
  )

}

export default App