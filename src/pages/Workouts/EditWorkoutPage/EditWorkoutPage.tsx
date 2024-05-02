/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Types
import { WorkoutType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function EditWorkoutPage({
  editWorkout,
}: {
  editWorkout: Function;
}) {
  // save the URL path id ane and name parameters
  const { id, name } = useParams();

  // save the path navigation
  const navigate = useNavigate();

  // new workout state
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    exercises: [],
  });

  // handles the form submission to edit a workout
  function handleEditWorkout(evt: React.ChangeEvent<any>) {
    // prevents the page from rerendering
    evt.preventDefault();

    // create an object of the workout to edit
    const edittedWorkoutData: WorkoutType = {
      id: new Types.ObjectId(id),
      name: newWorkout.name,
      exercises: newWorkout.exercises,
    };

    // edit the workout
    editWorkout(edittedWorkoutData);

    // navigate to the workouts page
    navigate("/workouts");
  }

  // handles the key strokes for the input elements
  function handleOnChange(evt: React.ChangeEvent<any>) {
    // saves each keystroke in the new workout state
    const newWorkoutData = {
      ...newWorkout,
      [evt.target.name]: evt.target.value,
    };

    // sets the state to the new keystrokes
    setNewWorkout(newWorkoutData);
  }

  // render the Edit Workout Page
  return (
    <>
      <h1>Edit Workout Page</h1>
      <form onSubmit={handleEditWorkout}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={handleOnChange}
            value={newWorkout.name}
            placeholder={name}
            autoComplete="off"
          />
        </label>
        <button type="submit">Confirm Edit</button>
      </form>
    </>
  );
}
