import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import ExerciseForm from "../ExerciseForm/ExerciseForm";
/*------------------------------------- Functions --------------------------------------*/
export default function ExercisesList(_a) {
    var exercises = _a.exercises, addExerciseToWorkout = _a.addExerciseToWorkout, deleteExercise = _a.deleteExercise, user = _a.user;
    // map the exercises to their own Exercise Form
    var exercisesItems = exercises.map(function (e, idx) { return (_jsx(ExerciseForm, { id: e._id, name: e.name, type: e.type, muscle: e.muscle, grip: e.grip, width: e.width, addExerciseToWorkout: addExerciseToWorkout, deleteExercise: deleteExercise, user: user }, idx)); });
    // render the Exercises
    return (_jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsxs("div", { className: "bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black", children: [_jsx("h1", { "data-testid": "exercise-list-header", children: "Exercises" }), _jsx("hr", {}), _jsxs("div", { className: "grid grid-cols-5 font-semibold text-md bg-citrine text-black rounded-b-lg", children: [_jsx("div", { className: "flex justify-center items-center border rounded-bl-lg", children: "Name" }), _jsx("div", { className: "flex justify-center items-center border", children: "Equipment Type" }), _jsx("div", { className: "flex justify-center items-center border", children: "Muscle Groups" }), _jsx("div", { className: "flex justify-center items-center border", children: "Hand/Foot Placement" }), _jsx("div", { className: "flex justify-center items-center border rounded-br-lg", children: "Hand/Foot Width" })] })] }), exercisesItems] }));
}
