import { useState, useEffect } from "react";
import FoodsList from "../../../components/Foods/FoodsList/FoodsList";
import FoodsPicture from "../../../components/Foods/FoodsPicture/FoodsPicture";
import Logo from "../../../components/Logo/Logo";
import { FoodType, UserDataType } from "../../../types";
import { Types } from "mongoose";
import NewFoodForm from "../../../components/Foods/NewFoodForm/NewFoodForm";
import * as foodsService from "../../../utilities/foods-service";

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
  const [newFood, setNewFood] = useState<FoodType[]>([]);

  async function getFoods() {
    let newFoodSet = await foodsService.getFoodData();
    setFoods(newFoodSet);
  }

  async function addNewFood(food: FoodType) {
    await foodsService.createFoodData(food);
    setNewFood([...newFood, food]);
  }

  async function deleteFood(id: Types.ObjectId) {
    const updatedExercises = await foodsService.deleteFood(id);
    setFoods(updatedExercises);
  }

  useEffect(() => {
    getFoods();
  }, [newFood]);

  return (
    <>
      <Logo />
      <h1>Food Page Page</h1>
      <div>Filter</div>
      {user.isAdmin === "true" ? (
        <NewFoodForm addNewFood={addNewFood} />
      ) : (
        <hr />
      )}
      <div className="list-picture">
        <div>
          <FoodsList
            foods={foods}
            addFoodToMealPlan={addFoodToMealPlan}
            deleteFood={deleteFood}
            user={user}
          />
        </div>
        <FoodsPicture />
      </div>
    </>
  );
}
