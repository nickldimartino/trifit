import { Types } from "mongoose";
import { WorkoutType } from "../../../types";
import WorkoutForm from "../WorkoutForm/WorkoutForm";

export default function WorkoutList({ workouts, deleteWorkout, addExerciseToWorkout }: { workouts: WorkoutType[], deleteWorkout: Function, addExerciseToWorkout: Function }) {
    const workoutItems = workouts.map((w: any, idx: number) => (
        <WorkoutForm 
            id={w._id}
            key={idx}
            name={w.name}
            exercises={w.exercises}
            addExerciseToWorkout={addExerciseToWorkout}
            deleteWorkout={deleteWorkout}
            exerciseId={new Types.ObjectId("123456789101112131415161")}
        />
    ));

    return (
        <>  
            <h1>Workout List</h1>
            {workoutItems}
        </>
    );
}