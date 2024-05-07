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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, // x-axis
LinearScale, // y-axis
PointElement, Legend, Tooltip, Title, } from "chart.js";
// Internal
import NewBodyStatForm from "../../components/BodyStats/NewBodyStatForm";
import PersonalTrainer from "../../components/PersonalTrainer/PersonalTrainer";
import * as bodyStatsService from "../../utilities/bodyStats-service";
// Register the ChartJS elements
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Title);
/*------------------------------------- Functions --------------------------------------*/
export default function BodyStatsPage() {
    // body stats state
    var _a = useState([]), bodyStats = _a[0], setBodyStats = _a[1];
    // new body stats state
    var _b = useState([]), newBodyStats = _b[0], setNewBodyStats = _b[1];
    // object to save the scatterplot data
    var scatter = [];
    // map through the body stats and push each one as x,y coords to the scatterplot data
    bodyStats.forEach(function (b) {
        var bodystat = {
            x: b.calories,
            y: b.weight,
        };
        scatter.push(bodystat);
    });
    // data for the chart
    var data = {
        datasets: [
            {
                labels: "Weight vs Calories",
                data: scatter,
                backgroundColor: "#E4CC37",
                borderColor: "black",
                pointBorderColor: "black",
            },
        ],
    };
    // options for the chart
    var options = {
        scales: {
            x: {
                min: 0,
                max: 4000,
                scaleLabel: {
                    display: true,
                    labelString: "Calories (kcal)",
                },
                title: {
                    display: true,
                    text: "Calories (kcal)",
                },
            },
            y: {
                min: 100,
                max: 250,
                scaleLabel: {
                    display: true,
                    labelString: "Weight (lbs)",
                },
                title: {
                    display: true,
                    text: "Weight (lbs)",
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                position: "top",
                text: "Calories (kcal) vs Weight (lbs)",
            },
        },
    };
    // get the body stats
    function getBodyStats() {
        return __awaiter(this, void 0, void 0, function () {
            var newBodyStatSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bodyStatsService.getBodyStatData()];
                    case 1:
                        newBodyStatSet = _a.sent();
                        // set the body stats state to the retrieved body stats
                        setBodyStats(newBodyStatSet);
                        return [2 /*return*/];
                }
            });
        });
    }
    // add a body stat
    function addBodyStat(bodyStat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // add the body stat to the database
                    return [4 /*yield*/, bodyStatsService.createBodyStatData(bodyStat)];
                    case 1:
                        // add the body stat to the database
                        _a.sent();
                        // set the body stats state with the new body stat
                        setNewBodyStats(__spreadArray(__spreadArray([], newBodyStats, true), [bodyStat], false));
                        return [2 /*return*/];
                }
            });
        });
    }
    // render the page once on a state change
    useEffect(function () {
        getBodyStats();
    }, [newBodyStats]);
    // render the Body Stats Page
    return (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: "grid grid-cols-2 mt-10" }, { children: [_jsx(NewBodyStatForm, { addBodyStat: addBodyStat }), _jsx("div", __assign({ style: { width: "600px", height: "300px", backgroundColor: "white" }, className: "mr-10" }, { children: _jsx(Scatter, { data: data, options: options, className: " border-2 border-black rounded-sm shadow-lg" }) }))] })), _jsx(PersonalTrainer, {})] }));
}
