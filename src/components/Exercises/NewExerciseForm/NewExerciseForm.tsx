/*----------------------------------- Module Imports -----------------------------------*/
// External
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
    <div className="flex justify-center items-center w-3/4">
      <div className="flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full bg-caramel shadow-lg rounded-lg border-2 border-black">
        <h1 className="text-2xl block text-center text-black font-semibold">
          <i className="fa-solid fa-user"></i> Add an Exercise
        </h1>
        <hr className="mt-1" />
        <form onSubmit={handleAddExercise}>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Name
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="name"
              type="text"
              onChange={handleOnChange}
              value={newExercise.name}
              placeholder="Exercise Name"
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
              value={newExercise.type}
              placeholder="Exercise Type"
              required
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Muscle
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="muscle"
              type="text"
              onChange={handleOnChange}
              value={newExercise.muscle}
              placeholder="Main Muscle"
              required
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Hand/Foot Placement
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="grip"
              type="text"
              onChange={handleOnChange}
              value={newExercise.grip}
              placeholder="Hand/Foot Placement"
              required
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Width
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="width"
              type="text"
              onChange={handleOnChange}
              value={newExercise.width}
              placeholder="Hand Width"
              required
              autoComplete="off"
            />
          </label>
          <div className="mt-5">
            <button className="mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-frenchblue font-semibold">
              <i className="fa-solid fa-right-to-bracket"></i>Add Exercise
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
