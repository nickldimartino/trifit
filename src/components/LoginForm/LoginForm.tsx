/*----------------------------------- Module Imports -----------------------------------*/
// External
import React, { useState } from "react";

// Internal
import * as usersService from "../../utilities/users-service";

/*------------------------------------- Functions --------------------------------------*/
export default function LoginForm({ setUser }: { setUser: any }) {
  // credentials state
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // error message state
  const [error, setError] = useState("");

  // handles the form submission for the Login Form
  async function handleSubmit(evt: React.ChangeEvent<any>) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  // handles the keystrokes for the user input
  function handleChange(evt: React.ChangeEvent<any>) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  // render the Login Form
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
