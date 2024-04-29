import { Link } from "react-router-dom";
import { UserType } from "../../types";
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}: {user: UserType, setUser: any}) {
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
      }

    return (
        <nav>
            <Link to="/">Home Page</Link>
            &nbsp; | &nbsp;
            <Link to="/exercises">Exercises Page</Link>
            &nbsp; | &nbsp;
            <Link to="/workouts">Workouts Page</Link>
            &nbsp; | &nbsp;
            <Link to="/foods">Foods Page</Link>
            &nbsp; | &nbsp;
            <Link to="/mealplans">Meal Plans Page</Link>
            &nbsp; | &nbsp;
            <Link to="/bodystats">Body Stats Page</Link>
            &nbsp; | &nbsp;
            <span>{user.name}</span>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    );
}