import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
/*------------------------------------- Functions --------------------------------------*/
export default function FoodForm(_a) {
    var id = _a.id, name = _a.name, type = _a.type, calories = _a.calories, protein = _a.protein, carbohydrates = _a.carbohydrates, fat = _a.fat, deleteFood = _a.deleteFood, addFoodToMealPlan = _a.addFoodToMealPlan, user = _a.user;
    // save the URL path
    var location = useLocation();
    var isFoodsPage = location.pathname === "/foods" ? true : false;
    // renders the Food Form
    return (_jsxs("div", { className: "bg-yellowgreen m-1 w-5/6 rounded-lg shadow-sm", children: [_jsxs("div", { className: "grid grid-cols-6 font-semibold text-md", children: [_jsx("div", { children: name }), _jsx("div", { children: type }), _jsxs("div", { children: [calories, "kcal"] }), _jsxs("div", { children: [protein, "g"] }), _jsxs("div", { children: [carbohydrates, "g"] }), _jsxs("div", { children: [fat, "g"] })] }), _jsx("div", { className: "grid grid-cols-3 rounded-b-lg bg-eggplant", children: isFoodsPage ? (_jsxs(_Fragment, { children: [_jsx(Link, { className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", to: { pathname: "/mealplans/display/".concat(id) }, children: "Add to Meal Plan" }), " ", user.isAdmin === "true" ? (_jsxs(_Fragment, { children: [_jsx(Link, { to: {
                                        pathname: "/foods/edit/".concat(id, "/").concat(name, "/").concat(type, "/").concat(calories, "/").concat(protein, "/").concat(carbohydrates, "/").concat(fat),
                                    }, className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", children: "Edit" }), _jsx("button", { className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", onClick: function () { return deleteFood(id); }, children: "Delete" })] })) : (_jsx(_Fragment, {}))] })) : user.isAdmin === "true" && !isFoodsPage ? (_jsx(_Fragment, { children: _jsx("button", { className: "m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold", onClick: function () { return deleteFood(id); }, children: "Remove" }) })) : (_jsx(_Fragment, {})) })] }));
}
