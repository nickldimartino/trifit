import { Types } from "mongoose";
import { Link } from 'react-router-dom';
import { WorkoutType } from "../../../types";

export default function WorkoutForm({ 
    id, 
    name, 
    exercises,
    addExerciseToWorkout,
    deleteWorkout,
    exerciseId
}: { 
    id: Types.ObjectId, 
    name: string, 
    exercises: WorkoutType[],
    addExerciseToWorkout: Function,
    deleteWorkout: Function,
    exerciseId: Types.ObjectId
}) {
    
    return(
        <div>
            <p>{name}</p>
            <Link to={{pathname: `/workouts/${id}`}}>Workout Details</Link>
            <button onClick={() => addExerciseToWorkout(id, exerciseId)}>Add</button>
            <Link to={{pathname: `/workouts/edit/${id}/${name}/`}}>Edit</Link>
            <button onClick={() => deleteWorkout(id)}>Delete</button>
        </div>
    );
}