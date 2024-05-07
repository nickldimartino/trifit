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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
/*------------------------------------- Functions --------------------------------------*/
export default function WorkoutForm(_a) {
    var id = _a.id, name = _a.name, exercises = _a.exercises, addExerciseToWorkout = _a.addExerciseToWorkout, deleteWorkout = _a.deleteWorkout, exerciseId = _a.exerciseId;
    // get the current URL path and set a flag to rendering elements
    var location = useLocation();
    var isWorkoutPage = location.pathname === "/workouts" ? true : false;
    // render the Workout Form
    return (_jsxs("div", __assign({ className: "bg-caramel m-1 w-5/6 rounded-lg shadow-sm" }, { children: [_jsx("div", __assign({ className: "flex justify-around font-semibold text-md" }, { children: _jsx("div", { children: name }) })), _jsxs("div", __assign({ className: "rounded-b-lg grid grid-cols-3 bg-eggplant" }, { children: [_jsx(Link, __assign({ className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", to: { pathname: "/workouts/".concat(id) } }, { children: "Details" })), !isWorkoutPage ? (_jsx("button", __assign({ className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", onClick: function () { return addExerciseToWorkout(id, exerciseId); } }, { children: "Add" }))) : (_jsx(_Fragment, {})), isWorkoutPage ? (_jsxs(_Fragment, { children: [_jsx(Link, __assign({ className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", to: { pathname: "/workouts/edit/".concat(id, "/").concat(name, "/") } }, { children: "Edit" })), _jsx("button", __assign({ className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", onClick: function () { return deleteWorkout(id); } }, { children: "Delete" }))] })) : (_jsx(_Fragment, {}))] }))] })));
}
