import { WorkoutType } from "../../../types";
import WorkoutForm from "../WorkoutForm/WorkoutForm";

export default function WorkoutList({ workouts, deleteWorkout }: { workouts: WorkoutType[], deleteWorkout: Function }) {
    const workoutItems = workouts.map((w: any, idx: number) => (
        <WorkoutForm 
            id={w._id}
            key={idx}
            name={w.name}
            exercises={w.exercises}
            deleteWorkout={deleteWorkout}
        />
    ));

    return (
        <>  
            <h1>Workout List</h1>
            {workoutItems}
        </>
    );
}