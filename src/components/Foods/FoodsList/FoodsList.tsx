/*----------------------------------- Module Imports -----------------------------------*/
import { FoodType, UserDataType } from "../../../types";

import FoodForm from "../FoodForm/FoodForm";

/*------------------------------------- Functions --------------------------------------*/
export default function FoodsList({
  foods,
  deleteFood,
  addFoodToMealPlan,
  user,
}: {
  foods: FoodType[];
  deleteFood: Function;
  addFoodToMealPlan: Function;
  user: UserDataType;
}) {
  // maps each food to a new Food Form
  const foodItems = foods.map((f: any, idx: number) => (
    <FoodForm
      id={f._id}
      key={idx}
      name={f.name}
      type={f.type}
      calories={f.calories}
      protein={f.protein}
      carbohydrates={f.carbohydrates}
      fat={f.fat}
      deleteFood={deleteFood}
      addFoodToMealPlan={addFoodToMealPlan}
      user={user}
    />
  ));
  // renders the Food Form items
  return (
    <>
      <h1>Foods List</h1>
      {foodItems}
    </>
  );
}
