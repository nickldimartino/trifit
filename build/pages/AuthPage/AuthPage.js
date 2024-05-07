import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useState } from "react";
// Internal
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
/*------------------------------------- Functions --------------------------------------*/
export default function AuthPage(_a) {
    var setUser = _a.setUser;
    // show login state
    var _b = useState(true), showLogin = _b[0], setShowLogin = _b[1];
    // render the Login Form or Sign Up Form
    return (_jsxs("main", { className: "flex justify-center items-center flex-col h-screen bg-slate-100", children: [_jsx(Logo, {}), showLogin ? (_jsx(LoginForm, { setUser: setUser })) : (_jsx(SignUpForm, { setUser: setUser })), _jsx("div", { children: _jsx("h3", { className: "bg-yellowgreen p-2 mb-1 rounded-xl border-2 border-black text-black", onClick: function () { return setShowLogin(!showLogin); }, children: showLogin ? "Sign Up" : "Log In" }) })] }));
}
