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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseName={course}/>
      <h3>Course Content:</h3>
      <Content 
        partName1={part1.name} numberOfExercises1={part1.exercises}
        partName2={part2.name} numberOfExercises2={part2.exercises}
        partName3={part3.name} numberOfExercises3={part3.exercises}
        />
      <Total exercisesTotal={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
  
}

export default App
