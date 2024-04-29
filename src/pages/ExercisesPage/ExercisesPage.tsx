import { useEffect, useState } from "react";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import ExercisesPicture from "../../components/ExercisesPicture/ExercisesPicture";
import Logo from "../../components/Logo/Logo";
import NewExerciseForm from "../../components/NewExerciseForm/NewExerciseForm";
import * as exercisesService from "../../utilities/exercises-service";
import { ExerciseType } from "../../types";

export default function ExercisesPage()  { 
    const [exercises, setExercises] = useState([]);
    const [newExercise, setNewExercise] = useState<ExerciseType[]>([]);

    async function getExercises() {
        let newExerciseSet = await exercisesService.getExerciseData();
        console.log("hi")
        console.log(newExerciseSet)
        setExercises(newExerciseSet);
    }
    
    async function addNewExercise(exercise: ExerciseType) {
        await exercisesService.createExerciseData(exercise);
        setNewExercise([ ...newExercise, exercise]);
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
            <ExercisesList exercises={exercises}/>
            <ExercisesPicture />
        </>
    );
}
