/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { Link, useLocation } from "react-router-dom";

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
  // save the URL path
  const location = useLocation();
  const isFoodsPage: boolean = location.pathname === "/foods" ? true : false;

  // renders the Food Form
  return (
    <div className="bg-yellowgreen m-1 w-5/6 rounded-lg shadow-sm">
      <div className="grid grid-cols-6 font-semibold text-md">
        <div>{name}</div>
        <div>{type}</div>
        <div>{calories}kcal</div>
        <div>{protein}g</div>
        <div>{carbohydrates}g</div>
        <div>{fat}g</div>
      </div>
      <div className="grid grid-cols-3 rounded-b-lg bg-eggplant">
        {isFoodsPage ? (
          <>
            <Link
              className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
              to={{ pathname: `/mealplans/display/${id}` }}
            >
              Add to Meal Plan
            </Link>{" "}
            {user.isAdmin === "true" ? (
              <>
                <Link
                  to={{
                    pathname: `/foods/edit/${id}/${name}/${type}/${calories}/${protein}/${carbohydrates}/${fat}`,
                  }}
                  className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
                >
                  Edit
                </Link>
                <button
                  className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
                  onClick={() => deleteFood(id)}
                >
                  Delete
                </button>
              </>
            ) : (
              <></>
            )}
          </>
        ) : user.isAdmin === "true" && !isFoodsPage ? (
          <>
            <button
              className="m-1 px-1 border-2 border-black bg-celestialblue text-white rounded-md hover:bg-frenchblue font-semibold"
              onClick={() => deleteFood(id)}
            >
              Remove
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
