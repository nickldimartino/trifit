import { jsx as _jsx } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Link } from "react-router-dom";
// Internal
import smallLogo from "../../public/imgs/smallLogo.png";
/*------------------------------------- Functions --------------------------------------*/
export default function Logo() {
    return (_jsx("div", { className: " flex justify-center items-center", children: _jsx(Link, { to: { pathname: "/" }, children: _jsx("img", { src: smallLogo, alt: "TriFit", className: "w-20 h-20 mb-3 mt-2 bg-slate-100 rounded-full" }) }) }));
}
