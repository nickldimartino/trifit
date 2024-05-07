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
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
/*------------------------------------- Functions --------------------------------------*/
export default function EditWorkoutPage(_a) {
    var editWorkout = _a.editWorkout;
    // save the URL path id ane and name parameters
    var _b = useParams(), id = _b.id, name = _b.name;
    // save the path navigation
    var navigate = useNavigate();
    // new workout state
    var _c = useState({
        name: "",
        exercises: [],
    }), newWorkout = _c[0], setNewWorkout = _c[1];
    // handles the form submission to edit a workout
    function handleEditWorkout(evt) {
        // prevents the page from rerendering
        evt.preventDefault();
        // create an object of the workout to edit
        var edittedWorkoutData = {
            id: new Types.ObjectId(id),
            name: newWorkout.name,
            exercises: newWorkout.exercises,
        };
        // edit the workout
        editWorkout(edittedWorkoutData);
        // navigate to the workouts page
        navigate("/workouts");
    }
    // handles the key strokes for the input elements
    function handleOnChange(evt) {
        var _a;
        // saves each keystroke in the new workout state
        var newWorkoutData = __assign(__assign({}, newWorkout), (_a = {}, _a[evt.target.name] = evt.target.value, _a));
        // sets the state to the new keystrokes
        setNewWorkout(newWorkoutData);
    }
    // render the Edit Workout Page
    return (_jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsx("h1", { className: "font-semibold text-4xl mt-7 mb-5 ", children: "Edit the Workout" }), _jsx("div", { className: "flex justify-center items-center w-1/2 mb-5", children: _jsx("div", { className: "flex justify-center items-center flex-col p-2 bg-caramel shadow-lg rounded-lg border-2 border-black", children: _jsxs("form", { onSubmit: handleEditWorkout, children: [_jsxs("label", { className: "text-left block text-base mt-2 text-black font-semibold", children: ["Name", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "name", type: "text", onChange: handleOnChange, value: newWorkout.name, placeholder: name, required: true, autoComplete: "off" })] }), _jsx("div", { className: "mt-5", children: _jsxs("button", { className: "mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-orange-400 font-semibold", children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Confirm Edit"] }) })] }) }) })] }));
}
