/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import ExerciseForm from "../ExerciseForm/ExerciseForm";

// Types
import { ExerciseType, UserDataType } from "../../../types";
import React from "react";

/*------------------------------------- Functions --------------------------------------*/
export default function ExercisesList({
  exercises,
  addExerciseToWorkout,
  deleteExercise,
  user,
}: {
  exercises: ExerciseType[];
  addExerciseToWorkout: Function;
  deleteExercise: Function;
  user: UserDataType;
}) {
  // map the exercises to their own Exercise Form
  const exercisesItems: JSX.Element[] = exercises.map((e: any, idx: number) => (
    <ExerciseForm
      id={e._id}
      key={idx}
      name={e.name}
      type={e.type}
      muscle={e.muscle}
      grip={e.grip}
      width={e.width}
      addExerciseToWorkout={addExerciseToWorkout}
      deleteExercise={deleteExercise}
      user={user}
    />
  ));

  // render the Exercises
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black">Exercises List</h1>
      {exercisesItems}
    </div>
  );
}
