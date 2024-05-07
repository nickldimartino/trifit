import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
/*------------------------------------- Functions --------------------------------------*/
export default function WorkoutForm(_a) {
    var id = _a.id, name = _a.name, exercises = _a.exercises, addExerciseToWorkout = _a.addExerciseToWorkout, deleteWorkout = _a.deleteWorkout, exerciseId = _a.exerciseId;
    // get the current URL path and set a flag to rendering elements
    var location = useLocation();
    var isWorkoutPage = location.pathname === "/workouts" ? true : false;
    // render the Workout Form
    return (_jsxs("div", { className: "bg-caramel m-1 w-5/6 rounded-lg shadow-sm", children: [_jsx("div", { className: "flex justify-around font-semibold text-md", children: _jsx("div", { children: name }) }), _jsxs("div", { className: "rounded-b-lg grid grid-cols-3 bg-eggplant", children: [_jsx(Link, { className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", to: { pathname: "/workouts/".concat(id) }, children: "Details" }), !isWorkoutPage ? (_jsx("button", { className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", onClick: function () { return addExerciseToWorkout(id, exerciseId); }, children: "Add" })) : (_jsx(_Fragment, {})), isWorkoutPage ? (_jsxs(_Fragment, { children: [_jsx(Link, { className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", to: { pathname: "/workouts/edit/".concat(id, "/").concat(name, "/") }, children: "Edit" }), _jsx("button", { className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", onClick: function () { return deleteWorkout(id); }, children: "Delete" })] })) : (_jsx(_Fragment, {}))] })] }));
}
