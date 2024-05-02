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
                className="hover:text-orange-300 hover:bg-sky-300 rounded-md py-1 px-5 ease-in-out text-2xl"
              >
                Exercises
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/workouts"
                className="hover:text-orange-300 hover:bg-sky-300 rounded-md py-1 px-5 ease-in-out text-2xl"
              >
                Your Workouts
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/foods"
                className="hover:text-orange-300 hover:bg-sky-300 rounded-md py-1 px-5 ease-in-out text-2xl"
              >
                Foods
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/mealplans"
                className="hover:text-orange-300 hover:bg-sky-300 rounded-md py-1 px-5 ease-in-out text-2xl"
              >
                Your Meal Plans
              </Link>
            </div>
            <div className="my-4">
              <Link
                to="/bodystats"
                className="hover:text-orange-300 hover:bg-sky-300 rounded-md py-1 px-5 ease-in-out text-2xl"
              >
                Your Body
              </Link>
            </div>
            <div className="my-3">
              <Link
                to=""
                onClick={handleLogOut}
                className="hover:text-orange-300 hover:bg-sky-300 rounded-md py-1 px-5 ease-in-out text-2xl"
              >
                Log Out
              </Link>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="pl-2 flex justify-around items-center bg-sky-300">
            {!isHome ? <Logo /> : <></>}
            <Link to="/exercises" className="LinkElem">
              Exercises
            </Link>
            <Link to="/workouts" className="LinkElem">
              Your Workouts
            </Link>
            <Link to="/foods" className="LinkElem">
              Foods
            </Link>
            <Link to="/mealplans" className="LinkElem">
              Your Meal Plans
            </Link>
            <Link to="/bodystats" className="LinkElem">
              Your Body
            </Link>
            <Link to="" onClick={handleLogOut} className="LinkElem">
              Log Out
            </Link>
          </nav>
        </>
      )}
    </div>
  );
}
