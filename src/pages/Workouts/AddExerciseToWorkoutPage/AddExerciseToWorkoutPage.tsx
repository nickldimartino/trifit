import WorkoutForm from "../../../components/Workouts/WorkoutForm/WorkoutForm";
import { WorkoutType } from "../../../types";
import { useParams } from "react-router-dom";
import { Types } from "mongoose";

export default function AddExerciseToWorkout({ workouts, deleteWorkout, addExerciseToWorkout }: { workouts: WorkoutType[], deleteWorkout: Function, addExerciseToWorkout: Function }) {
    const { id } = useParams();

    const workoutItems = workouts.map((w: any, idx: number) => (
        <WorkoutForm 
            id={w._id}
            key={idx}
            name={w.name}
            exercises={w.exercises}
            addExerciseToWorkout={addExerciseToWorkout}
            deleteWorkout={deleteWorkout}
            exerciseId={new Types.ObjectId(id)}
        />
    ));
    
    return (
        <>
            <h1>Add Exercise to Workout</h1>
            {workoutItems}
        </>
    );
}