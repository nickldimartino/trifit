/*----------------------------------- Module Imports -----------------------------------*/
import { useParams } from "react-router-dom";
import { Types } from "mongoose";

import WorkoutForm from "../../../components/Workouts/WorkoutForm/WorkoutForm";
import { WorkoutType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function AddExerciseToWorkout({
  workouts,
  deleteWorkout,
  addExerciseToWorkout,
}: {
  workouts: WorkoutType[];
  deleteWorkout: Function;
  addExerciseToWorkout: Function;
}) {
  // save the URL path id parameter
  const { id } = useParams();

  // map each workout to a Workout Form
  const workoutItems = workouts.map((w: any, idx: number) => (
    <WorkoutForm
      id={w._id}
      key={idx}
      name={w.name}
      exercises={w.exercises}
      addExerciseToWorkout={addExerciseToWorkout}
      deleteWorkout={deleteWorkout}
      exerciseId={new Types.ObjectId(id)}
    />
  ));

  // render the Workout Forms
  return (
    <>
      <h1>Add Exercise to Workout</h1>
      {workoutItems}
    </>
  );
}
