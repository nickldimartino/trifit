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
export default function EditMealPlanPage(_a) {
    var editMealPlan = _a.editMealPlan;
    // save the id in the URL path
    var id = useParams().id;
    // new meal plan state
    var _b = useState({
        name: "",
        foods: [],
        totalCalories: 0,
        totalProtein: 0,
        totalCarbohydrates: 0,
        totalFat: 0,
    }), newMealPlan = _b[0], setNewMealPlan = _b[1];
    // save the navigation
    var navigate = useNavigate();
    // handle the form submission to edit a meal plan
    function handleEditMealPlan(evt) {
        // prevent the page from rerendering
        evt.preventDefault();
        // created a new object to for the meal plan to edit
        var edittedMealPlanData = {
            id: new Types.ObjectId(id),
            name: newMealPlan.name,
            foods: newMealPlan.foods,
            totalCalories: newMealPlan.totalCalories,
            totalProtein: newMealPlan.totalProtein,
            totalCarbohydrates: newMealPlan.totalCarbohydrates,
            totalFat: newMealPlan.totalFat,
        };
        // edit the meal plan
        editMealPlan(edittedMealPlanData);
        // navigate to the meal plans page
        navigate("/mealplans");
    }
    // handle the keystrokes for the input elements
    function handleOnChange(evt) {
        var _a;
        // save each keystroke in the state
        var newMealPlanData = __assign(__assign({}, newMealPlan), (_a = {}, _a[evt.target.name] = evt.target.value, _a));
        // set the new state
        setNewMealPlan(newMealPlanData);
    }
    // render the Edit Meal Plan Page
    return (_jsxs("div", __assign({ className: "flex flex-col justify-center items-center" }, { children: [_jsx("h1", __assign({ className: "font-semibold text-4xl mt-7 mb-5 " }, { children: "Edit the Meal Plan" })), _jsx("div", __assign({ className: "flex justify-center items-center w-3/5 mb-5" }, { children: _jsx("div", __assign({ className: "flex justify-center items-center flex-col p-2 bg-yellowgreen shadow-lg rounded-lg border-2 border-black" }, { children: _jsxs("form", __assign({ onSubmit: handleEditMealPlan }, { children: [_jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Name", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "name", type: "text", onChange: handleOnChange, value: newMealPlan.name, placeholder: "Meal Plan Name", required: true, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Total Calories", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "totalCalories", type: "text", onChange: handleOnChange, value: newMealPlan.totalCalories, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Total Protein", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "totalProtein", type: "text", onChange: handleOnChange, value: newMealPlan.totalProtein, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Total Carbohydrates", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "totalCarbohydrates", type: "text", onChange: handleOnChange, value: newMealPlan.totalCarbohydrates, autoComplete: "off" })] })), _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Total Fat", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "totalFat", type: "text", onChange: handleOnChange, value: newMealPlan.totalFat, autoComplete: "off" })] })), _jsx("div", __assign({ className: "mt-5" }, { children: _jsxs("button", __assign({ className: "mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-orange-400 font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Confirm Edit"] })) }))] })) })) }))] })));
}
