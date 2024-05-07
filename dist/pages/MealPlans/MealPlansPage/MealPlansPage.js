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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useEffect, useState } from "react";
// Internal
import MealPlanList from "../../../components/MealPlans/MealPlansList/MealPlansList";
import NewMealPlanForm from "../../../components/MealPlans/NewMealPlanForm/NewMealPlanForm";
import * as mealPlansService from "../../../utilities/mealPlans-services";
/*------------------------------------- Functions --------------------------------------*/
export default function MealPlanPage(_a) {
    var mealPlans = _a.mealPlans, setMealPlans = _a.setMealPlans, editMealPlan = _a.editMealPlan, user = _a.user, addFoodToMealPlan = _a.addFoodToMealPlan, deleteMealPlan = _a.deleteMealPlan;
    // new meal plan state
    var _b = useState([]), newMealPlan = _b[0], setNewMealPlan = _b[1];
    // get all the meal plans
    function getMealPlans() {
        return __awaiter(this, void 0, void 0, function () {
            var newMealPlanSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mealPlansService.getMealPlansData()];
                    case 1:
                        newMealPlanSet = _a.sent();
                        // set the meal plans state to the retrieved meal plans
                        setMealPlans(newMealPlanSet);
                        return [2 /*return*/];
                }
            });
        });
    }
    // add a new meal plan
    function addNewMealPlan(mealPlan) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // add the meal plan
                    return [4 /*yield*/, mealPlansService.createMealPlanData(mealPlan)];
                    case 1:
                        // add the meal plan
                        _a.sent();
                        // add the meal plan to the meal plan state
                        setNewMealPlan(__spreadArray(__spreadArray([], newMealPlan, true), [mealPlan], false));
                        return [2 /*return*/];
                }
            });
        });
    }
    // render the page once when the state chanegs
    useEffect(function () {
        getMealPlans();
    }, // eslint-disable-next-line
    [newMealPlan]);
    // render the New Meal Plan Form and Meal Plan list
    return (_jsxs("div", __assign({ className: "flex justify-around mt-10" }, { children: [_jsx("div", __assign({ className: "w-3/4" }, { children: _jsx(MealPlanList, { mealPlans: mealPlans, deleteMealPlan: deleteMealPlan, addFoodToMealPlan: addFoodToMealPlan }) })), _jsx("div", __assign({ className: "flex justify-center mb-5 w-3/4" }, { children: _jsx(NewMealPlanForm, { addNewMealPlan: addNewMealPlan }) }))] })));
}
