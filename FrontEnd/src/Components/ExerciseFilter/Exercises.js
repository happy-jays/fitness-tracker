import React, {useState} from 'react'
import './Exercises.css'
import Card from './Card';
import ExerciseFilter from './ExerciseFilter';
import ExerciseItem from './ExerciseItem';
import ExerciseDayFilter from './ExerciseDayFilter';
import ExerciseChart from '../Chart/ExerciseChart';
import { Link } from 'react-router-dom';

function Exercises(props){
   
    const exercises=props.exercises
    const [filter,SetFilter] =useState('calories')
    const [filt1,SetFilt1]= useState('Sunday')
    function ExerciseFilterHandler(filtCrit){
        SetFilter(filtCrit)
    }
    function ExerciseDayFilterHandler(filtCrit){
        console.log(filtCrit)
        SetFilt1(filtCrit)
    }
   
   const FilteredExercises=props.exercises.filter(exercise =>{ return exercise.day === filt1 })
   console.log(FilteredExercises)
   let  message=''
   let totalCaloriesBurned=0;
   let totalDistance=0;
   let totalDuration=0;
   FilteredExercises.forEach(exercise => {
       
       totalCaloriesBurned+= parseFloat(exercise.calories)
       console.log(totalCaloriesBurned)
   });
   FilteredExercises.forEach(exercise => {
       
    totalDistance+= parseFloat(exercise.distance)
    console.log(totalDistance)
});
FilteredExercises.forEach(exercise => {
       
    totalDuration+= parseFloat(exercise.duration)
    console.log(totalDuration)
});
const messages={
    calories:'The Total Calories burnt for the day are : ' + totalCaloriesBurned +'Kcal',
    distance:'The Total distance run  for the day is : ' + totalDistance + 'Km',
    duration:'The Total workout duration  for the day is : '+  totalDuration + ' mins'
}
const keys=Object.keys(messages)
for  ( let i=0;i<keys.length;i++){
    if(keys[i] == filter)
    {
        message=messages[keys[i]]
    }
    
}
console.log(message)

   
return(
    <div>
        
    <Card  className='exercises'>
        <Link to='/Planner'>Back to the Planner</Link>
          <ExerciseFilter onExerciseFilter={ExerciseFilterHandler} ></ExerciseFilter>
          <ExerciseChart doneExercises={props.exercises} filter={filter}></ExerciseChart>
          <ExerciseDayFilter onExerciseDayFilter={ExerciseDayFilterHandler}></ExerciseDayFilter>
          <h2>{message}</h2>
    {FilteredExercises.map((exercise)=>(<ExerciseItem 
           filtkey={filter}
           name={exercise.name}
            key={exercise.key}
            category={exercise.category}
            calories={exercise.calories}
            distance={exercise.distance}  
            date={exercise.date}
            />))}
            
      </Card>
      </div>
)

}
export default Exercises;
