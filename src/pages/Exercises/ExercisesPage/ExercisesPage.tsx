/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { useEffect, useState } from "react";

// Internal
import ExercisesList from "../../../components/Exercises/ExercisesList/ExercisesList";
import ExercisesPicture from "../../../components/Exercises/ExercisesPicture/ExercisesPicture";
import Logo from "../../../components/Logo/Logo";
import NewExerciseForm from "../../../components/Exercises/NewExerciseForm/NewExerciseForm";
import * as exercisesService from "../../../utilities/exercises-service";

// Types
import { ExerciseType, UserDataType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function ExercisesPage({
  exercises,
  setExercises,
  user,
  addExerciseToWorkout,
}: {
  exercises: ExerciseType[];
  setExercises: Function;
  user: UserDataType;
  addExerciseToWorkout: Function;
}) {
  // new exercise state
  const [newExercise, setNewExercise] = useState<ExerciseType[]>([]);

  // get the exercises
  async function getExercises() {
    // get the exercises from the database
    let newExerciseSet = await exercisesService.getExerciseData();

    // set the state to the retrieved exercises
    setExercises(newExerciseSet);
  }

  // add a new exercise
  async function addNewExercise(exercise: ExerciseType) {
    // create the exercise in the database
    await exercisesService.createExerciseData(exercise);

    // set the created exercise to the state
    setNewExercise([...newExercise, exercise]);
  }

  // delete an exercise
  async function deleteExercise(id: Types.ObjectId) {
    // delete an exercise and retrieve the other exercises
    const updatedExercises = await exercisesService.deleteExercise(id);

    // set the exercises state to the retrieved exercises
    setExercises(updatedExercises);
  }

  // render the page once on state change
  useEffect(
    () => {
      getExercises();
    }, // eslint-disable-next-line
    [newExercise]
  );

  // render the Exercises Page
  return (
    <>
      <h1 className="font-semibold text-4xl mt-7 mb-10 ">Exercises Page</h1>
      <div className="flex flex-col">
        {user.isAdmin === "true" ? (
          <div className="flex justify-center mb-5">
            <NewExerciseForm addNewExercise={addNewExercise} />
          </div>
        ) : (
          <hr />
        )}
        <div className="grid grid-cols-2">
          <div>
            <ExercisesList
              exercises={exercises}
              addExerciseToWorkout={addExerciseToWorkout}
              deleteExercise={deleteExercise}
              user={user}
            />
          </div>
          <ExercisesPicture />
        </div>
      </div>
    </>
  );
}
