/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { Link, useLocation } from "react-router-dom";

// Types
import { WorkoutType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function WorkoutForm({
  id,
  name,
  exercises,
  addExerciseToWorkout,
  deleteWorkout,
  exerciseId,
}: {
  id: Types.ObjectId;
  name: string;
  exercises: WorkoutType[];
  addExerciseToWorkout: Function;
  deleteWorkout: Function;
  exerciseId: Types.ObjectId;
}) {
  // get the current URL path and set a flag to rendering elements
  const location = useLocation();
  const isWorkoutPage = location.pathname === "/workouts" ? true : false;

  // render the Workout Form
  return (
    <div>
      <p>{name}</p>
      <Link to={{ pathname: `/workouts/${id}` }}>Workout Details</Link>
      {!isWorkoutPage ? (
        <button onClick={() => addExerciseToWorkout(id, exerciseId)}>
          Add
        </button>
      ) : (
        <></>
      )}
      &nbsp; &nbsp;
      {isWorkoutPage ? (
        <>
          <Link to={{ pathname: `/workouts/edit/${id}/${name}/` }}>Edit</Link>
          <button onClick={() => deleteWorkout(id)}>Delete</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
