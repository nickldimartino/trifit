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
import ExerciseForm from "../../../components/Exercises/ExerciseForm/ExerciseForm";
import * as workoutsService from "../../../utilities/workouts-service";
/*------------------------------------- Functions --------------------------------------*/
export default function WorkoutDetailsPage(_a) {
    var exercises = _a.exercises, workouts = _a.workouts, user = _a.user;
    // save the id in the URL path
    var id = useParams().id;
    // variables for workouts and exercises
    var thisWorkout;
    var thisWorkoutsExercises = [];
    // save the navigation
    var navigate = useNavigate();
    // find the workout that is equal to the URL path
    for (var w = 0; w < workouts.length; w++) {
        if (workouts[w]._id === id) {
            thisWorkout = workouts[w];
            break;
        }
    }
    // get the exercises that match the current workout
    thisWorkout.exercises.forEach(function (e) {
        exercises.forEach(function (w) {
            if (e === w._id) {
                thisWorkoutsExercises.push(w);
            }
        });
    });
    // remove the exercise from the workout
    function removeExerciseFromWorkout(exerciseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // remove the exercise
                    return [4 /*yield*/, workoutsService.removeExerciseFromWorkout(id, exerciseId)];
                    case 1:
                        // remove the exercise
                        _a.sent();
                        // navigate to the workouts page
                        navigate("/workouts");
                        return [2 /*return*/];
                }
            });
        });
    }
    // map this workouts exercises to their own Exercise Form
    var exercisesItems = thisWorkoutsExercises.map(function (e, idx) { return (_jsx(ExerciseForm, { id: e._id, name: e.name, type: e.type, muscle: e.muscle, grip: e.grip, width: e.width, addExerciseToWorkout: function () { }, deleteExercise: removeExerciseFromWorkout, user: user }, idx)); });
    // render the Workout Details Page
    return (_jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsxs("h1", { className: "font-semibold text-4xl mt-7 mb-5 ", children: [thisWorkout.name, " Workout Details"] }), _jsx("div", { className: "w-9/12 flex justify-center", children: exercisesItems })] }));
}
