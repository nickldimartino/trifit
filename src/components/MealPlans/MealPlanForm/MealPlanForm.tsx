import { Types } from "mongoose";
import { Link } from "react-router-dom";
import { MealPlanType } from "../../../types";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const isMealPlanPage = location.pathname === "/mealplans" ? true : false;

  return (
    <div>
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
