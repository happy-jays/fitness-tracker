import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AddExerciseForm from './AddExerciseForm';
import ExerciseModal from './ExerciseModal';
import DaySelectContainer from './DaySelectContainer';
import Banner from './Banner';

function Fitness(props){

    const daysOfWeekList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const initialFormState = { key: '', name: '', calories: '', duration: '',distance:'', category: '', day: '',date: Date.now() };
    const [appLoaded, setAppLoaded] = useState(false);
    const [targetedExercise, setTargetedExercise] = useState(initialFormState);
    const [isEditing, setIsEditing] = useState(false)
    const [dayOfWeek, setDayOfWeek] = useState('Sunday');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    useEffect(() => {
      window.onload = setAppLoaded(true);
    }, [appLoaded]);
  
    function addExercise(exercise) {
        const newexercise=exercise
      props.onAddExercise(newexercise)
    }
  
    
  
    
  
    
  return (
    <div className={appLoaded ? "app" : "app fade-out"}>
    <Banner />
    <button id='my-exer' ><Link to='/view-exercises'>View My  Planned  Exercises</Link></button>
    <button id='back-home1' ><Link to='/MyExercises'>View My  Done Exercises</Link></button>
    <button id='back-home1'><Link to='/home'>Back To Home Page</Link></button>
    <div className="columns section has-background-white-ter">
        
      <AddExerciseForm 
        addExercise={addExercise}
        isEditing={isEditing}
        daysOfWeekList={daysOfWeekList}
      />

    </div>
    </div>
  )
 
}
export default Fitness

