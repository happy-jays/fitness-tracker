import React, { useState } from 'react';
export default function AddExerciseForm(props) {
  const exerdate= new Date() //Keeps Track the exercise Date
  const initialFormState = { key: Math.random(), name: '', calories: '', duration: '',distance:'', category: '', day: '' , date:exerdate  }
  const [exercise, setExercise] = useState(initialFormState);//The exerises planned for week

  function handleChange(e) {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  }
 //Handles the submission part of the form
  function handleSubmit(e) {
    e.preventDefault();
    alert(`${exercise.name} was sucessfully added.`);
    props.addExercise(exercise);
    
    
  } 

  return(
    <div className="column is-one-third">
      <form
        onSubmit={handleSubmit}
      >

        <div className="field">
          <label
            className="label"
            htmlFor="name"
          >Exercise Name:
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              value={exercise.name}
              onChange={handleChange}
              disabled={props.isEditing ? true : false}
              required
            />
          </div>
        </div>

       <div className="field">
          <label
            className="label"
            htmlFor="calories"
          >Calories Burned:
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="calories"
              value={exercise.calories}
              onChange={handleChange}
              disabled={props.isEditing ? true : false}
              required
            />
          </div>
        </div>

        <div className="field">
          <label
            className="label"
            htmlFor="duration"
          >Duration:
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="duration"
              value={exercise.duration}
              onChange={handleChange}
              disabled={props.isEditing ? true : false}
              required
            />
          </div>
        </div>
        <div className="field">
          <label
            className="label"
            htmlFor="distance"
          >Distance:
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="distance"
              value={exercise.distance}
              onChange={handleChange}
              disabled={props.isEditing ? true : false}
              required
            />
          </div>
        </div>
        <div className="select">
          <select
            name="category"
            value={exercise.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected hidden>Select a category</option>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength</option>
            <option value="Balance">Balance</option>
            <option value="CrossFit">CrossFit</option>
            <option value="FreeStyle">Free Training</option>
            <option value="Aerobic">Aerobic</option>
            
          </select>
        </div>
        
        <div className="select">
          <select
            name="day"
            value={exercise.day}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected hidden>Select a day</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </div>

        <button
          className="button is-success"
          type="submit"
          id='form-exer'
          disabled={props.isEditing ? true : false}
        >Add Exercise
        </button>
      </form>
    </div>
  );
}
