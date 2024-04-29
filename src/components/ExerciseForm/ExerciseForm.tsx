import { Types } from "mongoose";

export default function ExerciseForm({ id, name, type, muscle, grip, width, deleteExercise}: { id: Types.ObjectId, name: string, type: string, muscle: string, grip: string, width: string, deleteExercise: Function}) {

    return(
        <div>
            <p>{name} &nbsp; {type} &nbsp; {muscle} &nbsp; {grip} &nbsp; {width} &nbsp; </p>
            <button onClick={() => deleteExercise(id)}>Delete</button>
        </div>
    );
}