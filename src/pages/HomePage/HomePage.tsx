/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import bigLogo from "../../public/imgs/bigLogo.png";

// Types
import { UserDataType } from "../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function HomePage({ user }: { user: UserDataType }) {
  return (
    <>
      <img src={bigLogo} alt="" className="w-100 h-60" />
    </>
  );
}
