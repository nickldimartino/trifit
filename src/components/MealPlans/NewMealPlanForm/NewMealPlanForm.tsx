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
    <>
      <h1>New Meal Plan Form</h1>
      <form onSubmit={handleAddMealPlan}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={handleOnChange}
            value={newMealPlan.name}
            placeholder="Meal Plan Name"
            required
          />
        </label>
        <label>
          Total Calories
          <input
            name="totalCalories"
            type="text"
            onChange={handleOnChange}
            value={newMealPlan.totalCalories}
          />
        </label>
        <label>
          Total Protein
          <input
            name="totalProtein"
            type="text"
            onChange={handleOnChange}
            value={newMealPlan.totalProtein}
          />
        </label>
        <label>
          Total Carbohydrates
          <input
            name="totalCarbohydrates"
            type="text"
            onChange={handleOnChange}
            value={newMealPlan.totalCarbohydrates}
          />
        </label>
        <label>
          Total Fat
          <input
            name="totalFat"
            type="text"
            onChange={handleOnChange}
            value={newMealPlan.totalFat}
          />
        </label>
        <button type="submit">Add Meal Plan</button>
      </form>
    </>
  );
}
