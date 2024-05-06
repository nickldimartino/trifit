/*----------------------------------- Module Imports -----------------------------------*/
// External
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// Internal
import ExerciseList from "./ExercisesList";

/*-------------------------------------- Variables -------------------------------------*/
const tempUser = {
  name: "temp name",
  email: "temp@mail.com",
  password: "temp",
  isAdmin: "false",
  workouts: [],
  mealPlans: [],
  bodyStats: [],
};

/*--------------------------------------- Tests ----------------------------------------*/
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
