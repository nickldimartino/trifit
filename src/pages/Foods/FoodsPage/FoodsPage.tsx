/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { useEffect, useState } from "react";

// Internal
import FoodsList from "../../../components/Foods/FoodsList/FoodsList";
import NewFoodForm from "../../../components/Foods/NewFoodForm/NewFoodForm";
import * as foodsService from "../../../utilities/foods-service";

// Types
import { FoodType, UserDataType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function FoodsPage({
  foods,
  setFoods,
  user,
  addFoodToMealPlan,
}: {
  foods: any;
  setFoods: Function;
  user: UserDataType;
  addFoodToMealPlan: Function;
}) {
  // new food state
  const [newFood, setNewFood] = useState<FoodType[]>([]);

  // get all the foods
  async function getFoods() {
    // get the foods from the database
    let newFoodSet = await foodsService.getFoodData();

    // set the foods state to all the foods
    setFoods(newFoodSet);
  }

  // add a new food
  async function addNewFood(food: FoodType) {
    // add the food to the database
    await foodsService.createFoodData(food);

    // set the food state to the new food
    setNewFood([...newFood, food]);
  }

  // delete a food
  async function deleteFood(id: Types.ObjectId) {
    // delete the food and get all the foods from the database
    const updatedFoods = await foodsService.deleteFood(id);

    // set the foods state to the retrieved foods
    setFoods(updatedFoods);
  }

  // render the page once on state change
  useEffect(
    () => {
      getFoods();
    }, // eslint-disable-next-line
    [newFood]
  );

  // render the New Food Form and the Food List
  return (
    <>
      <div className="flex justify-around mt-10">
        <div className="w-3/4">
          <FoodsList
            foods={foods}
            addFoodToMealPlan={addFoodToMealPlan}
            deleteFood={deleteFood}
            user={user}
          />
        </div>
        {user.isAdmin === "true" ? (
          <div className="flex justify-center mb-5 w-3/4">
            <NewFoodForm addNewFood={addNewFood} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
