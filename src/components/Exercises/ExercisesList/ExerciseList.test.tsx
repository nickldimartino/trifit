import { render } from "@testing-library/react";
import ExerciseList from "./ExercisesList";
import { Types } from "mongoose";
import { BrowserRouter } from "react-router-dom";

const tempUser = {
  name: "temp name",
  email: "temp@mail.com",
  password: "temp",
  isAdmin: "false",
  workouts: [],
  mealPlans: [],
  bodyStats: [],
};

describe(ExerciseList, () => {
  it("exercise list displays correct exercise label", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ExerciseList
          exercises={[]}
          addExerciseToWorkout={() => {}}
          deleteExercise={() => {}}
          user={tempUser}
        />
      </BrowserRouter>
    );
    const labelValue = getByTestId("exercise-list-header").textContent;
    expect(labelValue).toEqual("Exercises");
  });
});
