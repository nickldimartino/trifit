/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useState } from "react";

/*------------------------------------- Functions --------------------------------------*/
export default function NewFoodForm({ addNewFood }: { addNewFood: Function }) {
  // new food state
  const [newFood, setNewFood] = useState({
    name: "",
    type: "",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  });

  // handle the form submission to add a food
  function handleAddFood(evt: React.ChangeEvent<any>) {
    // prevent the page from rerendering
    evt.preventDefault();

    // add the new food
    addNewFood(newFood);

    // reset the new food state
    setNewFood({
      name: "",
      type: "",
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
    });
  }

  // handles the keystrokes of the user for the input elements
  function handleOnChange(evt: React.ChangeEvent<any>) {
    // adds each keystroke to the state value
    const newFoodData = { ...newFood, [evt.target.name]: evt.target.value };

    // set the state value with the new value
    setNewFood(newFoodData);
  }

  // render the New Food form
  return (
    <div className="flex justify-center items-center w-3/5">
      <div className="flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full bg-yellowgreen shadow-lg rounded-lg border-2 border-black">
        <h1 className="text-2xl block text-center text-black font-semibold">
          <i className="fa-solid fa-user"></i> Add a Food
        </h1>
        <hr className="mt-1" />
        <form onSubmit={handleAddFood}>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Name
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="name"
              type="text"
              onChange={handleOnChange}
              value={newFood.name}
              placeholder="Food Name"
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
              placeholder="Food Type"
              required
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Calories
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="calories"
              type="number"
              onChange={handleOnChange}
              value={newFood.calories}
              placeholder="Calories"
              required
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Protein
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="protein"
              type="number"
              onChange={handleOnChange}
              value={newFood.protein}
              placeholder="Protein"
              required
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Carbohyrates
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="carbohydrates"
              type="number"
              onChange={handleOnChange}
              value={newFood.carbohydrates}
              placeholder="Carbohydrates"
              required
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Fat
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="fat"
              type="number"
              onChange={handleOnChange}
              value={newFood.fat}
              placeholder="Fat"
              required
              autoComplete="off"
            />
          </label>
          <div className="mt-5">
            <button className="mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-orange-400 font-semibold">
              <i className="fa-solid fa-right-to-bracket"></i>Add Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
