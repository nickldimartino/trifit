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
    <div className="bg-caramel m-1 w-3/4 rounded-lg shadow-sm">
      <p>
        {name} &nbsp; {type} &nbsp; {muscle} &nbsp; {grip} &nbsp; {width} &nbsp;{" "}
      </p>
      &nbsp;
      {isExercisePage ? (
        <>
          <Link to={{ pathname: `/workouts/display/${id}` }}>
            Add to Workout
          </Link>{" "}
          {user.isAdmin === "true" ? (
            <>
              <Link
                to={{
                  pathname: `/exercises/edit/${id}/${name}/${type}/${muscle}/${grip}/${width}`,
                }}
              >
                Edit
              </Link>
              <button onClick={() => deleteExercise(id)}>Delete</button>
            </>
          ) : (
            <></>
          )}
        </>
      ) : user.isAdmin === "true" && !isExercisePage ? (
        <>
          <button onClick={() => deleteExercise(id)}>Remove</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
