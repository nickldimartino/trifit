/*----------------------------------- Module Imports -----------------------------------*/
// External
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// Internal
import NewExerciseForm from "./NewExerciseForm";

/*--------------------------------------- Tests ----------------------------------------*/
describe(NewExerciseForm, () => {
  it("exercise form displays correct form label", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <NewExerciseForm addNewExercise={() => {}} />
      </BrowserRouter>
    );
    const labelValue = getByTestId("new-exercise-header").textContent;
    expect(labelValue).toEqual(" Add an Exercise");
  });
});
