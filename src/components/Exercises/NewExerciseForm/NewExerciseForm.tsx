/*----------------------------------- Module Imports -----------------------------------*/
import { useState } from "react";

/*------------------------------------- Functions --------------------------------------*/
export default function NewExerciseForm({
  addNewExercise,
}: {
  addNewExercise: Function;
}) {
  // new exercise state
  const [newExercise, setNewExercise] = useState({
    name: "",
    type: "",
    muscle: "",
    grip: "",
    width: "",
  });

  // handles the add exercise form submission
  function handleAddExercise(evt: React.ChangeEvent<any>) {
    // prevents the page from rerendering
    evt.preventDefault();

    // adds the new exercise
    addNewExercise(newExercise);

    // resets the new exercise state
    setNewExercise({
      name: "",
      type: "",
      muscle: "",
      grip: "",
      width: "",
    });
  }

  // handles the changing inputs from the user
  function handleOnChange(evt: React.ChangeEvent<any>) {
    // adds each keystroke to the new exercise state
    const newExerciseData = {
      ...newExercise,
      [evt.target.name]: evt.target.value,
    };

    // sets the new exercise data to the state
    setNewExercise(newExerciseData);
  }

  // renders the New Exercise Form
  return (
    <>
      <h1>New Exercise Form</h1>
      <form onSubmit={handleAddExercise}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={handleOnChange}
            value={newExercise.name}
            placeholder="Exercise Name"
            required
          />
        </label>
        <label>
          Type
          <input
            name="type"
            type="text"
            onChange={handleOnChange}
            value={newExercise.type}
            placeholder="Exercise Type"
            required
          />
        </label>
        <label>
          Muscle
          <input
            name="muscle"
            type="text"
            onChange={handleOnChange}
            value={newExercise.muscle}
            placeholder="Main Muscle"
            required
          />
        </label>
        <label>
          Grip
          <input
            name="grip"
            type="text"
            onChange={handleOnChange}
            value={newExercise.grip}
            placeholder="Hand Grip"
            required
          />
        </label>
        <label>
          Width
          <input
            name="width"
            type="text"
            onChange={handleOnChange}
            value={newExercise.width}
            placeholder="Hand Width"
            required
          />
        </label>
        <button type="submit">Add Exercise</button>
      </form>
    </>
  );
}
