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
    return (_jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsx("h1", { className: "font-semibold text-4xl mt-7 mb-5 ", children: "Add Food to Meal Plan" }), mealPlanItems] }));
}
