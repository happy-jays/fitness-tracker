import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import ExerciseItem from "./Components/ExerciseFilter/ExerciseItem";
import Exercises from "./Components/ExerciseFilter/Exercises";
import Fitness from "./Components/Fitness";
import Display from "./Components/Display";
import DaySelectContainer from "./Components/DaySelectContainer";
import Bmi from "./Components/BMI/Bmi";
import Blog from "./Blog";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Yoga from "./Yoga";
import Trail from "./Trial";
import WriteBlog from "./Writeblog";
import Header from "./Header";
import Logout from "./logout";
import "./App.css";
import AppContext from './AppContext';
export default function App(props) {
  const [isAuthenticated, setAuth] = useState(false);
  const initialFormState = [
    {
      key: "",
      name: "",
      calories: "",
      duration: "",
      distance: "",
      category: "",
      day: "",
      date: "",
    },
  ];
  const userSettings = {
    isAuthenticated: isAuthenticated,
    setAuth
  };
  const [exercises, setExercises] = useState(initialFormState);
  const [doneExercises, setDoneExercises] = useState(initialFormState);
  const [appLoaded, setAppLoaded] = useState(false);

  function AddExerciseHandler(newexercise) {
    setExercises((preExercises) => {
      return [newexercise, ...preExercises];
      console.log(exercises);
    });

    function RemoveExerciseHandler(ToBeDeletedExercise) {
      setExercises((previousExercises) => {
        previousExercises.filter(
          (exercise) => exercise.key !== ToBeDeletedExercise.key
        );
      });
    }
  }

  function saveExerciseHandler(targetedExercise) {}

  function onRemoveHandler(targetExercise) {
    setExercises(
      exercises.filter((exercise) => exercise.key !== targetExercise.key)
    );
  }

  function onDoneHandler(targetExercise) {
    setDoneExercises((preExercises) => {
      return [targetExercise, ...preExercises];
    });
    setExercises(
      exercises.filter((exercise) => exercise.key !== targetExercise.key)
    );

    console.log(
      exercises.filter((exercise) => exercise.key === targetExercise.key)
    );
  }
  return (
    
    <div>
      <Route path="/Planner">
        <Fitness onAddExercise={AddExerciseHandler} />
      </Route>{" "}
      <Route path="/view-exercises">
        {" "}
        {exercises.length > 1 ? (
          <Display
            exercises={exercises}
            onDone={onDoneHandler}
            onRemove={onRemoveHandler}
            onSave={saveExerciseHandler}
          />
        ) : (
          <div className="message-error">
            <p>
              {" "}
              No Exercises Added for the week yet.Go Back and Add Exercises{" "}
            </p>{" "}
            <Link to="/Planner"> Plan Exercises </Link>{" "}
          </div>
        )}{" "}
      </Route>{" "}
      <Route path="/MyExercises">
        <Exercises exercises={doneExercises}> </Exercises>
      </Route>{" "}
      <Route path="/Bmi">
        <Bmi> </Bmi>{" "}
      </Route>{" "}
      <Route path="/home">
        <Home> </Home>{" "}
      </Route>{" "}
      <Route path="/writeblog">
        <WriteBlog> </WriteBlog>{" "}
      </Route>{" "}
      <Route path="/yoga">
        <Yoga> </Yoga>{" "}
      </Route>{" "}
      <Route path="/trial">
        <Trail> </Trail>{" "}
      </Route>{" "}
      <Route path="/blogs">
        <Blog> </Blog>{" "}
      </Route>{" "}
      <Route path="/login">
        <Login> </Login>{" "}
      </Route>{" "}
      <Route path="/signup">
        <Signup> </Signup>{" "}
      </Route>
      <Route path="/logout">
       <Logout></Logout>{" "}
      </Route>
    </div>
  
  );
}
