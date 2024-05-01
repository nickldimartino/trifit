import { Link } from "react-router-dom";
import { UserType } from "../../types";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";
import { useLocation } from "react-router-dom";

export default function NavBar({
  user,
  setUser,
  isActive,
}: {
  user: UserType;
  setUser: any;
  isActive: boolean;
}) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  const location = useLocation();
  const isHome = location.pathname === "/" ? true : false;

  return (
    <nav className={isActive ? "navbar-home-page" : "navbar"}>
      { !isHome ?
        <Link to="/" className="LinkElem">
            Home Page
        </Link>
        :
        <></>
       }
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
