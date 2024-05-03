/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useState } from "react";

/*------------------------------------- Functions --------------------------------------*/
export default function NewBodyStatForm({
  addBodyStat,
}: {
  addBodyStat: Function;
}) {
  // new body stat state
  const [newBodyStat, setNewBodyStat] = useState({
    calories: 0,
    weight: 0,
  });

  // handles the add body stat submit form
  function handleAddBodyStat(evt: React.ChangeEvent<any>) {
    // prevent the page from rendering
    evt.preventDefault();

    // add the body stat
    addBodyStat(newBodyStat);

    // reset the body stat values
    setNewBodyStat({
      calories: 0,
      weight: 0,
    });
  }

  // handles the user inputs form while typing
  function handleOnChange(evt: React.ChangeEvent<any>) {
    // adds keystrokes to the input box value
    const newWorkoutData = {
      ...newBodyStat,
      [evt.target.name]: evt.target.value,
    };

    // sets the new body stat state
    setNewBodyStat(newWorkoutData);
  }

  // render the add body stat form
  return (
    <div className="flex justify-center items-center w-full h-5/6 mt-7">
      <div className="flex justify-center items-center flex-col w-1/2 bg-citrine shadow-lg rounded-lg border-2 border-black">
        <h1 className="text-2xl block text-center text-black font-semibold">
          <i className="fa-solid fa-user"></i> Add a Body Stat
        </h1>
        <hr className="mt-1" />
        <form className="p-3" onSubmit={handleAddBodyStat}>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Today's Caloric Intake (kcal)
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="calories"
              type="text"
              onChange={handleOnChange}
              value={newBodyStat.calories}
              placeholder="Calories"
              required
              autoComplete="off"
            />
          </label>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Today's Body Weight (pounds/lbs)
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="weight"
              type="text"
              onChange={handleOnChange}
              value={newBodyStat.weight}
              required
              autoComplete="off"
            />
          </label>
          <div className="mt-5">
            <button className="mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-frenchblue font-semibold">
              <i className="fa-solid fa-right-to-bracket"></i>Add Body Stat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
