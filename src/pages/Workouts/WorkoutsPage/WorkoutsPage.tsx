import Logo from "../../../components/Logo/Logo";
import WorkoutsList from "../../../components/Workouts/WorkoutsList/WorkoutsList";
import { UserDataType, WorkoutType } from "../../../types";
import { useState, useEffect } from "react";
import * as workoutsService from "../../../utilities/workouts-service";
import NewWorkoutForm from "../../../components/Workouts/NewWorkoutForm/NewWorkoutForm";

export default function WorkoutsPage({ workouts, setWorkouts, editWorkout, user, addExerciseToWorkout, deleteWorkout }: { workouts: any, setWorkouts: Function, editWorkout: Function, user: UserDataType, addExerciseToWorkout: Function, deleteWorkout: Function }) {
    const [newWorkout, setNewWorkout] = useState<WorkoutType[]>([]);

    async function getWorkouts() {
        let newWorkoutSet = await workoutsService.getWorkoutsData();
        setWorkouts(newWorkoutSet);
    }

    async function addNewWorkout(workout: WorkoutType) {
        await workoutsService.createWorkoutData(workout);
        setNewWorkout([ ...newWorkout, workout]);
    }

    useEffect(() => {
        getWorkouts();
    }, [newWorkout]);

    return (
        <>  
            <Logo />
            <h1>Workouts Page</h1>
            <div>Filter</div>
            <NewWorkoutForm addNewWorkout={addNewWorkout}/>
            <WorkoutsList workouts={workouts} deleteWorkout={deleteWorkout} addExerciseToWorkout={addExerciseToWorkout}/>
        </>
    );
}
