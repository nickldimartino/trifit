/*----------------------------------- Module Imports -----------------------------------*/
import { Link, useLocation } from "react-router-dom";

import * as userService from "../../utilities/users-service";
import "./NavBar.css";

import { UserType } from "../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function NavBar({
  user,
  setUser,
  isActive,
}: {
  user: UserType;
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
  const isHome = location.pathname === "/" ? true : false;

  // render the Nav Bar
  return (
    <nav className={isActive ? "navbar-home-page" : "navbar"}>
      {!isHome ? (
        <Link to="/" className="LinkElem">
          Home Page
        </Link>
      ) : (
        <></>
      )}
      &nbsp; &nbsp;
      <Link to="/exercises" className="LinkElem">
        Exercises
      </Link>
      &nbsp; &nbsp;
      <Link to="/workouts" className="LinkElem">
        Your Workouts
      </Link>
      &nbsp; &nbsp;
      <Link to="/foods" className="LinkElem">
        Foods
      </Link>
      &nbsp; &nbsp;
      <Link to="/mealplans" className="LinkElem">
        Your Meal Plans
      </Link>
      &nbsp; &nbsp;
      <Link to="/bodystats" className="LinkElem">
        Your Body
      </Link>
      &nbsp; &nbsp;
      <Link to="" onClick={handleLogOut} className="LinkElem">
        Log Out
      </Link>
    </nav>
  );
}
