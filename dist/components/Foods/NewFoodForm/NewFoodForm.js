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
export default function NewFoodForm(_a) {
    var addNewFood = _a.addNewFood;
    // new food state
    var _b = useState({
        name: "",
        type: "",
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
    }), newFood = _b[0], setNewFood = _b[1];
    // handle the form submission to add a food
    function handleAddFood(evt) {
        // prevent the page from rerendering
        evt.preventDefault();
        // add the new food
        addNewFood(newFood);
        // reset the new food state
        setNewFood({
            name: "",
            type: "",
            calories: 0,
            protein: 0,
            carbohydrates: 0,
            fat: 0,
        });
    }
    // handles the keystrokes of the user for the input elements
    function handleOnChange(evt) {
        var _a;
        // adds each keystroke to the state value
        var newFoodData = __assign(__assign({}, newFood), (_a = {}, _a[evt.target.name] = evt.target.value, _a));
        // set the state value with the new value
        setNewFood(newFoodData);
    }
    // render the New Food form
    return (_jsx("div", __assign({ className: "flex justify-center items-center" }, { children: _jsxs("div", __assign({ className: "flex justify-center items-center flex-col p-2 bg-yellowgreen shadow-lg rounded-lg border-2 border-black" }, { children: [_jsxs("h1", __assign({ className: "text-2xl block text-center text-black font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-user" }), " Add a Food"] })), _jsx("hr", { className: "mt-1" }), _jsxs("form", __assign({ onSubmit: handleAddFood }, { children: [_jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Name", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "name", type: "text", onChange: handleOnChange, value: newFood.name, placeholder: "Enter a name...", required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Type", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "type", type: "text", onChange: handleOnChange, value: newFood.type, placeholder: "Enter a type...", required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Calories (kcal)", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "calories", type: "number", onChange: handleOnChange, value: newFood.calories, required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Protein (grams)", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "protein", type: "number", onChange: handleOnChange, value: newFood.protein, required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Carbohyrates (grams)", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "carbohydrates", type: "number", onChange: handleOnChange, value: newFood.carbohydrates, required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Fat (grams)", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "fat", type: "number", onChange: handleOnChange, value: newFood.fat, required: true, autoComplete: "off" })] })), _jsx("div", __assign({ className: "mt-5" }, { children: _jsxs("button", __assign({ className: "mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-frenchblue font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Add"] })) }))] }))] })) })));
}
