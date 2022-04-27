import DaySelectContainer from "./DaySelectContainer";
import React from "react";
import ExerciseModal from "./ExerciseModal";
import { useState } from "react"
function Display(props){
    const exercises=props.exercises
    const daysOfWeekList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const initialFormState = { key: '', name: '', calories: '', duration: '',distance:'', category: '', day: '',date: Date.now() };
    const [appLoaded, setAppLoaded] = useState(false);
    const [targetedExercise, setTargetedExercise] = useState(initialFormState);
    const [isEditing, setIsEditing] = useState(false)
    const [dayOfWeek, setDayOfWeek] = useState('Sunday');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    function removeExercise(){
        props.onRemove(targetedExercise)
    }
    function saveExercise(){
      props.onSave(targetedExercise)
    }
    function isDoneHandler(){
      props.onDone(targetedExercise)
      closeModal()
    }
    function openModal(exercise) {
        setModalIsOpen(true);
        setTargetedExercise(exercise);
        console.log(exercise)
      }
    
      function closeModal() {
        setModalIsOpen(false);
        setTargetedExercise(initialFormState);
        setIsEditing(false);
      }
    return(
        <div>
        <div className="column"></div>

<section className="column is-three-fifths box">
  <DaySelectContainer
    dayOfWeek={dayOfWeek}
    setDayOfWeek={setDayOfWeek}
    daysOfWeekList={daysOfWeekList}
  />
  
  <div className="tags are-large">
    {exercises.map( (exercise, index) => (
      (dayOfWeek === exercise.day) ? (
        <a
          className="tag is-link"
          key={exercise.key}
          onClick={() => openModal(exercise)}
        >
          {exercise.name}
        </a>
      ) : (
        <></>
      )
    ))}

    <ExerciseModal
      setTargetedExercise={setTargetedExercise}
      targetedExercise={targetedExercise}
      removeExercise={removeExercise}
      saveExercise={saveExercise}
      setIsEditing={setIsEditing}
      isEditing={isEditing}
      isDone={isDoneHandler}
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
    />
  </div>
</section>

</div>
    )

}
export default Display