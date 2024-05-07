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
export default function NewBodyStatForm(_a) {
    var addBodyStat = _a.addBodyStat;
    // new body stat state
    var _b = useState({
        calories: 0,
        weight: 0,
    }), newBodyStat = _b[0], setNewBodyStat = _b[1];
    // handles the add body stat submit form
    function handleAddBodyStat(evt) {
        // prevent the page from rendering
        evt.preventDefault();
        // add the body stat
        addBodyStat(newBodyStat);
        // reset the body stat values
        setNewBodyStat({
            calories: 0,
            weight: 0,
        });
    }
    // handles the user inputs form while typing
    function handleOnChange(evt) {
        var _a;
        // adds keystrokes to the input box value
        var newWorkoutData = __assign(__assign({}, newBodyStat), (_a = {}, _a[evt.target.name] = evt.target.value, _a));
        // sets the new body stat state
        setNewBodyStat(newWorkoutData);
    }
    // render the add body stat form
    return (_jsx("div", { className: "flex justify-center items-center w-full h-5/6 mt-7", children: _jsxs("div", { className: "flex justify-center items-center flex-col w-1/2 bg-citrine shadow-lg rounded-lg border-2 border-black", children: [_jsxs("h1", { className: "text-2xl block text-center text-black font-semibold", children: [_jsx("i", { className: "fa-solid fa-user" }), " Add a Body Stat"] }), _jsx("hr", { className: "mt-1" }), _jsxs("form", { className: "p-3", onSubmit: handleAddBodyStat, children: [_jsxs("label", { className: "text-left block text-base mt-2 text-black font-semibold", children: ["Today's Caloric Intake (kcal)", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "calories", type: "text", onChange: handleOnChange, value: newBodyStat.calories, required: true, autoComplete: "off" })] }), _jsxs("label", { className: "text-left block text-base mt-2 text-black font-semibold", children: ["Today's Body Weight (pounds/lbs)", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "weight", type: "text", onChange: handleOnChange, value: newBodyStat.weight, required: true, autoComplete: "off" })] }), _jsx("div", { className: "mt-5", children: _jsxs("button", { className: "mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-frenchblue font-semibold", children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Add"] }) })] })] }) }));
}
