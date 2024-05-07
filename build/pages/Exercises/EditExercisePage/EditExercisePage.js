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
export default function EditExercisePage(_a) {
    var editExercise = _a.editExercise;
    // save the params in the URL path
    var _b = useParams(), id = _b.id, name = _b.name, type = _b.type, muscle = _b.muscle, grip = _b.grip, width = _b.width;
    // new exercise state
    var _c = useState({
        name: "",
        type: "",
        muscle: "",
        grip: "",
        width: "",
    }), newExercise = _c[0], setNewExercise = _c[1];
    // save the navigation
    var navigate = useNavigate();
    // handles the form submission to edit an exercise
    function handleEditExercise(evt) {
        // prevent the page from rerendering
        evt.preventDefault();
        // create a new object with the information to edit the exercise
        var edittedExerciseData = {
            id: new Types.ObjectId(id),
            name: newExercise.name,
            type: newExercise.type,
            muscle: newExercise.muscle,
            grip: newExercise.grip,
            width: newExercise.width,
        };
        // edit the exercise
        editExercise(edittedExerciseData);
        // navigate to the exercises page
        navigate("/exercises");
    }
    // handles the keystrokes for the input elements
    function handleOnChange(evt) {
        var _a;
        // save each keystroke in the state
        var newExerciseData = __assign(__assign({}, newExercise), (_a = {}, _a[evt.target.name] = evt.target.value, _a));
        // set the state with the  new keystrokes
        setNewExercise(newExerciseData);
    }
    // render the Edit Exercise Page
    return (_jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsx("h1", { className: "font-semibold text-4xl mt-7 mb-5 ", children: "Edit the Exercise" }), _jsx("div", { className: "flex justify-center items-center w-1/2 mb-5", children: _jsx("div", { className: "flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full bg-caramel shadow-lg rounded-lg border-2 border-black", children: _jsxs("form", { onSubmit: handleEditExercise, children: [_jsxs("label", { className: "text-left block text-base mt-2 text-black font-semibold", children: ["Name", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "name", type: "text", onChange: handleOnChange, value: newExercise.name, placeholder: name, required: true, autoComplete: "off" })] }), _jsxs("label", { className: "text-left block text-base mt-2 text-black font-semibold", children: ["Type", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "type", type: "text", onChange: handleOnChange, value: newExercise.type, placeholder: type, required: true, autoComplete: "off" })] }), _jsxs("label", { className: "text-left block text-base mt-2 text-black font-semibold", children: ["Muscle", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "muscle", type: "text", onChange: handleOnChange, value: newExercise.muscle, placeholder: muscle, required: true, autoComplete: "off" })] }), _jsxs("label", { className: "text-left block text-base mt-2 text-black font-semibold", children: ["Grip", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "grip", type: "text", onChange: handleOnChange, value: newExercise.grip, placeholder: grip, required: true, autoComplete: "off" })] }), _jsxs("label", { className: "text-left block text-base mt-2 text-black font-semibold", children: ["Width", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "width", type: "text", onChange: handleOnChange, value: newExercise.width, placeholder: width, required: true, autoComplete: "off" })] }), _jsx("div", { className: "mt-5", children: _jsxs("button", { className: "mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-orange-400 font-semibold", children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Confirm Edit"] }) })] }) }) })] }));
}
