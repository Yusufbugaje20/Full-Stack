import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
  
}

const Content = (props) => {
  return(
    <div>
      <p> Part 1 = {props.part1} {props.exercise1} </p>
      <p> Part 2 = {props.part2} {props.exercise2} </p>
      <p> Part 3 = {props.part3} {props.exercise3} </p>
    </div>
  )

}

const Total = (props) => {
  return(
    <div>
      <p>
        {props.total}
      </p>
    </div>
  )

}

const App = () => {
  const Course = 'Computer Engineering'
  const part1 = 'Python Programming'
  const exercise1 = 10
  const part2 = 'Computer Electronics'
  const exercise2 = 15
  const part3 = 'Computer Architecture'
  const exercise3 = 20
  const total = exercise1 + exercise2 + exercise3

  return(
    <div>
      <Header course = {Course} />
      <Content part1 = {part1} exercise1 = {exercise1} part2 = {part2} exercise2 = {exercise2} part3 = {part3} exercise3 = {exercise3} />
      <Total total = {total} /> 
    </div>
  )

}

export default App 


