/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";

// Internal
import MealPlanForm from "../MealPlanForm/MealPlanForm";

// Types
import { MealPlanType } from "../../../types";


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
      deleteMealPlan={deleteMealPlan}
      addFoodToMealPlan={addFoodToMealPlan}
      foodId={new Types.ObjectId("123456789101112131415161")}
    />
  ));

  // render the Meal Plan Forms
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black">Meal Plans List</h1>
      {mealPlanItems}
    </div>
  );
}
