import { useState } from "react";

export default function NewExerciseForm({ addNewExercise }: {addNewExercise: Function}) {
    const [newExercise, setNewExercise] = useState({
        name: "",
        type: "",
        muscle: "",
        grip: "",
        width: ""
    });

    function handleAddExercise(evt: React.ChangeEvent<any>) {
        evt.preventDefault();
        addNewExercise(newExercise);
        setNewExercise({
            name: "",
            type: "",
            muscle: "",
            grip: "",
            width: ""
        });
    }

    function handleOnChange(evt: React.ChangeEvent<any>) {
        const newExerciseData = { ...newExercise, [evt.target.name]: evt.target.value }
        setNewExercise(newExerciseData);
    }

    return (
        <>
            <h1>New Exercise Form</h1>
            <form onSubmit={handleAddExercise}>
                <label>
                    Name
                    <input 
                        name="name"
                        type="text"
                        onChange={handleOnChange}
                        value={newExercise.name}
                        placeholder="Exercise Name"
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
                        placeholder="Exercise Type"
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
                        placeholder="Main Muscle"
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
                        placeholder="Hand Grip"
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
                        placeholder="Hand Width"
                        required
                    />
                </label>
                <button type="submit">Add Exercise</button>
            </form>
        </>
    );
}