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

  // get the current URL and set a flag to rendering elements
  const location = useLocation();
  const isHome: boolean = location.pathname === "/" ? true : false;

  // render the Nav Bar
  return (
    <div>
      {isActive ? (
        <>
          <nav className="flex flex-col items-center">
            {!isHome ? <Logo /> : <></>}
            <div className="my-4">
              <Link
                to="/exercises"
                className="hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 hover:ease-in-out text-2xl"
              >
                Exercises
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/workouts"
                className="hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 ease-in-out text-2xl"
              >
                Your Workouts
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/foods"
                className="hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 ease-in-out text-2xl"
              >
                Foods
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/mealplans"
                className="hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 ease-in-out text-2xl"
              >
                Your Meal Plans
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/bodystats"
                className="hover:text-white hover:bg-frenchblue rounded-md py-1 px-5 ease-in-out text-2xl"
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
            <Link to="/exercises" className="text-white no-underline font-semibold text-2xl w-18 hover:text-citrine">
              Exercises
            </Link>
            <Link to="/workouts" className="text-white no-underline font-semibold text-2xl w-18 hover:text-citrine">
              Your Workouts
            </Link>
            <Link to="/foods" className="text-white no-underline font-semibold text-2xl w-18 hover:text-citrine">
              Foods
            </Link>
            <Link to="/mealplans" className="text-white no-underline font-semibold text-2xl w-18 hover:text-citrine">
              Your Meal Plans
            </Link>
            <Link to="/bodystats" className="text-white no-underline font-semibold text-2xl w-18 hover:text-citrine">
              Your Body
            </Link>
            <Link to="" onClick={handleLogOut} className="text-white no-underline font-semibold text-2xl w-18 hover:text-citrine">
              Log Out
            </Link>
          </nav>
        </>
      )}
    </div>
  );
}
