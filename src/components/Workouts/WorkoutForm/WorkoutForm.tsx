import { Types } from "mongoose";
import { Link } from 'react-router-dom';
import { WorkoutType } from "../../../types";

export default function WorkoutForm({ 
    id, 
    name, 
    exercises,
    deleteWorkout
}: { 
    id: Types.ObjectId, 
    name: string, 
    exercises: WorkoutType[]
    deleteWorkout: Function,
}) {

    return(
        <div>
            <p>{name}</p>
            <Link to={{pathname: `/workouts/edit/${id}/${name}/`}}>Edit</Link>
            <button onClick={() => deleteWorkout(id)}>Delete</button>
        </div>
    );
}