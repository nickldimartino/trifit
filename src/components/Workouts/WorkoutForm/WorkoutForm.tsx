import { Types } from "mongoose";
import { Link } from "react-router-dom";
import { WorkoutType } from "../../../types";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const isWorkoutPage = location.pathname === "/workouts" ? true : false;

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
