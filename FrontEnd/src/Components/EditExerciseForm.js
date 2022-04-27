import React from 'react';

export default function EditExerciseForm(props) {

  function handleChange(e) {
    props.setTargetedExercise({ ...props.targetedExercise, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.saveExercise(props.exercise.key);
  }

  return(
    <form
      onSubmit={handleSubmit}
    >

      <section className="modal-card-body">
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
              value={props.targetedExercise.name}
              onChange={handleChange}
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
              value={props.targetedExercise.calories}
              onChange={handleChange}
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
              value={props.targetedExercise.duration}
              onChange={handleChange}
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
              value={props.targetedExercise.distance}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="select">
          <select
            name="category"
            value={props.targetedExercise.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected hidden>Select a category</option>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength</option>
            <option value="Balance">Balance</option>
            <option value="Stretching">Stretching</option>
            
          </select>
        </div>
        

        <div className="select">
          <select
            name="day"
            value={props.targetedExercise.day}
            onChange={handleChange}
            required
          >
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </div>
      </section>

      <footer className="modal-card-foot">
        <button
          className="button is-white"
          type="button"
          onClick={() => props.setIsEditing(false)}
        >Cancel
        </button>

        <button
          className="button is-success"
          type="submit"
          onClick={props.saveExercise}
        >Save
        </button>
      </footer>
    </form>
  );
}
