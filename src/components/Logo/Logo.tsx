/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Link } from "react-router-dom";

// Internal
import smallLogo from "../../public/imgs/smallLogo.png";

/*------------------------------------- Functions --------------------------------------*/
export default function Logo() {
  return (
    <div className=" flex justify-center items-center">
      <Link to={{ pathname: "/" }}>
        <img
          src={smallLogo}
          alt="TriFit"
          className="w-20 h-20 mb-3 mt-2 bg-slate-100 rounded-full"
        />
      </Link>
    </div>
  );
}
