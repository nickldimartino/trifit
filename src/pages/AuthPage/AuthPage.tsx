import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { UserType } from "../../types";
import { useState } from 'react';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser = (user: UserType) => {} }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <div>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}