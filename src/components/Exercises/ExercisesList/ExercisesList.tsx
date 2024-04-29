import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { ExerciseType } from "../../../types";

export default function ExercisesList({ 
    exercises, 
    addExerciseToTemplate,
    deleteExercise 
}: {
    exercises: ExerciseType[], 
    addExerciseToTemplate: Function,
    deleteExercise: Function
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
            addExerciseToTemplate={addExerciseToTemplate}
            deleteExercise={deleteExercise}
        />
    ));

    return (
        <>  
            <h1>Exercises List</h1>
            {exercisesItems}
        </>
    );
}