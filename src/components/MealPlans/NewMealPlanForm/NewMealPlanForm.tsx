/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useState } from "react";

/*------------------------------------- Functions --------------------------------------*/
export default function NewMealPlanForm({
  addNewMealPlan,
}: {
  addNewMealPlan: Function;
}) {
  // new meal plan state
  const [newMealPlan, setNewMealPlan] = useState({
    name: "",
    foods: [],
    totalCalories: 0,
    totalProtein: 0,
    totalCarbohydrates: 0,
    totalFat: 0,
  });

  // handle the form submission to add a meal plan
  function handleAddMealPlan(evt: React.ChangeEvent<any>) {
    // prevent the page from rerendering
    evt.preventDefault();

    // add a new meal plan
    addNewMealPlan(newMealPlan);

    // reset the meal plan state
    setNewMealPlan({
      name: "",
      foods: [],
      totalCalories: 0,
      totalProtein: 0,
      totalCarbohydrates: 0,
      totalFat: 0,
    });
  }

  // handle the keystrokes for the user input
  function handleOnChange(evt: React.ChangeEvent<any>) {
    // add the keystrokes to the meal plan state
    const newMealPlanData = {
      ...newMealPlan,
      [evt.target.name]: evt.target.value,
    };

    // set the meal plan state
    setNewMealPlan(newMealPlanData);
  }
  // render the Meal Plan Form
  return (
    <div className="flex justify-center items-center w-1/2">
      <div className="flex justify-center items-center flex-col min-w-1/2 w-3/5 min-h-3/4 h-full bg-yellowgreen shadow-lg rounded-lg border-2 border-black">
        <h1 className="text-2xl block text-center text-black font-semibold">
          <i className="fa-solid fa-user"></i> Add a Meal Plan
        </h1>
        <hr className="mt-1" />
        <form onSubmit={handleAddMealPlan}>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Name
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="name"
              type="text"
              onChange={handleOnChange}
              value={newMealPlan.name}
              placeholder="Meal Plan Name"
              required
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Total Calories
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="totalCalories"
              type="text"
              onChange={handleOnChange}
              value={newMealPlan.totalCalories}
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Total Protein
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="totalProtein"
              type="text"
              onChange={handleOnChange}
              value={newMealPlan.totalProtein}
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Total Carbohydrates
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="totalCarbohydrates"
              type="text"
              onChange={handleOnChange}
              value={newMealPlan.totalCarbohydrates}
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Total Fat
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="totalFat"
              type="text"
              onChange={handleOnChange}
              value={newMealPlan.totalFat}
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
