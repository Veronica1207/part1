const Header = (props) => {
  return (
    <div>
      <h2>Course</h2>
      <p>{props.courseName}</p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} : {props.numberOfExercises} exercises</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} numberOfExercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} numberOfExercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} numberOfExercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <h4>Total number of exercises : {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</h4>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header courseName={course}/>
      <h3>Course Content:</h3>
      <Content parts ={parts} />
      <Total parts={parts}/>
    </div>
  )
  
}

export default App
