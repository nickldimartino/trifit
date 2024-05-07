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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
// Internal
import logo from "../../public/imgs/portfolio-logo.png";
/*------------------------------------- Functions --------------------------------------*/
export default function Footer() {
    return (_jsxs(motion.div, __assign({ whileInView: { opacity: 1, x: 0 }, initial: { opacity: 0, x: -400 }, transition: { duration: 1.4 }, className: "m-8 flex items-center justify-center gap-4 text-3xl" }, { children: [_jsx("a", __assign({ href: "https://nickldimartino.github.io/portfolio/", target: "_blank", rel: "noreferrer", className: "-mr-0.5" }, { children: _jsx("img", { src: logo, alt: "Portfolio Logo", height: "30", width: "30" }) })), _jsx("a", __assign({ href: "https://www.linkedin.com/in/nicholas-dimartino/", target: "_blank", rel: "noreferrer", className: "text-caramel" }, { children: _jsx(SiLinkedin, {}) })), _jsx("a", __assign({ href: "https://github.com/nickldimartino", target: "_blank", rel: "noreferrer", className: "text-yellowgreen" }, { children: _jsx(SiGithub, {}) })), _jsx("a", __assign({ href: "mailto:nick.l.dimartino@gmail.com", target: "_blank", rel: "noreferrer", className: "text-citrine" }, { children: _jsx(MdEmail, {}) }))] })));
}
