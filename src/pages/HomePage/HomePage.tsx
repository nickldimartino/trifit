/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import Logo from "../../components/Logo/Logo";

// Types
import { UserDataType } from "../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function HomePage({ user }: { user: UserDataType }) {
  return (
    <>
      <Logo />
      <h1>Welcome {user.name}!</h1>
    </>
  );
}
