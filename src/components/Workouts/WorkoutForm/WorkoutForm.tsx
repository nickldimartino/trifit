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
  const isWorkoutPage: boolean =
    location.pathname === "/workouts" ? true : false;

  // render the Workout Form
  return (
    <div className="bg-caramel m-1 w-5/6 rounded-lg shadow-sm">
      <div className="flex justify-around font-semibold text-md">
        <div>{name}</div>
      </div>
      <div className="rounded-b-lg grid grid-cols-3 bg-eggplant">
        <Link
          className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
          to={{ pathname: `/workouts/${id}` }}
        >
          Details
        </Link>
        {!isWorkoutPage ? (
          <button
            className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
            onClick={() => addExerciseToWorkout(id, exerciseId)}
          >
            Add
          </button>
        ) : (
          <></>
        )}
        {isWorkoutPage ? (
          <>
            <Link
              className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
              to={{ pathname: `/workouts/edit/${id}/${name}/` }}
            >
              Edit
            </Link>
            <button
              className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
              onClick={() => deleteWorkout(id)}
            >
              Delete
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
