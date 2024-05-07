import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import FoodForm from "../FoodForm/FoodForm";
/*------------------------------------- Functions --------------------------------------*/
export default function FoodsList(_a) {
    var foods = _a.foods, deleteFood = _a.deleteFood, addFoodToMealPlan = _a.addFoodToMealPlan, user = _a.user;
    // maps each food to a new Food Form
    var foodItems = foods.map(function (f, idx) { return (_jsx(FoodForm, { id: f._id, name: f.name, type: f.type, calories: f.calories, protein: f.protein, carbohydrates: f.carbohydrates, fat: f.fat, deleteFood: deleteFood, addFoodToMealPlan: addFoodToMealPlan, user: user }, idx)); });
    // renders the Food Form items
    return (_jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsxs("div", { className: "bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black", children: [_jsx("h1", { children: "Foods" }), _jsx("hr", {}), _jsxs("div", { className: "grid grid-cols-6 font-semibold text-md bg-citrine text-black rounded-b-lg", children: [_jsx("div", { className: "flex justify-center items-center border rounded-bl-lg", children: "Name" }), _jsx("div", { className: "flex justify-center items-center border", children: "Type" }), _jsx("div", { className: "flex justify-center items-center border", children: "Calories" }), _jsx("div", { className: "flex justify-center items-center border", children: "Protein" }), _jsx("div", { className: "flex justify-center items-center border", children: "Carbs" }), _jsx("div", { className: "flex justify-center items-center border rounded-br-lg", children: "Fat" })] })] }), foodItems] }));
}
