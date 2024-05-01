/*----------------------------------- Module Imports -----------------------------------*/
import { Types } from "mongoose";

import { MealPlanType } from "../../../types";
import MealPlanForm from "../MealPlanForm/MealPlanForm";

/*------------------------------------- Functions --------------------------------------*/
export default function MealPlanList({
  mealPlans,
  deleteMealPlan,
  addFoodToMealPlan,
}: {
  mealPlans: MealPlanType[];
  deleteMealPlan: Function;
  addFoodToMealPlan: Function;
}) {
  // map the meal plans to their own Meal Plan Form
  const mealPlanItems = mealPlans.map((m: any, idx: number) => (
    <MealPlanForm
      id={m._id}
      key={idx}
      name={m.name}
      foods={m.foods}
      totalCalories={m.totalCalories}
      totalProtein={m.totalProtein}
      totalCarbohydrates={m.totalCarbohydrates}
      totalFat={m.totalFat}
      deleteMealPlan={deleteMealPlan}
      addFoodToMealPlan={addFoodToMealPlan}
      foodId={new Types.ObjectId("123456789101112131415161")}
    />
  ));

  // render the Meal Plan Forms
  return (
    <>
      <h1>Meal Plan List</h1>
      {mealPlanItems}
    </>
  );
}
