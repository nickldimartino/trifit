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
import { jsx as _jsx } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Link } from "react-router-dom";
// Internal
import smallLogo from "../../public/imgs/smallLogo.png";
/*------------------------------------- Functions --------------------------------------*/
export default function Logo() {
    return (_jsx("div", __assign({ className: " flex justify-center items-center" }, { children: _jsx(Link, __assign({ to: { pathname: "/" } }, { children: _jsx("img", { src: smallLogo, alt: "TriFit", className: "w-20 h-20 mb-3 mt-2 bg-slate-100 rounded-full" }) })) })));
}
