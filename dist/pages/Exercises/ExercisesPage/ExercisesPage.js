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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
// Internal
import ExercisesList from "../../../components/Exercises/ExercisesList/ExercisesList";
import NewExerciseForm from "../../../components/Exercises/NewExerciseForm/NewExerciseForm";
import * as exercisesService from "../../../utilities/exercises-service";
/*------------------------------------- Functions --------------------------------------*/
export default function ExercisesPage(_a) {
    var exercises = _a.exercises, setExercises = _a.setExercises, user = _a.user, addExerciseToWorkout = _a.addExerciseToWorkout;
    // new exercise state
    var _b = useState([]), newExercise = _b[0], setNewExercise = _b[1];
    // get the exercises
    function getExercises() {
        return __awaiter(this, void 0, void 0, function () {
            var newExerciseSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exercisesService.getExerciseData()];
                    case 1:
                        newExerciseSet = _a.sent();
                        // set the state to the retrieved exercises
                        setExercises(newExerciseSet);
                        return [2 /*return*/];
                }
            });
        });
    }
    // add a new exercise
    function addNewExercise(exercise) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // create the exercise in the database
                    return [4 /*yield*/, exercisesService.createExerciseData(exercise)];
                    case 1:
                        // create the exercise in the database
                        _a.sent();
                        // set the created exercise to the state
                        setNewExercise(__spreadArray(__spreadArray([], newExercise, true), [exercise], false));
                        return [2 /*return*/];
                }
            });
        });
    }
    // delete an exercise
    function deleteExercise(id) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedExercises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exercisesService.deleteExercise(id)];
                    case 1:
                        updatedExercises = _a.sent();
                        // set the exercises state to the retrieved exercises
                        setExercises(updatedExercises);
                        return [2 /*return*/];
                }
            });
        });
    }
    // render the page once on state change
    useEffect(function () {
        getExercises();
    }, // eslint-disable-next-line
    [newExercise]);
    // render the Exercises Page
    return (_jsx(_Fragment, { children: _jsxs("div", __assign({ className: "flex justify-around mt-10" }, { children: [_jsx("div", __assign({ className: "w-3/4" }, { children: _jsx(ExercisesList, { exercises: exercises, addExerciseToWorkout: addExerciseToWorkout, deleteExercise: deleteExercise, user: user }) })), user.isAdmin === "true" ? (_jsx("div", __assign({ className: "flex justify-center mb-5 w-3/4" }, { children: _jsx(NewExerciseForm, { addNewExercise: addNewExercise }) }))) : (_jsx(_Fragment, {}))] })) }));
}
