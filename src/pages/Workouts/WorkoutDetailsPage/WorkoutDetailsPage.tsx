import { ExerciseType, WorkoutType } from "../../../types";
import { useParams } from "react-router-dom";
import ExerciseForm from "../../../components/Exercises/ExerciseForm/ExerciseForm";
import { Types } from "mongoose";
import { useEffect } from "react";

export default function WorkoutDetailsPage({ exercises, workouts }: { exercises: ExerciseType[], workouts: any }) {
    const { id } = useParams();
    let thisWorkout;
    let thisWorkoutsExercises: ExerciseType[] = [];

    for (let w = 0; w < workouts.length; w++) {
        if (workouts[w]._id === id) {
            thisWorkout = workouts[w];
            break;
        }
    }

    thisWorkout.exercises.forEach((e: Types.ObjectId) => {
        exercises.forEach((w: any) => {
            if (e == w._id) {
                thisWorkoutsExercises.push(w);
            }
        })
    });

    const exercisesItems = thisWorkoutsExercises.map((e: any, idx: number) => (
        <ExerciseForm 
            id={e._id}
            key={idx}
            name={e.name}
            type={e.type}
            muscle={e.muscle}
            grip={e.grip}
            width={e.width}
            addExerciseToWorkout={()=>{}}
            deleteExercise={()=>{}}
        />
    ));

    return (
        <>
            <h1>Workout Details Page</h1>
            <h3>{thisWorkout.name}</h3>
            {exercisesItems}
        </>
    );
}