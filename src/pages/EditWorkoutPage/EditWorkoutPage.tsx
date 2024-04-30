import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { WorkoutType } from "../../types";
import { Types } from "mongoose";

export default function EditWorkoutPage({ editWorkout }: { editWorkout: Function }) {
    const { id, name, exercises } = useParams();
    const [newWorkout, setNewWorkout] = useState({
        name: "",
        exercises: []
    });
    const navigate = useNavigate();

    function handleEditWorkout(evt: React.ChangeEvent<any>) {
        evt.preventDefault();

        const edittedWorkoutData: WorkoutType = {
            id: new Types.ObjectId(id),
            name: newWorkout.name,
            exercises: newWorkout.exercises
        }

        editWorkout(edittedWorkoutData);
        
        navigate("/workouts");
    }

    function handleOnChange(evt: React.ChangeEvent<any>) {
        const newWorkoutData = { ...newWorkout, [evt.target.name]: evt.target.value }
        setNewWorkout(newWorkoutData);
    }

    return (
        <>
            <h1>Edit Workout Page</h1>
            <form onSubmit={handleEditWorkout}>
                <label>
                    Name
                    <input 
                        name="name"
                        type="text"
                        onChange={handleOnChange}
                        value={newWorkout.name}
                        placeholder={name}
                    />
                </label>
                <label>
                    Exercises
                    <input 
                        name="exercises"
                        type="text"
                        onChange={handleOnChange}
                        value={newWorkout.exercises}
                    />
                </label>
                <button type="submit">Confirm Edit</button>
            </form>
        </>
    );
}