/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import Logo from "../../components/Logo/Logo";

// Types
import { UserDataType } from "../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function HomePage({ user }: { user: UserDataType }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Logo />
      <h1 className="bg-frenchblue w-full h-10 flex justify-center items-center text-2xl font-semibold text-white">
        Welcome {user.name}!
      </h1>
    </div>
  );
}
