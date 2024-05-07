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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// Internal
import "./App.css";
import AddExerciseToWorkout from "../Workouts/AddExerciseToWorkoutPage/AddExerciseToWorkoutPage";
import AddFoodToMealPlan from "../MealPlans/AddFoodToMealPlanPage/AddFoodToMealPlan";
import AuthPage from "../AuthPage/AuthPage";
import BodyStatsPage from "../BodyStatsPage/BodyStatsPage";
import ExercisesPage from "../Exercises/ExercisesPage/ExercisesPage";
import EditExercisePage from "../Exercises/EditExercisePage/EditExercisePage";
import EditFoodPage from "../Foods/EditFoodPage/EditFoodPage";
import EditMealPlanPage from "../MealPlans/EditMealPlanPage/EditMealPlanPage";
import EditWorkoutPage from "../Workouts/EditWorkoutPage/EditWorkoutPage";
import FoodsPage from "../Foods/FoodsPage/FoodsPage";
import HomePage from "../HomePage/HomePage";
import MealPlanDetailsPage from "../MealPlans/MealPlanDetailsPage/MealPlanDetailsPage";
import MealPlansPage from "../MealPlans/MealPlansPage/MealPlansPage";
import NavBar from "../../components/NavBar/NavBar";
import WorkoutDetailsPage from "../Workouts/WorkoutDetailsPage/WorkoutDetailsPage";
import WorkoutsPage from "../Workouts/WorkoutsPage/WorkoutsPage";
import * as exercisesService from "../../utilities/exercises-service";
import * as foodsService from "../../utilities/foods-service";
import * as mealPlansService from "../../utilities/mealPlans-services";
import * as workoutsService from "../../utilities/workouts-service";
import { getUser } from "../../utilities/users-service";
/*------------------------------------- Functions --------------------------------------*/
export default function App() {
    // app state variables
    var _a = useState(getUser()), user = _a[0], setUser = _a[1]; // user state
    var _b = useState([]), exercises = _b[0], setExercises = _b[1]; // exercise state
    var _c = useState([]), foods = _c[0], setFoods = _c[1]; // foods state
    var _d = useState([]), workouts = _d[0], setWorkouts = _d[1]; // workouts state
    var _e = useState([]), mealPlans = _e[0], setMealPlans = _e[1]; // mealplans state
    // save the location and navigation
    var location = useLocation();
    var navigate = useNavigate();
    // edit an exercise
    function editExercise(exercise) {
        return __awaiter(this, void 0, void 0, function () {
            var newExercisesSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exercisesService.editExercise(exercise)];
                    case 1:
                        newExercisesSet = _a.sent();
                        // save the editted exercise in the state
                        setExercises(newExercisesSet);
                        return [2 /*return*/];
                }
            });
        });
    }
    // edit a food
    function editFood(food) {
        return __awaiter(this, void 0, void 0, function () {
            var newFoodSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, foodsService.editFood(food)];
                    case 1:
                        newFoodSet = _a.sent();
                        // save the editted food in the state
                        setFoods(newFoodSet);
                        return [2 /*return*/];
                }
            });
        });
    }
    // edit a workout
    function editWorkout(workout) {
        return __awaiter(this, void 0, void 0, function () {
            var newWorkoutSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, workoutsService.editWorkout(workout)];
                    case 1:
                        newWorkoutSet = _a.sent();
                        // save the editted wokrout in the state
                        setWorkouts(newWorkoutSet);
                        return [2 /*return*/];
                }
            });
        });
    }
    // edit a meal plan
    function editMealPlan(mealPlan) {
        return __awaiter(this, void 0, void 0, function () {
            var newMealPlanSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mealPlansService.editMealPlan(mealPlan)];
                    case 1:
                        newMealPlanSet = _a.sent();
                        // save the editted meal plan in the state
                        setMealPlans(newMealPlanSet);
                        return [2 /*return*/];
                }
            });
        });
    }
    // delete a workout
    function deleteWorkout(id) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedWorkouts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, workoutsService.deleteWorkout(id)];
                    case 1:
                        updatedWorkouts = _a.sent();
                        // set the state to the rest of the workouts
                        setWorkouts(updatedWorkouts);
                        return [2 /*return*/];
                }
            });
        });
    }
    // delete a meal plan
    function deleteMealPlan(id) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedMealPlans;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mealPlansService.deleteMealPlan(id)];
                    case 1:
                        updatedMealPlans = _a.sent();
                        // set the state to the rest of the meal plans
                        setMealPlans(updatedMealPlans);
                        return [2 /*return*/];
                }
            });
        });
    }
    // add an exercise to a workout
    function addExerciseToWorkout(id, exerciseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // add the exercise to a workout in the database
                    return [4 /*yield*/, workoutsService.addExerciseToWorkout(id, exerciseId)];
                    case 1:
                        // add the exercise to a workout in the database
                        _a.sent();
                        // navigate to the exercises page
                        navigate("/exercises");
                        return [2 /*return*/];
                }
            });
        });
    }
    // add a food to a meal plan
    function addFoodToMealPlan(id, foodId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // add the food to a meal plan in the database
                    return [4 /*yield*/, mealPlansService.addFoodToMealPlan(id, foodId)];
                    case 1:
                        // add the food to a meal plan in the database
                        _a.sent();
                        // navigate to the mealplans page
                        navigate("/foods");
                        return [2 /*return*/];
                }
            });
        });
    }
    // save the current URL to a flag for conditional rendering
    var isActive = location.pathname === "/";
    // render the app components
    return (_jsx("main", __assign({ className: "App" }, { children: user && isActive ? (_jsx(_Fragment, { children: _jsxs("div", __assign({ className: "flex justify-around items-center mt-20" }, { children: [_jsx(HomePage, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(NavBar, { setUser: setUser, isActive: isActive }) }), _jsx(Route, { path: "/exercises", element: _jsx(ExercisesPage, { exercises: exercises, setExercises: setExercises, user: user, addExerciseToWorkout: addExerciseToWorkout }) }), _jsx(Route, { path: "/exercises/edit/:id/:name/:type/:muscle/:grip/:width", element: _jsx(EditExercisePage, { editExercise: editExercise }) }), _jsx(Route, { path: "/workouts", element: _jsx(WorkoutsPage, { workouts: workouts, setWorkouts: setWorkouts, user: user, editWorkout: editWorkout, addExerciseToWorkout: addExerciseToWorkout, deleteWorkout: deleteWorkout }) }), _jsx(Route, { path: "/workouts/edit/:id/:name/", element: _jsx(EditWorkoutPage, { editWorkout: editWorkout }) }), _jsx(Route, { path: "/workouts/display/:id/", element: _jsx(AddExerciseToWorkout, { workouts: workouts, deleteWorkout: deleteWorkout, addExerciseToWorkout: addExerciseToWorkout }) }), _jsx(Route, { path: "/workouts/:id", element: _jsx(WorkoutDetailsPage, { exercises: exercises, workouts: workouts, user: user }) }), _jsx(Route, { path: "/foods", element: _jsx(FoodsPage, { foods: foods, setFoods: setFoods, user: user, addFoodToMealPlan: addFoodToMealPlan }) }), _jsx(Route, { path: "/foods/edit/:id/:name/:type/:calories/:protein/:carbohydrates/:fat", element: _jsx(EditFoodPage, { editFood: editFood }) }), _jsx(Route, { path: "/mealplans", element: _jsx(MealPlansPage, { mealPlans: mealPlans, setMealPlans: setMealPlans, user: user, editMealPlan: editMealPlan, addFoodToMealPlan: addFoodToMealPlan, deleteMealPlan: deleteMealPlan }) }), _jsx(Route, { path: "/mealplans/edit/:id/:name/:totalCalories/:totalProtein/:totalCarbohydrates/:totalFat", element: _jsx(EditMealPlanPage, { editMealPlan: editMealPlan }) }), _jsx(Route, { path: "/mealplans/display/:id/", element: _jsx(AddFoodToMealPlan, { mealPlans: mealPlans, deleteMealPlan: deleteMealPlan, addFoodToMealPlan: addFoodToMealPlan }) }), _jsx(Route, { path: "/mealplans/:id", element: _jsx(MealPlanDetailsPage, { foods: foods, mealPlans: mealPlans, user: user }) }), _jsx(Route, { path: "/bodystats", element: _jsx(BodyStatsPage, {}) })] })] })) })) : user && !isActive ? (_jsxs(_Fragment, { children: [_jsx(NavBar, { setUser: setUser, isActive: isActive }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/exercises", element: _jsx(ExercisesPage, { exercises: exercises, setExercises: setExercises, user: user, addExerciseToWorkout: addExerciseToWorkout }) }), _jsx(Route, { path: "/exercises/edit/:id/:name/:type/:muscle/:grip/:width", element: _jsx(EditExercisePage, { editExercise: editExercise }) }), _jsx(Route, { path: "/workouts", element: _jsx(WorkoutsPage, { workouts: workouts, setWorkouts: setWorkouts, user: user, editWorkout: editWorkout, addExerciseToWorkout: addExerciseToWorkout, deleteWorkout: deleteWorkout }) }), _jsx(Route, { path: "/workouts/edit/:id/:name/", element: _jsx(EditWorkoutPage, { editWorkout: editWorkout }) }), _jsx(Route, { path: "/workouts/display/:id/", element: _jsx(AddExerciseToWorkout, { workouts: workouts, deleteWorkout: deleteWorkout, addExerciseToWorkout: addExerciseToWorkout }) }), _jsx(Route, { path: "/workouts/:id", element: _jsx(WorkoutDetailsPage, { exercises: exercises, workouts: workouts, user: user }) }), _jsx(Route, { path: "/foods", element: _jsx(FoodsPage, { foods: foods, setFoods: setFoods, user: user, addFoodToMealPlan: addFoodToMealPlan }) }), _jsx(Route, { path: "/foods/edit/:id/:name/:type/:calories/:protein/:carbohydrates/:fat", element: _jsx(EditFoodPage, { editFood: editFood }) }), _jsx(Route, { path: "/mealplans", element: _jsx(MealPlansPage, { mealPlans: mealPlans, setMealPlans: setMealPlans, user: user, editMealPlan: editMealPlan, addFoodToMealPlan: addFoodToMealPlan, deleteMealPlan: deleteMealPlan }) }), _jsx(Route, { path: "/mealplans/edit/:id/:name/:totalCalories/:totalProtein/:totalCarbohydrates/:totalFat", element: _jsx(EditMealPlanPage, { editMealPlan: editMealPlan }) }), _jsx(Route, { path: "/mealplans/display/:id/", element: _jsx(AddFoodToMealPlan, { mealPlans: mealPlans, deleteMealPlan: deleteMealPlan, addFoodToMealPlan: addFoodToMealPlan }) }), _jsx(Route, { path: "/mealplans/:id", element: _jsx(MealPlanDetailsPage, { foods: foods, mealPlans: mealPlans, user: user }) }), _jsx(Route, { path: "/bodystats", element: _jsx(BodyStatsPage, {}) })] })] })) : (_jsx(AuthPage, { setUser: setUser })) })));
}
