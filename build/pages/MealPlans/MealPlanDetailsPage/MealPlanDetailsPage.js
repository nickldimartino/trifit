var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "react-router-dom";
// Internal
import FoodForm from "../../../components/Foods/FoodForm/FoodForm";
import * as mealPlansService from "../../../utilities/mealPlans-services";
/*------------------------------------- Functions --------------------------------------*/
export default function MealPlanDetailsPage(_a) {
    var foods = _a.foods, mealPlans = _a.mealPlans, user = _a.user;
    // save the id in the URL path
    var id = useParams().id;
    // variables to store the current meal plan and its foods
    var thisMealPlan;
    var thisMealPlanFoods = [];
    // save the navigation
    var navigate = useNavigate();
    // find the current meal plan using the URL path id
    for (var w = 0; w < mealPlans.length; w++) {
        if (mealPlans[w]._id === id) {
            thisMealPlan = mealPlans[w];
            break;
        }
    }
    // get the foods for the current meal plan
    thisMealPlan.foods.forEach(function (e) {
        foods.forEach(function (w) {
            if (e === w._id) {
                thisMealPlanFoods.push(w);
            }
        });
    });
    // remove a food from a meal plam
    function removeFoodFromMealPlan(foodId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // remove the food from the meal plan
                    return [4 /*yield*/, mealPlansService.removeFoodFromMealPlan(id, foodId)];
                    case 1:
                        // remove the food from the meal plan
                        _a.sent();
                        // naviaget to the mealplans page
                        navigate("/mealplans");
                        return [2 /*return*/];
                }
            });
        });
    }
    // map the foods in the meal plan to their own Food Form
    var foodItems = thisMealPlanFoods.map(function (f, idx) { return (_jsx(FoodForm, { id: f._id, name: f.name, type: f.type, calories: f.calories, protein: f.protein, carbohydrates: f.carbohydrates, fat: f.fat, deleteFood: removeFoodFromMealPlan, addFoodToMealPlan: function () { }, user: user }, idx)); });
    // renders the Meal Plan Details Page
    return (_jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsxs("h1", { className: "font-semibold text-4xl mt-7 mb-5 ", children: [thisMealPlan.name, " Meal Plan Details"] }), _jsxs("div", { className: "flex justify-center items-center flex-col w-1/5 min-h-3/4 h-full bg-yellowgreen shadow-lg rounded-lg border-2 border-black mb-6", children: [_jsxs("div", { children: [_jsx("span", { className: "font-semibold", children: "Total Calories:" }), " ", thisMealPlan.totalCalories] }), _jsxs("div", { children: [_jsx("span", { className: "font-semibold", children: "Total Protein:" }), " ", thisMealPlan.totalProtein] }), _jsxs("div", { children: [_jsx("span", { className: "font-semibold", children: "Total Carbohydrates:" }), " ", thisMealPlan.totalCarbohydrates] }), _jsxs("div", { children: [_jsx("span", { className: "font-semibold", children: "Total Fat:" }), " ", thisMealPlan.totalFat] })] }), foodItems] }));
}
