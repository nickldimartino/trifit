/*----------------------------------- Module Imports -----------------------------------*/
// External
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
    <div className="flex justify-center items-center w-1/2">
      <div className="flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full bg-caramel shadow-lg rounded-lg border-2 border-black">
        <h1 className="text-2xl block text-center text-black font-semibold">
          <i className="fa-solid fa-user"></i> Add a Workout
        </h1>
        <hr className="mt-1" />
        <form onSubmit={handleAddWorkout}>
        <label className="text-left block text-base mt-2 text-black font-semibold">
            Name
            <input
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="name"
              type="text"
              onChange={handleOnChange}
              value={newWorkout.name}
              placeholder="Workout Name"
              required
              autoComplete="off"
            />
          </label>
          <div className="mt-5">
            <button className="mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-frenchblue font-semibold">
              <i className="fa-solid fa-right-to-bracket"></i>Add Workout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
