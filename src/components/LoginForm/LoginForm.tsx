/*----------------------------------- Module Imports -----------------------------------*/
// External
import React, { useState } from "react";

// Internal
import * as usersService from "../../utilities/users-service";

/*------------------------------------- Functions --------------------------------------*/
export default function LoginForm({ setUser }: { setUser: Function }) {
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
    <div className="flex justify-center items-center flex-col w-3/4 h-1/2">
      <div className="flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full shadow-lg bg-sky-300 rounded-lg">
        <form className="p-0 w-3/4" autoComplete="off" onSubmit={handleSubmit}>
          <h1 className="text-2xl block text-center font-semibold">
            <i className="fa-solid fa-user text-orange-300"></i> Login
          </h1>
          <hr className="mt-1" />
          <div>
            <label className="text-left block text-base mt-2">Email</label>
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              placeholder="Enter email..."
              autoComplete="off"
            />
          </div>
          <div className="mt-3">
            <label className="text-left block text-base mt-2">Password</label>
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Enter password..."
              autoComplete="off"
            />
          </div>
          <div className="mt-5">
            <button className="mb-2 border-2 border-black bg-orange-300 text-white w-3/4 rounded-md hover:bg-transparent hover:bg-orange-400 font-semibold">
              <i className="fa-solid fa-right-to-bracket"></i>Login
            </button>
          </div>
        </form>
      </div>
      <p className="text-red-500 mt-3 mb-2 error-message">&nbsp;{error}</p>
    </div>
  );
}
