import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
/*------------------------------------- Functions --------------------------------------*/
export default function MealPlanForm(_a) {
    var id = _a.id, name = _a.name, foods = _a.foods, totalCalories = _a.totalCalories, totalProtein = _a.totalProtein, totalCarbohydrates = _a.totalCarbohydrates, totalFat = _a.totalFat, deleteMealPlan = _a.deleteMealPlan, addFoodToMealPlan = _a.addFoodToMealPlan, foodId = _a.foodId;
    // get the current URL path and set a flag to determine the location for element rendering
    var location = useLocation();
    var isMealPlanPage = location.pathname === "/mealplans" ? true : false;
    // render the Meal Plan Form
    return (_jsxs("div", { className: "bg-yellowgreen m-1 w-5/6 rounded-lg shadow-sm", children: [_jsxs("div", { className: "grid grid-cols-5 font-semibold text-md", children: [_jsx("div", { children: name }), _jsxs("div", { children: [totalCalories, "kcal"] }), _jsxs("div", { children: [totalProtein, "g"] }), _jsxs("div", { children: [totalCarbohydrates, "g"] }), _jsxs("div", { children: [totalFat, "g"] })] }), _jsxs("div", { className: "rounded-b-lg grid grid-cols-3 bg-eggplant", children: [_jsx(Link, { className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", to: { pathname: "/mealplans/".concat(id) }, children: "Details" }), !isMealPlanPage ? (_jsx("button", { className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", onClick: function () { return addFoodToMealPlan(id, foodId); }, children: "Add" })) : (_jsx(_Fragment, {})), isMealPlanPage ? (_jsxs(_Fragment, { children: [_jsx(Link, { to: {
                                    pathname: "/mealplans/edit/".concat(id, "/").concat(name, "/").concat(totalCalories, "/").concat(totalProtein, "/").concat(totalCarbohydrates, "/").concat(totalFat),
                                }, className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", children: "Edit" }), _jsx("button", { className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", onClick: function () { return deleteMealPlan(id); }, children: "Delete" })] })) : (_jsx(_Fragment, {}))] })] }));
}
