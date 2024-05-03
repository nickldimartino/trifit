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
      <div className="bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black">
        <h1>Your Meal Plans</h1>
        <hr />
        <div className="grid grid-cols-5 font-semibold text-md bg-citrine text-black rounded-b-lg">
          <div className="flex justify-center items-center border rounded-bl-lg">Name</div>
          <div className="flex justify-center items-center border">Calories</div>
          <div className="flex justify-center items-center border">Protein</div>
          <div className="flex justify-center items-center border">Carbs</div>
          <div className="flex justify-center items-center border rounded-br-lg">Fat</div>
        </div>
      </div>
      {mealPlanItems}
    </div>
  );
}
