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
      <div className="flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full shadow-lg bg-frenchblue rounded-lg border-2 border-black">
        <form className="p-0 w-3/4" autoComplete="off" onSubmit={handleSubmit}>
          <h1 className="text-2xl block text-center text-white font-semibold">
            <i className="fa-solid fa-user"></i> Login
          </h1>
          <hr className="mt-1" />
          <div>
            <label className="text-left block text-base mt-2 text-white font-semibold">
              Email
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none text-black focus:ring-0 focus:border-gray-600"
                type="text"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
                placeholder="Enter email..."
                autoComplete="off"
              />
            </label>
          </div>
          <div className="mt-3">
            <label className="text-left block text-base mt-2 text-white font-semibold">
              Password
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 text-black"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                placeholder="Enter password..."
                autoComplete="off"
              />
            </label>
          </div>
          <div className="mt-5">
            <button className="mb-2 border-2 border-black bg-citrine text-black w-3/4 rounded-md hover:bg-orange-400 font-semibold">
              <i className="fa-solid fa-right-to-bracket"></i>Login
            </button>
          </div>
        </form>
      </div>
      <p className="text-red-500 mt-1 mb-1">&nbsp;{error}</p>
    </div>
  );
}
