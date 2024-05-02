/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Link } from "react-router-dom";

// Internal
// import './Logo.css';


/*------------------------------------- Functions --------------------------------------*/
export default function Logo() {
  return (
    <div>
      <Link to={{pathname: "/"}}>
        <div>Tri</div>
        <div>Fit</div>
      </Link>
    </div>
  );
}
