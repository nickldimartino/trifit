import React, { Component } from "react";
import { signUp } from "../../utilities/users-service";
import { BodyStatType, ExerciseType, FoodType } from "../../types";

interface myProps {
  setUser: any;
}

interface myState {
  name: string;
  email: string;
  password: string;
  confirm: string;
  isAdmin: string;
  workouts: ExerciseType[];
  mealPlans: FoodType[];
  bodyStats: BodyStatType[];
  error: string;
}

export default class SignUpForm extends Component<myProps, myState> {
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

  handleChange = (evt: React.ChangeEvent<any>) => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

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

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
