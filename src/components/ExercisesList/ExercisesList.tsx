import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { ExerciseType } from "../../types";

export default function ExercisesList({ exercises }: {exercises: ExerciseType[]}) {
    const exercisesItems = exercises.map((e: ExerciseType, idx: number) => {
        <ExerciseForm 
            key={idx}
            name={e.name}
            type={e.type}
            muscle={e.muscle}
            grip={e.grip}
            width={e.width}
        />
    });

    return (
        <>  
            <h1>Exercises List</h1>
            {exercisesItems}
        </>
    );
}