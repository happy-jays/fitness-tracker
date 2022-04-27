import React from 'react';
import EditExerciseForm from './EditExerciseForm';

export default function ExerciseModal(props) {
  return(
    <div className={props.modalIsOpen ? "modal is-active" : "modal"}>
      <div
        className="modal-background"
        onClick={props.closeModal}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.targetedExercise.name}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.closeModal}
          ></button>
        </header>

        {props.isEditing ? (
          <EditExerciseForm
            setTargetedExercise={props.setTargetedExercise}
            targetedExercise={props.targetedExercise}
            removeExercise={props.removeExercise}
            saveExercise={props.saveExercise}
            setIsEditing={props.setIsEditing}
            exercise={props.exercise}
          />
        ) : (
          <>
            <section className="modal-card-body section">
              <p className="content has-text-weight-medium">Name: <span className="box">{props.targetedExercise.name}</span></p>
              <p className="content has-text-weight-medium">Calories Burned: <span className="box">{props.targetedExercise.calories}</span></p>
              <p className="content has-text-weight-medium">Duration: <span className="box">{props.targetedExercise.duration}</span></p>
              <p className="content has-text-weight-medium">Distance: <span className="box">{props.targetedExercise.distance}</span></p>
              <p className="content has-text-weight-medium">Category: <span className="box">{props.targetedExercise.category}</span></p>
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-white"
                onClick={() => props.setIsEditing(true)}
              >Edit
              </button>

              <button
                className="button is-danger"
                onClick={props.removeExercise}
              >Remove
              </button>
              <button
                className="button is-danger"
                onClick={props.isDone}
              >Done
              </button>
            </footer>
          </>
        )}
    
      </div>
    </div>
  );
}
