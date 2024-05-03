/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import ExerciseForm from "../ExerciseForm/ExerciseForm";

// Types
import { ExerciseType, UserDataType } from "../../../types";

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
      <div className="bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black">
        <h1>Exercises</h1>
        <hr />
        <div className="grid grid-cols-5 font-semibold text-md bg-citrine text-black rounded-b-lg">
          <div className="flex justify-center items-center border rounded-bl-lg">
            Name
          </div>
          <div className="flex justify-center items-center border">
            Equipment Type
          </div>
          <div className="flex justify-center items-center border">
            Muscle Groups
          </div>
          <div className="flex justify-center items-center border">
            Hand/Foot Placement
          </div>
          <div className="flex justify-center items-center border rounded-br-lg">
            Hand/Foot Width
          </div>
        </div>
      </div>
      {exercisesItems}
    </div>
  );
}
