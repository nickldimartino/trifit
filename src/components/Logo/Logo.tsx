/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Link } from "react-router-dom";

// Internal
// import './Logo.css';

/*------------------------------------- Functions --------------------------------------*/
export default function Logo() {
  return (
    <div className="mt-2 flex justify-center items-center">
      <Link to={{ pathname: "/" }}>
        <div className="flex justify-center items-center bg-orange-300 w-16 h-16 text-center rounded-full border-2 border-black mb-3 ">
          TriFit
        </div>
      </Link>
    </div>
  );
}
