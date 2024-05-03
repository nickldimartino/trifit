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
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-4xl mt-7 mb-5 ">Edit the Workout</h1>
      <div className="flex justify-center items-center w-1/2 mb-5">
        <div className="flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full bg-caramel shadow-lg rounded-lg border-2 border-black">
          <form onSubmit={handleEditWorkout}>
            <label className="text-left block text-base mt-2 text-black font-semibold">
              Name
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                name="name"
                type="text"
                onChange={handleOnChange}
                value={newWorkout.name}
                placeholder={name}
                required
                autoComplete="off"
              />
            </label>
            <div className="mt-5">
              <button className="mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-orange-400 font-semibold">
                <i className="fa-solid fa-right-to-bracket"></i>Confirm Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
