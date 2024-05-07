/*----------------------------------- Module Imports -----------------------------------*/
// External
import { render } from "@testing-library/react";
import { Types } from "mongoose";
import { BrowserRouter } from "react-router-dom";

// Internal
import FoodForm from "./FoodForm";

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
describe(FoodForm, () => {
  it("foods displays correct food labels", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <FoodForm
          id={new Types.ObjectId("123456789101112131415161")}
          name={"Broccoli"}
          type={"Vegetable"}
          calories={10}
          protein={11}
          carbohydrates={3}
          fat={0}
          deleteFood={() => {}}
          addFoodToMealPlan={() => {}}
          user={tempUser}
        />
      </BrowserRouter>
    );
    const labelValue = getByTestId("food-name").textContent;
    expect(labelValue).toEqual("Broccoli");
  });
});
