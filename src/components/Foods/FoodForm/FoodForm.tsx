/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { Link } from "react-router-dom";

// Types
import { UserDataType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function FoodForm({
  id,
  name,
  type,
  calories,
  protein,
  carbohydrates,
  fat,
  deleteFood,
  addFoodToMealPlan,
  user,
}: {
  id: Types.ObjectId;
  name: string;
  type: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  deleteFood: Function;
  addFoodToMealPlan: Function;
  user: UserDataType;
}) {
  // renders the Food Form
  return (
    <div>
      <p>
        {name} &nbsp; {type} &nbsp; {calories} &nbsp; {protein} &nbsp;{" "}
        {carbohydrates} &nbsp; {fat}
      </p>
      <Link to={{ pathname: `/mealplans/display/${id}` }}>
        Add to Meal Plan
      </Link>{" "}
      &nbsp;
      {user.isAdmin === "true" ? (
        <>
          <Link
            to={{
              pathname: `/foods/edit/${id}/${name}/${type}/${calories}/${protein}/${carbohydrates}/${fat}`,
            }}
          >
            Edit
          </Link>
          <button onClick={() => deleteFood(id)}>Delete</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
