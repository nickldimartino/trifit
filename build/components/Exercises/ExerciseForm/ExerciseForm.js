import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
/*------------------------------------- Functions --------------------------------------*/
export default function ExerciseForm(_a) {
    var id = _a.id, name = _a.name, type = _a.type, muscle = _a.muscle, grip = _a.grip, width = _a.width, addExerciseToWorkout = _a.addExerciseToWorkout, deleteExercise = _a.deleteExercise, user = _a.user;
    // save the URL path
    var location = useLocation();
    var isExercisePage = location.pathname === "/exercises" ? true : false;
    // render the Exercise Form
    return (_jsxs("div", { className: "bg-caramel m-1 w-5/6 rounded-lg shadow-sm", children: [_jsxs("div", { className: "grid grid-cols-5 font-semibold text-md", children: [_jsx("div", { "data-testid": "exercise-name", children: name }), _jsx("div", { children: type }), _jsx("div", { children: muscle }), _jsx("div", { children: grip }), _jsx("div", { children: width })] }), _jsx("div", { className: "rounded-b-lg grid grid-cols-3 bg-eggplant", children: isExercisePage ? (_jsxs(_Fragment, { children: [_jsx(Link, { className: "m-1 border border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", to: { pathname: "/workouts/display/".concat(id) }, children: "Add to Workout" }), " ", user.isAdmin === "true" ? (_jsxs(_Fragment, { children: [_jsx(Link, { to: {
                                        pathname: "/exercises/edit/".concat(id, "/").concat(name, "/").concat(type, "/").concat(muscle, "/").concat(grip, "/").concat(width),
                                    }, className: "m-1 border border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", children: "Edit" }), _jsx("button", { className: "m-1 border border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", onClick: function () { return deleteExercise(id); }, children: "Delete" })] })) : (_jsx(_Fragment, {}))] })) : user.isAdmin === "true" && !isExercisePage ? (_jsx(_Fragment, { children: _jsx("button", { className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", onClick: function () { return deleteExercise(id); }, children: "Remove" }) })) : (_jsx(_Fragment, {})) })] }));
}
