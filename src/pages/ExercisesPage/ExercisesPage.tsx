import { useEffect, useState } from "react";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import ExercisesPicture from "../../components/ExercisesPicture/ExercisesPicture";
import Logo from "../../components/Logo/Logo";
import NewExerciseForm from "../../components/NewExerciseForm/NewExerciseForm";
import * as exercisesService from "../../utilities/exercises-service";
import { ExerciseType } from "../../types";
import { Types } from "mongoose";

export default function ExercisesPage({ exercises, setExercises }: { exercises: ExerciseType[], setExercises: Function })  { 
    const [newExercise, setNewExercise] = useState<ExerciseType[]>([]);

    async function getExercises() {
        let newExerciseSet = await exercisesService.getExerciseData();
        setExercises(newExerciseSet);
    }
    
    async function addNewExercise(exercise: ExerciseType) {
        await exercisesService.createExerciseData(exercise);
        setNewExercise([ ...newExercise, exercise]);
    }

    async function deleteExercise(id: Types.ObjectId) {
        const updatedExercises = await exercisesService.deleteExercise(id);
        setExercises(updatedExercises);
    }

    useEffect(() => {
        getExercises();
    }, []);

    return (
        <>  
            <Logo />
            <h1>Exercises Page</h1>
            <div>Filter</div>
            <NewExerciseForm addNewExercise={addNewExercise}/>
            <ExercisesList 
                exercises={exercises}
                deleteExercise={deleteExercise}/>
            <ExercisesPicture />
        </>
    );
}
