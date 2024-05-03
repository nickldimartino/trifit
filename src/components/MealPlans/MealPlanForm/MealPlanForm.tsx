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
    <div className="bg-yellowgreen m-1 w-3/4 rounded-lg shadow-sm">
      <p>
        {name} &nbsp; {totalCalories} &nbsp; {totalProtein} &nbsp;{" "}
        {totalCarbohydrates} &nbsp; {totalFat} &nbsp;
      </p>
      <Link to={{ pathname: `/mealplans/${id}` }}>Meal Plan Details</Link>
      {!isMealPlanPage ? (
        <button onClick={() => addFoodToMealPlan(id, foodId)}>Add</button>
      ) : (
        <></>
      )}
      &nbsp; &nbsp;
      {isMealPlanPage ? (
        <>
          <Link
            to={{
              pathname: `/mealplans/edit/${id}/${name}/${totalCalories}/${totalProtein}/${totalCarbohydrates}/${totalFat}`,
            }}
          >
            Edit
          </Link>
          <button onClick={() => deleteMealPlan(id)}>Delete</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
