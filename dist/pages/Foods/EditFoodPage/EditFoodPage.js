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
export default function EditFoodPage(_a) {
    var editFood = _a.editFood;
    // save the URL path parameters
    var _b = useParams(), id = _b.id, name = _b.name, type = _b.type, calories = _b.calories, protein = _b.protein, carbohydrates = _b.carbohydrates, fat = _b.fat;
    // state for the new food
    var _c = useState({
        name: "",
        type: "",
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
    }), newFood = _c[0], setNewFood = _c[1];
    // save the navigation
    var navigate = useNavigate();
    // handle the form submission to edit a food
    function handleEditFood(evt) {
        // prevent the page from rerendering
        evt.preventDefault();
        // create an object with the new food information
        var edittedFoodData = {
            id: new Types.ObjectId(id),
            name: newFood.name,
            type: newFood.type,
            calories: newFood.calories,
            protein: newFood.protein,
            carbohydrates: newFood.carbohydrates,
            fat: newFood.fat,
        };
        // edit the food
        editFood(edittedFoodData);
        // navigate to the foods page
        navigate("/foods");
    }
    // handle the keystrokes for the input elements
    function handleOnChange(evt) {
        var _a;
        // save each keystroke in the state
        var newExerciseData = __assign(__assign({}, newFood), (_a = {}, _a[evt.target.name] = evt.target.value, _a));
        // set the state to the new keystrokes
        setNewFood(newExerciseData);
    }
    // render the Edit Food Page
    return (_jsxs("div", __assign({ className: "flex flex-col justify-center items-center" }, { children: [_jsx("h1", __assign({ className: "font-semibold text-4xl mt-7 mb-5 " }, { children: "Edit the Food" })), _jsx("div", __assign({ className: "flex justify-center items-center w-3/5 mb-5" }, { children: _jsx("div", __assign({ className: "flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full bg-yellowgreen shadow-lg rounded-lg border-2 border-black" }, { children: _jsxs("form", __assign({ onSubmit: handleEditFood }, { children: [_jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Name", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "name", type: "text", onChange: handleOnChange, value: newFood.name, placeholder: name, required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Type", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "type", type: "text", onChange: handleOnChange, value: newFood.type, placeholder: type, required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Calories", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "calories", type: "text", onChange: handleOnChange, value: newFood.calories, placeholder: calories, required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Protein", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "protein", type: "text", onChange: handleOnChange, value: newFood.protein, placeholder: protein, required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Carbohydrates", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "carbohydrates", type: "text", onChange: handleOnChange, value: newFood.carbohydrates, placeholder: carbohydrates, required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Fat", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "fat", type: "text", onChange: handleOnChange, value: newFood.fat, placeholder: fat, required: true, autoComplete: "off" })] })), _jsx("div", __assign({ className: "mt-5" }, { children: _jsxs("button", __assign({ className: "mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-orange-400 font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Confirm Edit"] })) }))] })) })) }))] })));
}
