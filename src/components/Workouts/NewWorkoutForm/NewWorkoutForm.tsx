/*----------------------------------- Module Imports -----------------------------------*/
import { useState } from "react";

/*------------------------------------- Functions --------------------------------------*/
export default function NewWorkoutForm({
  addNewWorkout,
}: {
  addNewWorkout: Function;
}) {
  // new workout state
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    exercises: [],
  });

  // handles the add workout for submission
  function handleAddWorkout(evt: React.ChangeEvent<any>) {
    // prevents the page from rerendering
    evt.preventDefault();

    // add the new workout
    addNewWorkout(newWorkout);

    // rerset the new workout state
    setNewWorkout({
      name: "",
      exercises: [],
    });
  }

  // handles the keystrokes for the user input
  function handleOnChange(evt: React.ChangeEvent<any>) {
    // save each user keystroke in the state values
    const newWorkoutData = {
      ...newWorkout,
      [evt.target.name]: evt.target.value,
    };

    // set the state value to the new keystroke
    setNewWorkout(newWorkoutData);
  }

  // renders the New Workout Form
  return (
    <>
      <h1>New Workout Form</h1>
      <form onSubmit={handleAddWorkout}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={handleOnChange}
            value={newWorkout.name}
            placeholder="Workout Name"
            required
          />
        </label>
        <button type="submit">Add Food</button>
      </form>
    </>
  );
}
