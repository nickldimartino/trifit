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
// Internal
import FoodForm from "../FoodForm/FoodForm";
/*------------------------------------- Functions --------------------------------------*/
export default function FoodsList(_a) {
    var foods = _a.foods, deleteFood = _a.deleteFood, addFoodToMealPlan = _a.addFoodToMealPlan, user = _a.user;
    // maps each food to a new Food Form
    var foodItems = foods.map(function (f, idx) { return (_jsx(FoodForm, { id: f._id, name: f.name, type: f.type, calories: f.calories, protein: f.protein, carbohydrates: f.carbohydrates, fat: f.fat, deleteFood: deleteFood, addFoodToMealPlan: addFoodToMealPlan, user: user }, idx)); });
    // renders the Food Form items
    return (_jsxs("div", __assign({ className: "flex flex-col justify-center items-center" }, { children: [_jsxs("div", __assign({ className: "bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black" }, { children: [_jsx("h1", { children: "Foods" }), _jsx("hr", {}), _jsxs("div", __assign({ className: "grid grid-cols-6 font-semibold text-md bg-citrine text-black rounded-b-lg" }, { children: [_jsx("div", __assign({ className: "flex justify-center items-center border rounded-bl-lg" }, { children: "Name" })), _jsx("div", __assign({ className: "flex justify-center items-center border" }, { children: "Type" })), _jsx("div", __assign({ className: "flex justify-center items-center border" }, { children: "Calories" })), _jsx("div", __assign({ className: "flex justify-center items-center border" }, { children: "Protein" })), _jsx("div", __assign({ className: "flex justify-center items-center border" }, { children: "Carbs" })), _jsx("div", __assign({ className: "flex justify-center items-center border rounded-br-lg" }, { children: "Fat" }))] }))] })), foodItems] })));
}
