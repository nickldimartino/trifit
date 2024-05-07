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
// External
import { Types } from "mongoose";
// Internal
import WorkoutForm from "../WorkoutForm/WorkoutForm";
/*------------------------------------- Functions --------------------------------------*/
export default function WorkoutList(_a) {
    var workouts = _a.workouts, deleteWorkout = _a.deleteWorkout, addExerciseToWorkout = _a.addExerciseToWorkout;
    // map workouts to their own Workout Form
    var workoutItems = workouts.map(function (w, idx) { return (_jsx(WorkoutForm, { id: w._id, name: w.name, exercises: w.exercises, addExerciseToWorkout: addExerciseToWorkout, deleteWorkout: deleteWorkout, exerciseId: new Types.ObjectId("123456789101112131415161") }, idx)); });
    // render the Workout Forms
    return (_jsxs("div", __assign({ className: "flex flex-col justify-center items-center" }, { children: [_jsx("div", __assign({ className: "bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black" }, { children: _jsx("h1", { children: "Workouts" }) })), workoutItems] })));
}
