/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { useNavigate, useParams } from "react-router-dom";

// Internal
import ExerciseForm from "../../../components/Exercises/ExerciseForm/ExerciseForm";
import * as workoutsService from "../../../utilities/workouts-service";

// Types
import { ExerciseType, UserDataType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function WorkoutDetailsPage({
  exercises,
  workouts,
  user,
}: {
  exercises: ExerciseType[];
  workouts: any;
  user: UserDataType;
}) {
  // save the id in the URL path
  const { id } = useParams();

  // variables for workouts and exercises
  let thisWorkout: any;
  let thisWorkoutsExercises: ExerciseType[] = [];

  // save the navigation
  const navigate = useNavigate();

  // find the workout that is equal to the URL path
  for (let w: number = 0; w < workouts.length; w++) {
    if (workouts[w]._id === id) {
      thisWorkout = workouts[w];
      break;
    }
  }

  // get the exercises that match the current workout
  thisWorkout.exercises.forEach((e: Types.ObjectId) => {
    exercises.forEach((w: any) => {
      if (e === w._id) {
        thisWorkoutsExercises.push(w);
      }
    });
  });

  // remove the exercise from the workout
  async function removeExerciseFromWorkout(exerciseId: Types.ObjectId) {
    // remove the exercise
    await workoutsService.removeExerciseFromWorkout(id, exerciseId);

    // navigate to the workouts page
    navigate("/workouts");
  }

  // map this workouts exercises to their own Exercise Form
  const exercisesItems: JSX.Element[] = thisWorkoutsExercises.map((e: any, idx: number) => (
    <ExerciseForm
      id={e._id}
      key={idx}
      name={e.name}
      type={e.type}
      muscle={e.muscle}
      grip={e.grip}
      width={e.width}
      addExerciseToWorkout={() => {}}
      deleteExercise={removeExerciseFromWorkout}
      user={user}
    />
  ));

  // render the Workout Details Page
  return (
    <>
      <h1>Workout Details Page</h1>
      <h3>{thisWorkout.name}</h3>
      {exercisesItems}
    </>
  );
}
