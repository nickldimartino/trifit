/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useEffect, useState } from "react";

// Internal
import NewWorkoutForm from "../../../components/Workouts/NewWorkoutForm/NewWorkoutForm";
import WorkoutsList from "../../../components/Workouts/WorkoutsList/WorkoutsList";
import * as workoutsService from "../../../utilities/workouts-service";

// Types
import { UserDataType, WorkoutType } from "../../../types";
/*------------------------------------- Functions --------------------------------------*/
export default function WorkoutsPage({
  workouts,
  setWorkouts,
  editWorkout,
  user,
  addExerciseToWorkout,
  deleteWorkout,
}: {
  workouts: WorkoutType[];
  setWorkouts: Function;
  editWorkout: Function;
  user: UserDataType;
  addExerciseToWorkout: Function;
  deleteWorkout: Function;
}) {
  // new workout state
  const [newWorkout, setNewWorkout] = useState<WorkoutType[]>([]);

  // get the workouts from the database
  async function getWorkouts() {
    // get the workouts
    let newWorkoutSet = await workoutsService.getWorkoutsData();

    // save the workouts to the workouts state
    setWorkouts(newWorkoutSet);
  }

  // add a new workout
  async function addNewWorkout(workout: WorkoutType) {
    // create the workout in the database
    await workoutsService.createWorkoutData(workout);

    // add the new workout to the workouts state
    setNewWorkout([...newWorkout, workout]);
  }

  // render the page once on a state change
  useEffect(
    () => {
      getWorkouts();
    }, // eslint-disable-next-line
    [newWorkout]
  );

  // render the New Workout Form and Workout List
  return (
    <div className="flex justify-around mt-10">
      <div className="w-3/4">
        <WorkoutsList
          workouts={workouts}
          deleteWorkout={deleteWorkout}
          addExerciseToWorkout={addExerciseToWorkout}
        />
      </div>
      <div className="flex justify-center mb-5 w-3/4">
        <NewWorkoutForm addNewWorkout={addNewWorkout} />
      </div>
    </div>
  );
}
