/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { useParams } from "react-router-dom";

// Internal
import MealPlanForm from "../../../components/MealPlans/MealPlanForm/MealPlanForm";

// Types
import { MealPlanType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function AddFoodToMealPlan({
  mealPlans,
  deleteMealPlan,
  addFoodToMealPlan,
}: {
  mealPlans: MealPlanType[];
  deleteMealPlan: Function;
  addFoodToMealPlan: Function;
}) {
  // save the id in teh URL path
  const { id } = useParams();

  // map each meal plan to a Meal Plan Form
  const mealPlanItems: JSX.Element[] = mealPlans.map((m: any, idx: number) => (
    <MealPlanForm
      id={m._id}
      key={idx}
      name={m.name}
      foods={m.foods}
      totalCalories={m.totalCalories}
      totalProtein={m.totalProtein}
      totalCarbohydrates={m.totalCarbohydrates}
      totalFat={m.totalFat}
      addFoodToMealPlan={addFoodToMealPlan}
      deleteMealPlan={deleteMealPlan}
      foodId={new Types.ObjectId(id)}
    />
  ));

  // render the Meal Plan Forms
  return (
    <>
      <h1>Add Food to Meal Plan</h1>
      {mealPlanItems}
    </>
  );
}
