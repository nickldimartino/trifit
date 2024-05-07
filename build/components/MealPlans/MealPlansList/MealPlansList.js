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
    return (_jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsxs("div", { className: "bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black", children: [_jsx("h1", { children: "Your Meal Plans" }), _jsx("hr", {}), _jsxs("div", { className: "grid grid-cols-5 font-semibold text-md bg-citrine text-black rounded-b-lg", children: [_jsx("div", { className: "flex justify-center items-center border rounded-bl-lg", children: "Name" }), _jsx("div", { className: "flex justify-center items-center border", children: "Calories" }), _jsx("div", { className: "flex justify-center items-center border", children: "Protein" }), _jsx("div", { className: "flex justify-center items-center border", children: "Carbs" }), _jsx("div", { className: "flex justify-center items-center border rounded-br-lg", children: "Fat" })] })] }), mealPlanItems] }));
}
