/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Types
import { MealPlanType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function EditMealPlanPage({
  editMealPlan,
}: {
  editMealPlan: Function;
}) {
  // save the id in the URL path
  const { id } = useParams();

  // new meal plan state
  const [newMealPlan, setNewMealPlan] = useState({
    name: "",
    foods: [],
    totalCalories: 0,
    totalProtein: 0,
    totalCarbohydrates: 0,
    totalFat: 0,
  });

  // save the navigation
  const navigate = useNavigate();

  // handle the form submission to edit a meal plan
  function handleEditMealPlan(evt: React.ChangeEvent<any>) {
    // prevent the page from rerendering
    evt.preventDefault();

    // created a new object to for the meal plan to edit
    const edittedMealPlanData: MealPlanType = {
      id: new Types.ObjectId(id),
      name: newMealPlan.name,
      foods: newMealPlan.foods,
      totalCalories: newMealPlan.totalCalories,
      totalProtein: newMealPlan.totalProtein,
      totalCarbohydrates: newMealPlan.totalCarbohydrates,
      totalFat: newMealPlan.totalFat,
    };

    // edit the meal plan
    editMealPlan(edittedMealPlanData);

    // navigate to the meal plans page
    navigate("/mealplans");
  }

  // handle the keystrokes for the input elements
  function handleOnChange(evt: React.ChangeEvent<any>) {
    // save each keystroke in the state
    const newMealPlanData = {
      ...newMealPlan,
      [evt.target.name]: evt.target.value,
    };

    // set the new state
    setNewMealPlan(newMealPlanData);
  }

  // render the Edit Meal Plan Page
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-4xl mt-7 mb-5 ">Edit the Meal Plan</h1>
      <div className="flex justify-center items-center w-3/5 mb-5">
        <div className="flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full bg-yellowgreen shadow-lg rounded-lg border-2 border-black">
          <form onSubmit={handleEditMealPlan}>
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
                <i className="fa-solid fa-right-to-bracket"></i>Confirm Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
