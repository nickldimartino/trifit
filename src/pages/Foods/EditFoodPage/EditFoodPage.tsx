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
    <>
      <h1>Edit Food Page</h1>
      <form onSubmit={handleEditFood}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={handleOnChange}
            value={newFood.name}
            placeholder={name}
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
            placeholder={type}
            required
            autoComplete="off"
          />
        </label>
        <label>
          Calories
          <input
            name="calories"
            type="text"
            onChange={handleOnChange}
            value={newFood.calories}
            placeholder={calories}
            required
            autoComplete="off"
          />
        </label>
        <label>
          Protein
          <input
            name="protein"
            type="text"
            onChange={handleOnChange}
            value={newFood.protein}
            placeholder={protein}
            required
            autoComplete="off"
          />
        </label>
        <label>
          Carbohydrates
          <input
            name="carbohydrates"
            type="text"
            onChange={handleOnChange}
            value={newFood.carbohydrates}
            placeholder={carbohydrates}
            required
            autoComplete="off"
          />
        </label>
        <label>
          Fat
          <input
            name="fat"
            type="text"
            onChange={handleOnChange}
            value={newFood.fat}
            placeholder={fat}
            required
            autoComplete="off"
          />
        </label>
        <button type="submit">Confirm Edit</button>
      </form>
    </>
  );
}
