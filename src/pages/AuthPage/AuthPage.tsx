/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useState } from "react";

// Internal
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

/*------------------------------------- Functions --------------------------------------*/
export default function AuthPage({ setUser }: { setUser: Function }) {
  // show login state
  const [showLogin, setShowLogin] = useState(true);

  // render the Login Form or Sign Up Form
  return (
    <main className="flex justify-center items-center flex-col h-screen bg-grey-300">
      <Logo />
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
      <div>
        <h3
          className="bg-sky-300 p-2 rounded-xl border-2 border-black text-white"
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? "SIGN UP" : "LOG IN"}
        </h3>
      </div>
    </main>
  );
}
