import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {

  // Exercise 1.1
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  // Exercise 1.2
  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  // Exercise 1.3
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (

    // Exercise 1.1
    // <>
    //   <Header course={course} />
    //   <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    //   <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    // </>

    <>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} part2={course.parts[1].name} part3={course.parts[2].name} exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
      <Total exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
    </>
  )
}

export default App