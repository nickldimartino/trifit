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
import NewWorkoutForm from "../../../components/Workouts/NewWorkoutForm/NewWorkoutForm";
import WorkoutsList from "../../../components/Workouts/WorkoutsList/WorkoutsList";
import * as workoutsService from "../../../utilities/workouts-service";
/*------------------------------------- Functions --------------------------------------*/
export default function WorkoutsPage(_a) {
    var workouts = _a.workouts, setWorkouts = _a.setWorkouts, editWorkout = _a.editWorkout, user = _a.user, addExerciseToWorkout = _a.addExerciseToWorkout, deleteWorkout = _a.deleteWorkout;
    // new workout state
    var _b = useState([]), newWorkout = _b[0], setNewWorkout = _b[1];
    // get the workouts from the database
    function getWorkouts() {
        return __awaiter(this, void 0, void 0, function () {
            var newWorkoutSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, workoutsService.getWorkoutsData()];
                    case 1:
                        newWorkoutSet = _a.sent();
                        // save the workouts to the workouts state
                        setWorkouts(newWorkoutSet);
                        return [2 /*return*/];
                }
            });
        });
    }
    // add a new workout
    function addNewWorkout(workout) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // create the workout in the database
                    return [4 /*yield*/, workoutsService.createWorkoutData(workout)];
                    case 1:
                        // create the workout in the database
                        _a.sent();
                        // add the new workout to the workouts state
                        setNewWorkout(__spreadArray(__spreadArray([], newWorkout, true), [workout], false));
                        return [2 /*return*/];
                }
            });
        });
    }
    // render the page once on a state change
    useEffect(function () {
        getWorkouts();
    }, // eslint-disable-next-line
    [newWorkout]);
    // render the New Workout Form and Workout List
    return (_jsxs("div", __assign({ className: "flex justify-around mt-10" }, { children: [_jsx("div", __assign({ className: "w-3/4" }, { children: _jsx(WorkoutsList, { workouts: workouts, deleteWorkout: deleteWorkout, addExerciseToWorkout: addExerciseToWorkout }) })), _jsx("div", __assign({ className: "flex justify-center mb-5 w-3/4" }, { children: _jsx(NewWorkoutForm, { addNewWorkout: addNewWorkout }) }))] })));
}
