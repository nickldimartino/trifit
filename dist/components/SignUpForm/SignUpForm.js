var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Component } from "react";
// Internal
import { signUp } from "../../utilities/users-service";
/*------------------------------------- Functions --------------------------------------*/
var SignUpForm = /** @class */ (function (_super) {
    __extends(SignUpForm, _super);
    function SignUpForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // state variables
        _this.state = {
            name: "",
            email: "",
            password: "",
            confirm: "",
            isAdmin: "false",
            workouts: [],
            mealPlans: [],
            bodyStats: [],
            error: "",
        };
        // handle the form submission for the Signup Form
        _this.handleSubmit = function (evt) { return __awaiter(_this, void 0, void 0, function () {
            var _a, name_1, email, password, isAdmin, workouts, mealPlans, bodyStats, formData, user, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // Prevent form from being submitted to the server
                        evt.preventDefault();
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _a = this.state, name_1 = _a.name, email = _a.email, password = _a.password, isAdmin = _a.isAdmin, workouts = _a.workouts, mealPlans = _a.mealPlans, bodyStats = _a.bodyStats;
                        formData = {
                            name: name_1,
                            email: email,
                            password: password,
                            isAdmin: isAdmin,
                            workouts: workouts,
                            mealPlans: mealPlans,
                            bodyStats: bodyStats,
                        };
                        return [4 /*yield*/, signUp(formData)];
                    case 2:
                        user = _c.sent();
                        this.props.setUser(user);
                        return [3 /*break*/, 4];
                    case 3:
                        _b = _c.sent();
                        // An error occurred
                        this.setState({ error: "Sign Up Failed - Try Again" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // handle the key strokes for the user input
        _this.handleChange = function (evt) {
            var _a;
            // set the state variables to the usr input
            _this.setState(__assign(__assign({}, _this.state), (_a = {}, _a[evt.target.name] = evt.target.value, _a.error = "", _a)));
        };
        return _this;
    }
    // render the Sign Up Form
    SignUpForm.prototype.render = function () {
        // set flag to determine if password was equal to confirm password
        var disable = this.state.password !== this.state.confirm;
        return (_jsxs("div", __assign({ className: "flex justify-center items-center flex-col w-3/4 h-3/4" }, { children: [_jsx("div", __assign({ className: "flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full shadow-lg bg-frenchblue rounded-lg border-2 border-black" }, { children: _jsxs("form", __assign({ className: "p-0 w-3/4", autoComplete: "off", onSubmit: this.handleSubmit }, { children: [_jsxs("h1", __assign({ className: "text-2xl block text-center font-semibold text-white" }, { children: [_jsx("i", { className: "fa-solid fa-user" }), " Signup"] })), _jsx("hr", { className: "mt-1" }), _jsx("div", { children: _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-white" }, { children: ["Name", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 text-black", type: "text", name: "name", value: this.state.name, onChange: this.handleChange, required: true, placeholder: "Enter your name...", autoComplete: "off" })] })) }), _jsx("div", __assign({ className: "mt-3" }, { children: _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-white" }, { children: ["Email", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 text-black", type: "email", name: "email", value: this.state.email, onChange: this.handleChange, required: true, placeholder: "Enter your email...", autoComplete: "off" })] })) })), _jsx("div", __assign({ className: "mt-3" }, { children: _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-white" }, { children: ["Password", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 text-black", type: "password", name: "password", value: this.state.password, onChange: this.handleChange, required: true, placeholder: "Enter a password...", autoComplete: "off" })] })) })), _jsx("div", { children: _jsxs("label", __assign({ className: "text-left block text-base mt-2 text-white" }, { children: ["Confirm", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 text-black", type: "password", name: "confirm", value: this.state.confirm, onChange: this.handleChange, required: true, placeholder: "Confirm your password...", autoComplete: "off" })] })) }), _jsx("div", __assign({ className: "mt-5" }, { children: _jsxs("button", __assign({ className: "mb-2 border-2 border-black bg-citrine w-3/4 rounded-md hover:bg-orange-400 font-semibold", type: "submit", disabled: disable }, { children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Login"] })) }))] })) })), _jsxs("p", __assign({ className: "text-red-500 mt-1 mb-1" }, { children: ["\u00A0", this.state.error] }))] })));
    };
    return SignUpForm;
}(Component));
export default SignUpForm;
