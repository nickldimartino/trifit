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
    <>
      <h1>New Food Form</h1>
      <form onSubmit={handleAddFood}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={handleOnChange}
            value={newFood.name}
            placeholder="Food Name"
            required
            autoComplete="off"
          />
        </label>
        <label>
          Type
          <input
            name="type"
            type="text"
            onChange={handleOnChange}
            value={newFood.type}
            placeholder="Food Type"
            required
            autoComplete="off"
          />
        </label>
        <label>
          Calories
          <input
            name="calories"
            type="number"
            onChange={handleOnChange}
            value={newFood.calories}
            placeholder="Calories"
            required
            autoComplete="off"
          />
        </label>
        <label>
          Protein
          <input
            name="protein"
            type="number"
            onChange={handleOnChange}
            value={newFood.protein}
            placeholder="Protein"
            required
            autoComplete="off"
          />
        </label>
        <label>
          Carbohyrates
          <input
            name="carbohydrates"
            type="number"
            onChange={handleOnChange}
            value={newFood.carbohydrates}
            placeholder="Carbohydrates"
            required
            autoComplete="off"
          />
        </label>
        <label>
          Fat
          <input
            name="fat"
            type="number"
            onChange={handleOnChange}
            value={newFood.fat}
            placeholder="Fat"
            required
            autoComplete="off"
          />
        </label>
        <button type="submit">Add Food</button>
      </form>
    </>
  );
}
