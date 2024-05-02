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
    <>
      <h1>Edit Meal Plan Page</h1>
      <form onSubmit={handleEditMealPlan}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={handleOnChange}
            value={newMealPlan.name}
            placeholder="Meal Plan Name"
            required
            autoComplete="off"
          />
        </label>
        <label>
          Total Calories
          <input
            name="totalCalories"
            type="text"
            onChange={handleOnChange}
            value={newMealPlan.totalCalories}
            autoComplete="off"
          />
        </label>
        <label>
          Total Protein
          <input
            name="totalProtein"
            type="text"
            onChange={handleOnChange}
            value={newMealPlan.totalProtein}
            autoComplete="off"
          />
        </label>
        <label>
          Total Carbohydrates
          <input
            name="totalCarbohydrates"
            type="text"
            onChange={handleOnChange}
            value={newMealPlan.totalCarbohydrates}
            autoComplete="off"
          />
        </label>
        <label>
          Total Fat
          <input
            name="totalFat"
            type="text"
            onChange={handleOnChange}
            value={newMealPlan.totalFat}
            autoComplete="off"
          />
        </label>
        <button type="submit">Edit Meal Plan</button>
      </form>
    </>
  );
}
