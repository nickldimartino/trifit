import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ExerciseType } from "../../types";
import { Types } from "mongoose";

export default function EditExercisePage({ editExercise }: { editExercise: Function }) {
    const { id, name, type, muscle, grip, width } = useParams();
    const [newExercise, setNewExercise] = useState({
        name: "",
        type: "",
        muscle: "",
        grip: "",
        width: ""
    });
    const navigate = useNavigate();

    function handleEditExercise(evt: React.ChangeEvent<any>) {
        evt.preventDefault();

        const edittedExerciseData: ExerciseType = {
            id: new Types.ObjectId(id),
            name: newExercise.name,
            type: newExercise.type,
            muscle: newExercise.muscle,
            grip: newExercise.grip,
            width: newExercise.width,
        }

        editExercise(edittedExerciseData);
        
        navigate("/exercises");
    }

    function handleOnChange(evt: React.ChangeEvent<any>) {
        const newExerciseData = { ...newExercise, [evt.target.name]: evt.target.value }
        setNewExercise(newExerciseData);
    }

    return (
        <>
            <h1>Edit Exercise Page</h1>
            <form onSubmit={handleEditExercise}>
                <label>
                    Name
                    <input 
                        name="name"
                        type="text"
                        onChange={handleOnChange}
                        value={newExercise.name}
                        placeholder={name}
                        required
                    />
                </label>
                <label>
                    Type
                    <input 
                        name="type"
                        type="text"
                        onChange={handleOnChange}
                        value={newExercise.type}
                        placeholder={type}
                        required
                    />
                </label>
                <label>
                    Muscle
                    <input 
                        name="muscle"
                        type="text"
                        onChange={handleOnChange}
                        value={newExercise.muscle}
                        placeholder={muscle}
                        required
                    />
                </label>
                <label>
                    Grip
                    <input 
                        name="grip"
                        type="text"
                        onChange={handleOnChange}
                        value={newExercise.grip}
                        placeholder={grip}
                        required
                    />
                </label>
                <label>
                    Width
                    <input 
                        name="width"
                        type="text"
                        onChange={handleOnChange}
                        value={newExercise.width}
                        placeholder={width}
                        required
                    />
                </label>
                <button type="submit">Confirm Edit</button>
            </form>
        </>
    );
}