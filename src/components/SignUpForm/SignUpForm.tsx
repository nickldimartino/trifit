/*----------------------------------- Module Imports -----------------------------------*/
// External
import React, { Component } from "react";

// Internal
import { signUp } from "../../utilities/users-service";

// Types
import { SignUpFormProps, SignUpFormState } from "../../types";

/*------------------------------------- Functions --------------------------------------*/
export default class SignUpForm extends Component<
  SignUpFormProps,
  SignUpFormState
> {
  // state variables
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    isAdmin: "false",
    workouts: [],
    mealPlans: [],
    bodyStats: [],
    error: "",
  };

  // handle the form submission for the Signup Form
  handleSubmit = async (evt: React.ChangeEvent<any>) => {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const { name, email, password, isAdmin, workouts, mealPlans, bodyStats } =
        this.state;
      const formData = {
        name,
        email,
        password,
        isAdmin,
        workouts,
        mealPlans,
        bodyStats,
      };

      const user = await signUp(formData);

      this.props.setUser(user);
    } catch {
      // An error occurred
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  // handle the key strokes for the user input
  handleChange = (evt: React.ChangeEvent<any>) => {
    // set the state variables to the usr input
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };
  // render the Sign Up Form
  render() {
    // set flag to determine if password was equal to confirm password
    const disable: boolean = this.state.password !== this.state.confirm;
    return (
      <div className="flex justify-center items-center flex-col w-3/4 h-3/4">
        <div className="flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full shadow-lg bg-sky-300 rounded-lg">
          <form
            className="p-0 w-3/4"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <h1 className="text-2xl block text-center font-semibold">
              <i className="fa-solid fa-user text-orange-300"></i> Signup
            </h1>
            <hr className="mt-1" />
            <div>
              <label className="text-left block text-base mt-2">Name</label>
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
                placeholder="Enter your name..."
              />
            </div>
            <div className="mt-3">
              <label className="text-left block text-base mt-2">Email</label>
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
                placeholder="Enter your email..."
              />
            </div>
            <div className="mt-3">
              <label className="text-left block text-base mt-2">Password</label>
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
                placeholder="Enter a password..."
              />
            </div>
            <div>
              <label className="text-left block text-base mt-2">Confirm</label>
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
                placeholder="Confirm your password..."
              />
            </div>
            <div className="mt-5">
              <button
                className="mb-2 border-2 border-black bg-orange-300 text-white w-3/4 rounded-md hover:bg-orange-400 font-semibold"
                type="submit"
                disabled={disable}
              >
                <i className="fa-solid fa-right-to-bracket"></i>Login
              </button>
            </div>
          </form>
        </div>
        <p className="text-red-500 mt-3 mb-2 error-message">
          &nbsp;{this.state.error}
        </p>
      </div>
    );
  }
}
