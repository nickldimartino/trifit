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
export default function NewExerciseForm(_a) {
    var addNewExercise = _a.addNewExercise;
    // new exercise state
    var _b = useState({
        name: "",
        type: "",
        muscle: "",
        grip: "",
        width: "",
    }), newExercise = _b[0], setNewExercise = _b[1];
    // handles the add exercise form submission
    function handleAddExercise(evt) {
        // prevents the page from rerendering
        evt.preventDefault();
        // adds the new exercise
        addNewExercise(newExercise);
        // resets the new exercise state
        setNewExercise({
            name: "",
            type: "",
            muscle: "",
            grip: "",
            width: "",
        });
    }
    // handles the changing inputs from the user
    function handleOnChange(evt) {
        var _a;
        // adds each keystroke to the new exercise state
        var newExerciseData = __assign(__assign({}, newExercise), (_a = {}, _a[evt.target.name] = evt.target.value, _a));
        // sets the new exercise data to the state
        setNewExercise(newExerciseData);
    }
    // renders the New Exercise Form
    return (_jsx("div", __assign({ className: "flex justify-center items-center" }, { children: _jsxs("div", __assign({ className: "flex justify-center items-center flex-col p-2 bg-caramel shadow-lg rounded-lg border-2 border-black" }, { children: [_jsxs("h1", __assign({ "data-testid": "new-exercise-header", className: "text-2xl block text-center text-black font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-user" }), " Add an Exercise"] })), _jsx("hr", { className: "mt-1" }), _jsxs("form", __assign({ onSubmit: handleAddExercise }, { children: [_jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Name", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "name", type: "text", onChange: handleOnChange, value: newExercise.name, placeholder: "Enter a name...", required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Type", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "type", type: "text", onChange: handleOnChange, value: newExercise.type, placeholder: "Enter an exercise type...", required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Main Muscle Groups Worked", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "muscle", type: "text", onChange: handleOnChange, value: newExercise.muscle, placeholder: "Enter the main muscle groups...", required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Hand/Foot Placement", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "grip", type: "text", onChange: handleOnChange, value: newExercise.grip, placeholder: "Enter the hand/foot placement...", required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Hand/Foot Width", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "width", type: "text", onChange: handleOnChange, value: newExercise.width, placeholder: "Enter the hand/foot width...", required: true, autoComplete: "off" })] })), _jsx("div", __assign({ className: "mt-5" }, { children: _jsxs("button", __assign({ className: "mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-frenchblue font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Add"] })) }))] }))] })) })));
}
