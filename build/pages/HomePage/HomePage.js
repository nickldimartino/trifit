import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { motion } from "framer-motion";
// Internal
import bigLogo from "../../public/imgs/bigLogo.png";
import Footer from "../../components/Footer/Footer";
/*------------------------------------- Functions --------------------------------------*/
export default function HomePage() {
    return (_jsxs("div", { children: [_jsx(motion.img, { whileInView: { opacity: 1, x: 0 }, initial: { opacity: 0, x: -400 }, transition: { duration: 1.4 }, src: bigLogo, alt: "", className: "w-100 h-60 mb-8" }), _jsx(Footer, {})] }));
}
