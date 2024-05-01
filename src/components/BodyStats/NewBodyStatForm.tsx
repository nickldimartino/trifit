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
    <>
      <h1>Add Body Stat Form</h1>
      <form onSubmit={handleAddBodyStat}>
        <label>
          Today's Caloric Intake
          <input
            name="calories"
            type="text"
            onChange={handleOnChange}
            value={newBodyStat.calories}
            placeholder="Calories"
            required
          />
        </label>
        <label>
          Today's Body Weight
          <input
            name="weight"
            type="text"
            onChange={handleOnChange}
            value={newBodyStat.weight}
            required
          />
        </label>
        <button type="submit">Add Stats</button>
      </form>
    </>
  );
}
