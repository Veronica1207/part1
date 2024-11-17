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
      <Part part={props.partName1} numberOfExercises={props.numberOfExercises1}/>
      <Part part={props.partName2} numberOfExercises={props.numberOfExercises2}/>
      <Part part={props.partName3} numberOfExercises={props.numberOfExercises3}/>
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
      <Content 
        partName1={parts[0].name} numberOfExercises1={parts[0].exercises}
        partName2={parts[1].name} numberOfExercises2={parts[1].exercises}
        partName3={parts[2].name} numberOfExercises3={parts[2].exercises}
        />
      <Total exercisesTotal={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
  
}

export default App
