/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useState } from "react";

// Internal
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

// Types
import { UserType } from "../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function AuthPage({ setUser = (user: UserType) => {} }) {
  // show login state
  const [showLogin, setShowLogin] = useState(true);

  // render the Login Form or Sign Up Form
  return (
    <main>
      <div>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "SIGN UP" : "LOG IN"}
        </h3>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
