/*----------------------------------- Module Imports -----------------------------------*/
// External
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// Internal
import FoodList from "./FoodsList";

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
describe(FoodList, () => {
  it("foods list displays correct food heading", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <FoodList
          foods={[]}
          deleteFood={() => {}}
          addFoodToMealPlan={() => {}}
          user={tempUser}
        />
      </BrowserRouter>
    );
    const labelValue = getByTestId("foods-list-header").textContent;
    expect(labelValue).toEqual("Foods");
  });
});
