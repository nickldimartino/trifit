/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Internal
import { FoodType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function EditFoodPage({ editFood }: { editFood: Function }) {
  // save the URL path parameters
  const { id, name, type, calories, protein, carbohydrates, fat } = useParams();

  // state for the new food
  const [newFood, setNewFood] = useState({
    name: "",
    type: "",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  });

  // save the navigation
  const navigate = useNavigate();

  // handle the form submission to edit a food
  function handleEditFood(evt: React.ChangeEvent<any>) {
    // prevent the page from rerendering
    evt.preventDefault();

    // create an object with the new food information
    const edittedFoodData: FoodType = {
      id: new Types.ObjectId(id),
      name: newFood.name,
      type: newFood.type,
      calories: newFood.calories,
      protein: newFood.protein,
      carbohydrates: newFood.carbohydrates,
      fat: newFood.fat,
    };

    // edit the food
    editFood(edittedFoodData);

    // navigate to the foods page
    navigate("/foods");
  }

  // handle the keystrokes for the input elements
  function handleOnChange(evt: React.ChangeEvent<any>) {
    // save each keystroke in the state
    const newExerciseData = { ...newFood, [evt.target.name]: evt.target.value };

    // set the state to the new keystrokes
    setNewFood(newExerciseData);
  }

  // render the Edit Food Page
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-4xl mt-7 mb-5 ">Edit the Food</h1>
      <div className="flex justify-center items-center w-3/5 mb-5">
        <div className="flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full bg-yellowgreen shadow-lg rounded-lg border-2 border-black">
          <form onSubmit={handleEditFood}>
            <label className="text-left block text-base mt-2 text-black font-semibold">
              Name
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                name="name"
                type="text"
                onChange={handleOnChange}
                value={newFood.name}
                placeholder={name}
                required
                autoComplete="off"
              />
            </label>
            <label className="text-left block text-base mt-2 text-black font-semibold">
              Type
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                name="type"
                type="text"
                onChange={handleOnChange}
                value={newFood.type}
                placeholder={type}
                required
                autoComplete="off"
              />
            </label>
            <label className="text-left block text-base mt-2 text-black font-semibold">
              Calories
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                name="calories"
                type="text"
                onChange={handleOnChange}
                value={newFood.calories}
                placeholder={calories}
                required
                autoComplete="off"
              />
            </label>
            <label className="text-left block text-base mt-2 text-black font-semibold">
              Protein
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                name="protein"
                type="text"
                onChange={handleOnChange}
                value={newFood.protein}
                placeholder={protein}
                required
                autoComplete="off"
              />
            </label>
            <label className="text-left block text-base mt-2 text-black font-semibold">
              Carbohydrates
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                name="carbohydrates"
                type="text"
                onChange={handleOnChange}
                value={newFood.carbohydrates}
                placeholder={carbohydrates}
                required
                autoComplete="off"
              />
            </label>
            <label className="text-left block text-base mt-2 text-black font-semibold">
              Fat
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                name="fat"
                type="text"
                onChange={handleOnChange}
                value={newFood.fat}
                placeholder={fat}
                required
                autoComplete="off"
              />
            </label>
            <div className="mt-5">
              <button className="mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-orange-400 font-semibold">
                <i className="fa-solid fa-right-to-bracket"></i>Confirm Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
