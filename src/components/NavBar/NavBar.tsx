/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Link, useLocation } from "react-router-dom";

// Internal
import "./NavBar.css";
import * as userService from "../../utilities/users-service";
import Logo from "../Logo/Logo";

/*------------------------------------- Functions --------------------------------------*/
export default function NavBar({
  setUser,
  isActive,
}: {
  setUser: any;
  isActive: boolean;
}) {
  // handle the user logging out
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  // get the current URL and set a flag to render elements
  const location = useLocation();
  const isHome: boolean = location.pathname === "/" ? true : false;
  const isExercises: boolean =
    location.pathname === "/exercises" ? true : false;
  const isWorkouts: boolean = location.pathname === "/workouts" ? true : false;
  const isFoods: boolean = location.pathname === "/foods" ? true : false;
  const isMealPlans: boolean =
    location.pathname === "/mealplans" ? true : false;
  const isBodyStats: boolean =
    location.pathname === "/bodystats" ? true : false;

  let exercisesColor: string = "";
  let workoutsColor: string = "";
  let foodsColor: string = "";
  let mealPlansColor: string = "";
  let bodyStatsColor: string = "";

  if (isExercises) exercisesColor = "bg-sky-500";
  if (isWorkouts) workoutsColor = "bg-sky-500";
  if (isFoods) foodsColor = "bg-sky-500";
  if (isMealPlans) mealPlansColor = "bg-sky-500";
  if (isBodyStats) bodyStatsColor = "bg-sky-500";

  // render the Nav Bar
  return (
    <div>
      {isActive ? (
        <>
          <nav className="flex flex-col items-center h-full">
            {!isHome ? <Logo /> : <></>}
            <div className="my-4">
              <Link
                to="/exercises"
                className={`hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 hover:ease-in-out text-2xl ${exercisesColor}`}
              >
                Exercises
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/workouts"
                className={`hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 ease-in-out text-2xl ${workoutsColor}`}
              >
                Your Workouts
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/foods"
                className={`hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 ease-in-out text-2xl ${foodsColor}`}
              >
                Foods
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/mealplans"
                className={`hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 ease-in-out text-2xl ${mealPlansColor}`}
              >
                Your Meal Plans
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/bodystats"
                className={`hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 ease-in-out text-2xl ${bodyStatsColor}`}
              >
                Your Body
              </Link>
            </div>
            <div className="my-3">
              <Link
                to=""
                onClick={handleLogOut}
                className="hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 ease-in-out text-2xl"
              >
                Log Out
              </Link>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="pl-2 flex justify-around items-center bg-frenchblue shadow-xl">
            {!isHome ? <Logo /> : <></>}
            {isExercises ? (
              <Link
                to="/exercises"
                className={`text-white no-underline font-semibold text-2xl w-18 px-2 py-8 border-2 border-sky-500 hover:text-citrine ${exercisesColor}`}
              >
                Exercises
              </Link>
            ) : (
              <Link
                to="/exercises"
                className={`text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine`}
              >
                Exercises
              </Link>
            )}
            {isWorkouts ? (
              <Link
                to="/workouts"
                className={`text-white no-underline font-semibold text-2xl w-18  px-2 py-8 border-2 border-sky-500 hover:text-citrine ${workoutsColor}`}
              >
                Your Workouts
              </Link>
            ) : (
              <Link
                to="/workouts"
                className={`text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine`}
              >
                Your Workouts
              </Link>
            )}
            {isFoods ? (
              <Link
                to="/foods"
                className={`text-white no-underline font-semibold text-2xl w-18  px-2 py-8 border-2 border-sky-500 hover:text-citrine ${foodsColor}`}
              >
                Foods
              </Link>
            ) : (
              <Link
                to="/foods"
                className={`text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine`}
              >
                Foods
              </Link>
            )}
            {isMealPlans ? (
              <Link
                to="/mealplans"
                className={`text-white no-underline font-semibold text-2xl w-18  px-2 py-8 border-2 border-sky-500 hover:text-citrine ${mealPlansColor}`}
              >
                Your Meal Plans
              </Link>
            ) : (
              <Link
                to="/mealplans"
                className={`text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine`}
              >
                Your Meal Plans
              </Link>
            )}
            {isBodyStats ? (
              <Link
                to="/bodystats"
                className={`text-white no-underline font-semibold text-2xl w-18  px-2 py-8 border-2 border-sky-500 hover:text-citrine ${bodyStatsColor}`}
              >
                Your Body
              </Link>
            ) : (
              <Link
                to="/bodystats"
                className={`text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine`}
              >
                Your Body
              </Link>
            )}
            <Link
              to=""
              onClick={handleLogOut}
              className="text-white no-underline font-semibold text-2xl w-18 p-2 hover:text-citrine"
            >
              Log Out
            </Link>
          </nav>
        </>
      )}
    </div>
  );
}
