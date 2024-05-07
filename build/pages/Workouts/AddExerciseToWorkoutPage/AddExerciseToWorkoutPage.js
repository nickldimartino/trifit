import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { useParams } from "react-router-dom";
// Internal
import WorkoutForm from "../../../components/Workouts/WorkoutForm/WorkoutForm";
/*------------------------------------- Functions --------------------------------------*/
export default function AddExerciseToWorkout(_a) {
    var workouts = _a.workouts, deleteWorkout = _a.deleteWorkout, addExerciseToWorkout = _a.addExerciseToWorkout;
    // save the URL path id parameter
    var id = useParams().id;
    // map each workout to a Workout Form
    var workoutItems = workouts.map(function (w, idx) { return (_jsx(WorkoutForm, { id: w._id, name: w.name, exercises: w.exercises, addExerciseToWorkout: addExerciseToWorkout, deleteWorkout: deleteWorkout, exerciseId: new Types.ObjectId(id) }, idx)); });
    // render the Workout Forms
    return (_jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsx("h1", { className: "font-semibold text-4xl mt-7 mb-5 ", children: "Add Exercise to Workout" }), workoutItems] }));
}
