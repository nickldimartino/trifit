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
    return (_jsxs("div", __assign({ className: "flex flex-col justify-center items-center" }, { children: [_jsx("h1", __assign({ className: "font-semibold text-4xl mt-7 mb-5 " }, { children: "Add Exercise to Workout" })), workoutItems] })));
}
