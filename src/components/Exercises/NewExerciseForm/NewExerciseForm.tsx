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
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center flex-col p-2 bg-caramel shadow-lg rounded-lg border-2 border-black">
        <h1
          data-testid="new-exercise-header"
          className="text-2xl block text-center text-black font-semibold"
        >
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
              placeholder="Enter a name..."
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
              placeholder="Enter an exercise type..."
              required
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Main Muscle Groups Worked
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="muscle"
              type="text"
              onChange={handleOnChange}
              value={newExercise.muscle}
              placeholder="Enter the main muscle groups..."
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
              placeholder="Enter the hand/foot placement..."
              required
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Hand/Foot Width
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="width"
              type="text"
              onChange={handleOnChange}
              value={newExercise.width}
              placeholder="Enter the hand/foot width..."
              required
              autoComplete="off"
            />
          </label>
          <div className="mt-5">
            <button className="mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-frenchblue font-semibold">
              <i className="fa-solid fa-right-to-bracket"></i>Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
