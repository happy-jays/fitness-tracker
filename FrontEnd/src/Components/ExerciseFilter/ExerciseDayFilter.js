import './ExerciseFilter.css'
import React from 'react'
function ExerciseDayFilter(props){
    const filterChangeHandler =(event) =>{
        console.log(event.target.value)
        props.onExerciseDayFilter(event.target.value)
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by </label>
        <select onChange={filterChangeHandler} >
          <option value='Sunday'>Sunday</option>
          <option value='Monday'>Monday</option>
          <option value='Tuesday'>Tuesday</option>
          <option value='Wednesday'>Wednesday</option>
          <option value='Thursday'>Thursday</option>
          <option value='Friday'>Friday</option>
          <option value='Saturday'>Saturday</option>
        </select>
      </div>
    </div>
  );
}
export default ExerciseDayFilter