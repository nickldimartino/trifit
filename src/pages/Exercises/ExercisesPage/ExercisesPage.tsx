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
  useEffect(() => {
    getExercises();
  }, [newExercise]);

  // render the Exercises Page
  return (
    <>
      <Logo />
      <h1>Exercises Page</h1>
      <div>Filter</div>
      {user.isAdmin === "true" ? (
        <NewExerciseForm addNewExercise={addNewExercise} />
      ) : (
        <hr />
      )}
      <div className="list-picture">
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
    </>
  );
}
