const Header = (props) => {
  return (
    <div>
      <h2>Course</h2>
      <p>{props.courseName}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part} : {props.numberOfExercises} exercises</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <h4>Total number of exercises : {props.exercisesTotal}</h4>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course}/>
      <h3>Course Content:</h3>
      <Content part={part1} numberOfExercises={exercises1}/>
      <Content part={part2} numberOfExercises={exercises2}/>
      <Content part={part3} numberOfExercises={exercises3}/>
      <Total exercisesTotal={exercises1+exercises2+exercises3}/>
    </div>
  )
  
}

export default App
