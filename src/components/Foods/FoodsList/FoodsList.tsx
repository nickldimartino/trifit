/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import FoodForm from "../FoodForm/FoodForm";

// Types
import { FoodType, UserDataType } from "../../../types";

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
  const foodItems: JSX.Element[] = foods.map((f: any, idx: number) => (
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
    <div className="flex flex-col justify-center items-center">
      <div className="bg-celestialblue w-5/6 rounded-lg text-white font-semibold mb-2 shadow-lg border-2 border-black">
        <h1 data-testid="foods-list-header">Foods</h1>
        <hr />
        <div className="grid grid-cols-6 font-semibold text-md bg-citrine text-black rounded-b-lg">
          <div className="flex justify-center items-center border rounded-bl-lg">
            Name
          </div>
          <div className="flex justify-center items-center border">Type</div>
          <div className="flex justify-center items-center border">
            Calories
          </div>
          <div className="flex justify-center items-center border">Protein</div>
          <div className="flex justify-center items-center border">Carbs</div>
          <div className="flex justify-center items-center border rounded-br-lg">
            Fat
          </div>
        </div>
      </div>
      {foodItems}
    </div>
  );
}
