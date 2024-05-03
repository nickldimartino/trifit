/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { Link, useLocation } from "react-router-dom";

// Types
import { UserDataType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function ExerciseForm({
  id,
  name,
  type,
  muscle,
  grip,
  width,
  addExerciseToWorkout,
  deleteExercise,
  user,
}: {
  id: Types.ObjectId;
  name: string;
  type: string;
  muscle: string;
  grip: string;
  width: string;
  addExerciseToWorkout: Function;
  deleteExercise: Function;
  user: UserDataType;
}) {
  // save the URL path
  const location = useLocation();
  const isExercisePage: boolean =
    location.pathname === "/exercises" ? true : false;

  // render the Exercise Form
  return (
    <div className="bg-caramel m-1 w-5/6 rounded-lg shadow-sm">
      <div className="grid grid-cols-5 font-semibold text-md">
        <div>{name}</div>
        <div>{type}</div>
        <div>{muscle}</div>
        <div>{grip}</div>
        <div>{width}</div>
      </div>
      <div className="rounded-b-lg grid grid-cols-3 bg-eggplant">
        {isExercisePage ? (
          <>
            <Link
              className="m-1 border border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
              to={{ pathname: `/workouts/display/${id}` }}
            >
              Add to Workout
            </Link>{" "}
            {user.isAdmin === "true" ? (
              <>
                <Link
                  to={{
                    pathname: `/exercises/edit/${id}/${name}/${type}/${muscle}/${grip}/${width}`,
                  }}
                  className="m-1 border border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
                >
                  Edit
                </Link>
                <button
                  className="m-1 border border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
                  onClick={() => deleteExercise(id)}
                >
                  Delete
                </button>
              </>
            ) : (
              <></>
            )}
          </>
        ) : user.isAdmin === "true" && !isExercisePage ? (
          <>
            <button
              className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
              onClick={() => deleteExercise(id)}
            >
              Remove
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
