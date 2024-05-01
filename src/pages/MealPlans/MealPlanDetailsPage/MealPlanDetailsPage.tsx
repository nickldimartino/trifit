/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { useNavigate, useParams } from "react-router-dom";

// Internal
import FoodForm from "../../../components/Foods/FoodForm/FoodForm";
import * as mealPlansService from "../../../utilities/mealPlans-services";

// Types
import { FoodType, UserDataType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function MealPlanDetailsPage({
  foods,
  mealPlans,
  user,
}: {
  foods: FoodType[];
  mealPlans: any;
  user: UserDataType;
}) {
  // save the id in the URL path
  const { id } = useParams();

  // variables to store the current meal plan and its foods
  let thisMealPlan;
  let thisMealPlanFoods: FoodType[] = [];

  // save the navigation
  const navigate = useNavigate();

  // find the current meal plan using the URL path id
  for (let w = 0; w < mealPlans.length; w++) {
    if (mealPlans[w]._id === id) {
      thisMealPlan = mealPlans[w];
      break;
    }
  }

  // get the foods for the current meal plan
  thisMealPlan.foods.forEach((e: Types.ObjectId) => {
    foods.forEach((w: any) => {
      if (e === w._id) {
        thisMealPlanFoods.push(w);
      }
    });
  });

  // remove a food from a meal plam
  async function removeFoodFromMealPlan(foodId: Types.ObjectId) {
    // remove the food from the meal plan
    await mealPlansService.removeFoodFromMealPlan(id, foodId);

    // naviaget to the mealplans page
    navigate("/mealplans");
  }

  // map the foods in the meal plan to their own Food Form
  const foodItems = thisMealPlanFoods.map((f: any, idx: number) => (
    <FoodForm
      id={f._id}
      key={idx}
      name={f.name}
      type={f.type}
      calories={f.calories}
      protein={f.protein}
      carbohydrates={f.carbohydrates}
      fat={f.fat}
      deleteFood={removeFoodFromMealPlan}
      addFoodToMealPlan={() => {}}
      user={user}
    />
  ));

  // renders the Meal Plan Details Page
  return (
    <>
      <h1>Meal Plan Details Page</h1>
      <h3>{thisMealPlan.name}</h3>
      {foodItems}
    </>
  );
}
