import { Types } from "mongoose";
import { Link } from "react-router-dom";
import { UserDataType } from "../../../types";

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
  return (
    <div>
      <p>
        {name} &nbsp; {type} &nbsp; {muscle} &nbsp; {grip} &nbsp; {width} &nbsp;{" "}
      </p>
      <Link to={{ pathname: `/workouts/display/${id}` }}>Add to Workout</Link>{" "}
      &nbsp;
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
    </div>
  );
}
