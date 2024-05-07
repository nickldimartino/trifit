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
import { useState } from "react";
/*------------------------------------- Functions --------------------------------------*/
export default function NewWorkoutForm(_a) {
    var addNewWorkout = _a.addNewWorkout;
    // new workout state
    var _b = useState({
        name: "",
        exercises: [],
    }), newWorkout = _b[0], setNewWorkout = _b[1];
    // handles the add workout for submission
    function handleAddWorkout(evt) {
        // prevents the page from rerendering
        evt.preventDefault();
        // add the new workout
        addNewWorkout(newWorkout);
        // rerset the new workout state
        setNewWorkout({
            name: "",
            exercises: [],
        });
    }
    // handles the keystrokes for the user input
    function handleOnChange(evt) {
        var _a;
        // save each user keystroke in the state values
        var newWorkoutData = __assign(__assign({}, newWorkout), (_a = {}, _a[evt.target.name] = evt.target.value, _a));
        // set the state value to the new keystroke
        setNewWorkout(newWorkoutData);
    }
    // renders the New Workout Form
    return (_jsx("div", __assign({ className: "flex justify-center items-center" }, { children: _jsxs("div", __assign({ className: "flex justify-center items-center flex-col p-2 bg-caramel shadow-lg rounded-lg border-2 border-black" }, { children: [_jsxs("h1", __assign({ className: "text-2xl block text-center text-black font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-user" }), " Add a Workout"] })), _jsx("hr", { className: "mt-1" }), _jsxs("form", __assign({ onSubmit: handleAddWorkout }, { children: [_jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Name", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "name", type: "text", onChange: handleOnChange, value: newWorkout.name, placeholder: "Enter a name...", required: true, autoComplete: "off" })] })), _jsx("div", __assign({ className: "mt-5" }, { children: _jsxs("button", __assign({ className: "mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-frenchblue font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Add"] })) }))] }))] })) })));
}
