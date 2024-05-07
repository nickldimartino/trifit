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
export default function NewMealPlanForm(_a) {
    var addNewMealPlan = _a.addNewMealPlan;
    // new meal plan state
    var _b = useState({
        name: "",
        foods: [],
        totalCalories: 0,
        totalProtein: 0,
        totalCarbohydrates: 0,
        totalFat: 0,
    }), newMealPlan = _b[0], setNewMealPlan = _b[1];
    // handle the form submission to add a meal plan
    function handleAddMealPlan(evt) {
        // prevent the page from rerendering
        evt.preventDefault();
        // add a new meal plan
        addNewMealPlan(newMealPlan);
        // reset the meal plan state
        setNewMealPlan({
            name: "",
            foods: [],
            totalCalories: 0,
            totalProtein: 0,
            totalCarbohydrates: 0,
            totalFat: 0,
        });
    }
    // handle the keystrokes for the user input
    function handleOnChange(evt) {
        var _a;
        // add the keystrokes to the meal plan state
        var newMealPlanData = __assign(__assign({}, newMealPlan), (_a = {}, _a[evt.target.name] = evt.target.value, _a));
        // set the meal plan state
        setNewMealPlan(newMealPlanData);
    }
    // render the Meal Plan Form
    return (_jsx("div", __assign({ className: "flex justify-center items-center" }, { children: _jsxs("div", __assign({ className: "flex justify-center items-center flex-col p-2 bg-yellowgreen shadow-lg rounded-lg border-2 border-black" }, { children: [_jsxs("h1", __assign({ className: "text-2xl block text-center text-black font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-user" }), " Add a Meal Plan"] })), _jsx("hr", { className: "mt-1" }), _jsxs("form", __assign({ onSubmit: handleAddMealPlan }, { children: [_jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Name", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "name", type: "text", onChange: handleOnChange, value: newMealPlan.name, placeholder: "Enter a name...", required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Total Calories (kcal)", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "totalCalories", type: "text", onChange: handleOnChange, value: newMealPlan.totalCalories, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Total Protein (grams)", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "totalProtein", type: "text", onChange: handleOnChange, value: newMealPlan.totalProtein, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Total Carbohydrates (grams)", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "totalCarbohydrates", type: "text", onChange: handleOnChange, value: newMealPlan.totalCarbohydrates, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Total Fat (grams)", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "totalFat", type: "text", onChange: handleOnChange, value: newMealPlan.totalFat, autoComplete: "off" })] })), _jsx("div", __assign({ className: "mt-5" }, { children: _jsxs("button", __assign({ className: "mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-frenchblue font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Add"] })) }))] }))] })) })));
}
