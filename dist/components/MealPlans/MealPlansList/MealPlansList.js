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
// Internal
import MealPlanForm from "../MealPlanForm/MealPlanForm";
/*------------------------------------- Functions --------------------------------------*/
export default function MealPlanList(_a) {
    var mealPlans = _a.mealPlans, deleteMealPlan = _a.deleteMealPlan, addFoodToMealPlan = _a.addFoodToMealPlan;
    // map the meal plans to their own Meal Plan Form
    var mealPlanItems = mealPlans.map(function (m, idx) { return (_jsx(MealPlanForm, { id: m._id, name: m.name, foods: m.foods, totalCalories: m.totalCalories, totalProtein: m.totalProtein, totalCarbohydrates: m.totalCarbohydrates, totalFat: m.totalFat, deleteMealPlan: deleteMealPlan, addFoodToMealPlan: addFoodToMealPlan, foodId: new Types.ObjectId("123456789101112131415161") }, idx)); });
    // render the Meal Plan Forms
    return (_jsxs("div", __assign({ className: "flex flex-col justify-center items-center" }, { children: [_jsxs("div", __assign({ className: "bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black" }, { children: [_jsx("h1", { children: "Your Meal Plans" }), _jsx("hr", {}), _jsxs("div", __assign({ className: "grid grid-cols-5 font-semibold text-md bg-citrine text-black rounded-b-lg" }, { children: [_jsx("div", __assign({ className: "flex justify-center items-center border rounded-bl-lg" }, { children: "Name" })), _jsx("div", __assign({ className: "flex justify-center items-center border" }, { children: "Calories" })), _jsx("div", __assign({ className: "flex justify-center items-center border" }, { children: "Protein" })), _jsx("div", __assign({ className: "flex justify-center items-center border" }, { children: "Carbs" })), _jsx("div", __assign({ className: "flex justify-center items-center border rounded-br-lg" }, { children: "Fat" }))] }))] })), mealPlanItems] })));
}
