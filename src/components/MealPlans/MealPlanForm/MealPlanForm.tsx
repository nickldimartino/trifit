/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { Link, useLocation } from "react-router-dom";

// Types
import { MealPlanType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function MealPlanForm({
  id,
  name,
  foods,
  totalCalories,
  totalProtein,
  totalCarbohydrates,
  totalFat,
  deleteMealPlan,
  addFoodToMealPlan,
  foodId,
}: {
  id: Types.ObjectId;
  name: string;
  foods: MealPlanType[];
  totalCalories: number;
  totalProtein: number;
  totalCarbohydrates: number;
  totalFat: number;
  deleteMealPlan: Function;
  addFoodToMealPlan: Function;
  foodId: Types.ObjectId;
}) {
  // get the current URL path and set a flag to determine the location for element rendering
  const location = useLocation();
  const isMealPlanPage: boolean = location.pathname === "/mealplans" ? true : false;

  // render the Meal Plan Form
  return (
    <div className="bg-yellowgreen m-1 w-5/6 rounded-lg shadow-sm">
      <div className="grid grid-cols-5 font-semibold text-md">
        <div>{name}</div>
        <div>{totalCalories}kcal</div>
        <div>{totalProtein}g</div>
        <div>{totalCarbohydrates}g</div>
        <div>{totalFat}g</div>
      </div>
      <div className="rounded-b-lg grid grid-cols-3 bg-eggplant">
      <Link className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold" to={{ pathname: `/mealplans/${id}` }}>Details</Link>
      {!isMealPlanPage ? (
        <button className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold" onClick={() => addFoodToMealPlan(id, foodId)}>Add</button>
      ) : (
        <></>
      )}
      {isMealPlanPage ? (
        <>
          <Link
            to={{
              pathname: `/mealplans/edit/${id}/${name}/${totalCalories}/${totalProtein}/${totalCarbohydrates}/${totalFat}`,
            }}
            className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
          >
            Edit
          </Link>
          <button className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold" onClick={() => deleteMealPlan(id)}>Delete</button>
        </>
      ) : (
        <></>
      )}
    </div>
    </div>
  );
}
