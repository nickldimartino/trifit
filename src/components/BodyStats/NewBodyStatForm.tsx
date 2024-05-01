import { useState } from "react";
import { UserDataType } from "../../types";

export default function NewBodyStatForm({ addBodyStat, user }: { addBodyStat: Function, user: UserDataType }) {
  const [newBodyStat, setNewBodyStat] = useState({
    calories: 0,
    weight: 0,
    date: "",
  });

  function handleAddBodyStat(evt: React.ChangeEvent<any>) {
    evt.preventDefault();
    addBodyStat(newBodyStat);
    setNewBodyStat({
      calories: 0,
      weight: 0,
      date: "",
    });
  }

  function handleOnChange(evt: React.ChangeEvent<any>) {
    const newWorkoutData = {
      ...newBodyStat,
      [evt.target.name]: evt.target.value,
    };
    setNewBodyStat(newWorkoutData);
  }

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
        <label>
          Today's Date (MM/DD/YYYY)
          <input
            name="date"
            type="text"
            onChange={handleOnChange}
            value={newBodyStat.date}
            required
          />
        </label>
        <button type="submit">Add Stats</button>
      </form>
    </>
  );
}
