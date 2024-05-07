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
import { useState } from "react";
// Internal
import * as usersService from "../../utilities/users-service";
/*------------------------------------- Functions --------------------------------------*/
export default function LoginForm(_a) {
    var setUser = _a.setUser;
    // credentials state
    var _b = useState({
        email: "",
        password: "",
    }), credentials = _b[0], setCredentials = _b[1];
    // error message state
    var _c = useState(""), error = _c[0], setError = _c[1];
    // handles the form submission for the Login Form
    function handleSubmit(evt) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Prevent form from being submitted to the server
                        evt.preventDefault();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, usersService.login(credentials)];
                    case 2:
                        user = _b.sent();
                        setUser(user);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        setError("Log In Failed - Try Again");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    // handles the keystrokes for the user input
    function handleChange(evt) {
        var _a;
        setCredentials(__assign(__assign({}, credentials), (_a = {}, _a[evt.target.name] = evt.target.value, _a)));
        setError("");
    }
    // render the Login Form
    return (_jsxs("div", { className: "flex justify-center items-center flex-col w-3/4 h-1/2", children: [_jsx("div", { className: "flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full shadow-lg bg-frenchblue rounded-lg border-2 border-black", children: _jsxs("form", { className: "p-0 w-3/4", autoComplete: "off", onSubmit: handleSubmit, children: [_jsxs("h1", { className: "text-2xl block text-center text-white font-semibold", children: [_jsx("i", { className: "fa-solid fa-user" }), " Login"] }), _jsx("hr", { className: "mt-1" }), _jsx("div", { children: _jsxs("label", { className: "text-left block text-base mt-2 text-white font-semibold", children: ["Email", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none text-black focus:ring-0 focus:border-gray-600", type: "text", name: "email", value: credentials.email, onChange: handleChange, required: true, placeholder: "Enter email...", autoComplete: "off" })] }) }), _jsx("div", { className: "mt-3", children: _jsxs("label", { className: "text-left block text-base mt-2 text-white font-semibold", children: ["Password", _jsx("input", { className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 text-black", type: "password", name: "password", value: credentials.password, onChange: handleChange, required: true, placeholder: "Enter password...", autoComplete: "off" })] }) }), _jsx("div", { className: "mt-5", children: _jsxs("button", { className: "mb-2 border-2 border-black bg-citrine text-black w-3/4 rounded-md hover:bg-orange-400 font-semibold", children: [_jsx("i", { className: "fa-solid fa-right-to-bracket" }), "Login"] }) })] }) }), _jsxs("p", { className: "text-red-500 mt-1 mb-1", children: ["\u00A0", error] })] }));
}
