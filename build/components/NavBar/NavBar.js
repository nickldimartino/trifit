import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// Internal
import * as userService from "../../utilities/users-service";
import Logo from "../Logo/Logo";
/*------------------------------------- Functions --------------------------------------*/
export default function NavBar(_a) {
    var setUser = _a.setUser, isActive = _a.isActive;
    // handle the user logging out
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }
    // get the current URL and set a flag to render elements
    var location = useLocation();
    var isHome = location.pathname === "/" ? true : false;
    var isExercises = location.pathname === "/exercises" ? true : false;
    var isWorkouts = location.pathname === "/workouts" ? true : false;
    var isFoods = location.pathname === "/foods" ? true : false;
    var isMealPlans = location.pathname === "/mealplans" ? true : false;
    var isBodyStats = location.pathname === "/bodystats" ? true : false;
    var exercisesColor = "";
    var workoutsColor = "";
    var foodsColor = "";
    var mealPlansColor = "";
    var bodyStatsColor = "";
    if (isExercises)
        exercisesColor = "bg-sky-500";
    if (isWorkouts)
        workoutsColor = "bg-sky-500";
    if (isFoods)
        foodsColor = "bg-sky-500";
    if (isMealPlans)
        mealPlansColor = "bg-sky-500";
    if (isBodyStats)
        bodyStatsColor = "bg-sky-500";
    // render the Nav Bar
    return (_jsx("div", { children: isActive ? (_jsx(_Fragment, { children: _jsxs(motion.nav, { animate: { opacity: 1, x: 0 }, initial: { opacity: 0, x: 400 }, transition: { duration: 1.4 }, className: "flex flex-col items-center h-full", children: [!isHome ? _jsx(Logo, {}) : _jsx(_Fragment, {}), _jsx("div", { className: "my-4", children: _jsx(Link, { to: "/exercises", className: "hover:text-white hover:bg-caramel rounded-md py-1 px-5 hover:ease-in-out text-2xl hover:shadow-md ".concat(exercisesColor), children: "Exercises" }) }), _jsx("div", { className: "my-4", children: _jsx(Link, { to: "/workouts", className: "hover:text-white hover:bg-caramel rounded-md py-1 px-5 ease-in-out text-2xl hover:shadow-md ".concat(workoutsColor), children: "Your Workouts" }) }), _jsx("div", { className: "my-4", children: _jsx(Link, { to: "/foods", className: "hover:text-white hover:bg-yellowgreen rounded-md py-1 px-5 ease-in-out text-2xl hover:shadow-md ".concat(foodsColor), children: "Foods" }) }), _jsx("div", { className: "my-4", children: _jsx(Link, { to: "/mealplans", className: "hover:text-white hover:bg-yellowgreen rounded-md py-1 px-5 ease-in-out text-2xl hover:shadow-md ".concat(mealPlansColor), children: "Your Meal Plans" }) }), _jsx("div", { className: "my-4", children: _jsx(Link, { to: "/bodystats", className: "hover:text-white hover:bg-citrine rounded-md py-1 px-5 ease-in-out text-2xl hover:shadow-md ".concat(bodyStatsColor), children: "Your Body" }) }), _jsx("div", { className: "my-3", children: _jsx(Link, { to: "", onClick: handleLogOut, className: "hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 ease-in-out text-2xl hover:shadow-xl", children: "Log Out" }) })] }) })) : (_jsx(_Fragment, { children: _jsxs("nav", { className: "pl-2 flex justify-around items-center bg-frenchblue shadow-xl", children: [!isHome ? _jsx(Logo, {}) : _jsx(_Fragment, {}), isExercises ? (_jsx(Link, { to: "/exercises", className: "text-white no-underline font-semibold text-2xl w-18 px-2 py-8 border-2 border-sky-500 hover:text-citrine ".concat(exercisesColor), children: "Exercises" })) : (_jsx(Link, { to: "/exercises", className: "text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine", children: "Exercises" })), isWorkouts ? (_jsx(Link, { to: "/workouts", className: "text-white no-underline font-semibold text-2xl w-18  px-2 py-8 border-2 border-sky-500 hover:text-citrine ".concat(workoutsColor), children: "Your Workouts" })) : (_jsx(Link, { to: "/workouts", className: "text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine", children: "Your Workouts" })), isFoods ? (_jsx(Link, { to: "/foods", className: "text-white no-underline font-semibold text-2xl w-18  px-2 py-8 border-2 border-sky-500 hover:text-citrine ".concat(foodsColor), children: "Foods" })) : (_jsx(Link, { to: "/foods", className: "text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine", children: "Foods" })), isMealPlans ? (_jsx(Link, { to: "/mealplans", className: "text-white no-underline font-semibold text-2xl w-18  px-2 py-8 border-2 border-sky-500 hover:text-citrine ".concat(mealPlansColor), children: "Your Meal Plans" })) : (_jsx(Link, { to: "/mealplans", className: "text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine", children: "Your Meal Plans" })), isBodyStats ? (_jsx(Link, { to: "/bodystats", className: "text-white no-underline font-semibold text-2xl w-18  px-2 py-8 border-2 border-sky-500 hover:text-citrine ".concat(bodyStatsColor), children: "Your Body" })) : (_jsx(Link, { to: "/bodystats", className: "text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine", children: "Your Body" })), _jsx(Link, { to: "", onClick: handleLogOut, className: "text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine", children: "Log Out" })] }) })) }));
}
