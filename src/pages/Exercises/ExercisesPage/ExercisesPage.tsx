import { useEffect, useState } from "react";
import ExercisesList from "../../../components/Exercises/ExercisesList/ExercisesList";
import ExercisesPicture from "../../../components/Exercises/ExercisesPicture/ExercisesPicture";
import Logo from "../../../components/Logo/Logo";
import NewExerciseForm from "../../../components/Exercises/NewExerciseForm/NewExerciseForm";
import * as exercisesService from "../../../utilities/exercises-service";
import { ExerciseType, UserDataType } from "../../../types";
import { Types } from "mongoose";

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
  const [newExercise, setNewExercise] = useState<ExerciseType[]>([]);

  async function getExercises() {
    let newExerciseSet = await exercisesService.getExerciseData();
    setExercises(newExerciseSet);
  }

  async function addNewExercise(exercise: ExerciseType) {
    await exercisesService.createExerciseData(exercise);
    setNewExercise([...newExercise, exercise]);
  }

  async function deleteExercise(id: Types.ObjectId) {
    const updatedExercises = await exercisesService.deleteExercise(id);
    setExercises(updatedExercises);
  }

  useEffect(() => {
    getExercises();
  }, [newExercise]);

  return (
    <>
      <Logo />
      <h1>Exercises Page</h1>
      <div>Filter</div>
      { user.isAdmin === "true" ?
        <NewExerciseForm addNewExercise={addNewExercise} />
        :
        <hr />
      }
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
