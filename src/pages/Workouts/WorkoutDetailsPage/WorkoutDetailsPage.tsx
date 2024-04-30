import { ExerciseType } from "../../../types";
import { useNavigate, useParams } from "react-router-dom";
import ExerciseForm from "../../../components/Exercises/ExerciseForm/ExerciseForm";
import { Types } from "mongoose";
import * as workoutsService from "../../../utilities/workouts-service";

export default function WorkoutDetailsPage({ exercises, workouts }: { exercises: ExerciseType[], workouts: any }) {
    const { id } = useParams();
    let thisWorkout;
    let thisWorkoutsExercises: ExerciseType[] = [];
    const navigate = useNavigate();

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

    async function removeExerciseFromWorkout(exerciseId: Types.ObjectId) {
        await workoutsService.removeExerciseFromWorkout(id, exerciseId);
        navigate("/workouts");
    }

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
            deleteExercise={removeExerciseFromWorkout}
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