import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { ExerciseType, UserDataType } from "../../../types";

export default function ExercisesList({ 
    exercises, 
    addExerciseToWorkout,
    deleteExercise,
    user
}: {
    exercises: ExerciseType[], 
    addExerciseToWorkout: Function,
    deleteExercise: Function,
    user: UserDataType
}) {
    const exercisesItems = exercises.map((e: any, idx: number) => (
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

    return (
        <>  
            <h1>Exercises List</h1>
            {exercisesItems}
        </>
    );
}