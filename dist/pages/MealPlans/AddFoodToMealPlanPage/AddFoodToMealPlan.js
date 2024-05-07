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
import { useParams } from "react-router-dom";
// Internal
import MealPlanForm from "../../../components/MealPlans/MealPlanForm/MealPlanForm";
/*------------------------------------- Functions --------------------------------------*/
export default function AddFoodToMealPlan(_a) {
    var mealPlans = _a.mealPlans, deleteMealPlan = _a.deleteMealPlan, addFoodToMealPlan = _a.addFoodToMealPlan;
    // save the id in teh URL path
    var id = useParams().id;
    // map each meal plan to a Meal Plan Form
    var mealPlanItems = mealPlans.map(function (m, idx) { return (_jsx(MealPlanForm, { id: m._id, name: m.name, foods: m.foods, totalCalories: m.totalCalories, totalProtein: m.totalProtein, totalCarbohydrates: m.totalCarbohydrates, totalFat: m.totalFat, addFoodToMealPlan: addFoodToMealPlan, deleteMealPlan: deleteMealPlan, foodId: new Types.ObjectId(id) }, idx)); });
    // render the Meal Plan Forms
    return (_jsxs("div", __assign({ className: "flex flex-col justify-center items-center" }, { children: [_jsx("h1", __assign({ className: "font-semibold text-4xl mt-7 mb-5 " }, { children: "Add Food to Meal Plan" })), mealPlanItems] })));
}
