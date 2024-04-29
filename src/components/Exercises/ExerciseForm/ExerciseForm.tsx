import { Types } from "mongoose";
import { Link } from 'react-router-dom';

export default function ExerciseForm({ 
    id, 
    name, 
    type, 
    muscle, 
    grip, 
    width,
    addExerciseToTemplate,
    deleteExercise, 
}: { 
    id: Types.ObjectId, 
    name: string, 
    type: string, 
    muscle: string, 
    grip: string, 
    width: string, 
    addExerciseToTemplate: Function,
    deleteExercise: Function,
}) {

    return(
        <div>
            <p>{name} &nbsp; {type} &nbsp; {muscle} &nbsp; {grip} &nbsp; {width} &nbsp; </p>
            <button onClick={() => addExerciseToTemplate(id)}>Add</button>
            <Link to={{pathname: `/exercises/edit/${id}/${name}/${type}/${muscle}/${grip}/${width}`}}>Edit</Link>
            <button onClick={() => deleteExercise(id)}>Delete</button>
        </div>
    );
}