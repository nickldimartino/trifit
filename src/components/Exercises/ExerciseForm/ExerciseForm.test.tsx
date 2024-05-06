/*----------------------------------- Module Imports -----------------------------------*/
// External
import { render } from "@testing-library/react";
import { Types } from "mongoose";
import { BrowserRouter } from "react-router-dom";

// Internal
import ExerciseForm from "./ExerciseForm";

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
describe(ExerciseForm, () => {
  it("exercise displays correct exercise labels", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ExerciseForm
          id={new Types.ObjectId("123456789101112131415161")}
          name={"Bench Press"}
          type={"Barbell"}
          muscle={"Chest"}
          grip={"Overhand"}
          width={"Neutral"}
          addExerciseToWorkout={() => {}}
          deleteExercise={() => {}}
          user={tempUser}
        />
      </BrowserRouter>
    );
    const labelValue = getByTestId("exercise-name").textContent;
    expect(labelValue).toEqual("Bench Press");
  });
});
