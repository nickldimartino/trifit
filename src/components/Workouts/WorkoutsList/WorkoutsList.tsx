/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";

// Internal
import WorkoutForm from "../WorkoutForm/WorkoutForm";

// Types
import { WorkoutType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function WorkoutList({
  workouts,
  deleteWorkout,
  addExerciseToWorkout,
}: {
  workouts: WorkoutType[];
  deleteWorkout: Function;
  addExerciseToWorkout: Function;
}) {
  // map workouts to their own Workout Form
  const workoutItems: JSX.Element[] = workouts.map((w: any, idx: number) => (
    <WorkoutForm
      id={w._id}
      key={idx}
      name={w.name}
      exercises={w.exercises}
      addExerciseToWorkout={addExerciseToWorkout}
      deleteWorkout={deleteWorkout}
      exerciseId={new Types.ObjectId("123456789101112131415161")}
    />
  ));

  // render the Workout Forms
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black">Workouts List</h1>
      {workoutItems}
    </div>
  );
}
