import React from "react";
import './ExerciseFilter.css'

function ExerciseFilter(props){
    const filterChangeHandler =(event) =>{
        console.log(event.target.value)
        props.onExerciseFilter(event.target.value)
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by </label>
        <select onChange={filterChangeHandler} >
          <option value='calories'>Calories</option>
          <option value='distance'>Distance</option>
          <option value='duration'>Duration</option>
          <option value='category'>Category</option>
        </select>
      </div>
    </div>
  );
}
export default ExerciseFilter