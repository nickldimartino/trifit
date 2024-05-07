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
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useState, useEffect } from "react";
// Internal
import * as personalTrainerService from "../../utilities/personalTrainer-service";
/*------------------------------------- Functions --------------------------------------*/
export default function PersonalTrainer() {
    // new question state
    var _a = useState(""), newQuestion = _a[0], setNewQuestion = _a[1];
    // new answer state
    var _b = useState(""), newAnswer = _b[0], setNewAnswer = _b[1];
    // getter function for the newAnswer
    function getAnswer() {
        return newAnswer;
    }
    // send and receive a request to the server
    function askQuestion(question) {
        return __awaiter(this, void 0, void 0, function () {
            var answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, personalTrainerService.askQuestion(question)];
                    case 1:
                        answer = _a.sent();
                        // save the answer in the state
                        setNewAnswer(answer);
                        return [2 /*return*/];
                }
            });
        });
    }
    // submits the ask question form
    function handleAskQuestion(evt) {
        // prevent the page from rendering
        evt.preventDefault();
        // send the question to the api call
        askQuestion(newQuestion);
        // reset the question value
        setNewQuestion("");
    }
    // handles the user inputs form while typing
    function handleOnChange(evt) {
        // adds keystrokes to the input box value
        var newQuestionData = evt.target.value;
        // sets the new question
        setNewQuestion(newQuestionData);
    }
    // renders the page when a new answer is received
    useEffect(function () {
        getAnswer();
    }, // eslint-disable-next-line
    []);
    // render the add body stat form
    return (_jsx("div", __assign({ className: "flex justify-center items-center w-full h-5/6 mt-7" }, { children: _jsxs("div", __assign({ className: "flex justify-center items-center flex-col w-1/2 bg-citrine shadow-lg rounded-lg border-2 border-black mb-5" }, { children: [_jsxs("h1", __assign({ className: "text-2xl block text-center text-black font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-user" }), " Ask the Personal Trainer"] })), _jsx("hr", { className: "mt-1" }), _jsxs("form", __assign({ className: "p-3", onSubmit: handleAskQuestion }, { children: [_jsxs("label", __assign({ className: "text-left block text-base mt-2 text-black font-semibold" }, { children: ["Ask a question for fitness or nutrition advice", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600", name: "question", type: "text", onChange: handleOnChange, value: newQuestion, required: true, autoComplete: "off" })] })), _jsx("div", __assign({ className: "mt-5" }, { children: _jsxs("button", __assign({ className: "mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-frenchblue font-semibold" }, { children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Add"] })) }))] })), newAnswer !== "" ? (_jsx("div", __assign({ className: "border border-black bg-white w-11/12 p-2 mb-2" }, { children: newAnswer }))) : (_jsx(_Fragment, {}))] })) })));
}
