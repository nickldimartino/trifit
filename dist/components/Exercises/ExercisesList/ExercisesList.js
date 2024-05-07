var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    return (_jsxs("div", __assign({ className: "flex flex-col justify-center items-center" }, { children: [_jsxs("div", __assign({ className: "bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black" }, { children: [_jsx("h1", __assign({ "data-testid": "exercise-list-header" }, { children: "Exercises" })), _jsx("hr", {}), _jsxs("div", __assign({ className: "grid grid-cols-5 font-semibold text-md bg-citrine text-black rounded-b-lg" }, { children: [_jsx("div", __assign({ className: "flex justify-center items-center border rounded-bl-lg" }, { children: "Name" })), _jsx("div", __assign({ className: "flex justify-center items-center border" }, { children: "Equipment Type" })), _jsx("div", __assign({ className: "flex justify-center items-center border" }, { children: "Muscle Groups" })), _jsx("div", __assign({ className: "flex justify-center items-center border" }, { children: "Hand/Foot Placement" })), _jsx("div", __assign({ className: "flex justify-center items-center border rounded-br-lg" }, { children: "Hand/Foot Width" }))] }))] })), exercisesItems] })));
}
