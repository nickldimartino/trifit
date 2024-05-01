import { useState } from "react";

export default function NewWorkoutForm({
  addNewWorkout,
}: {
  addNewWorkout: Function;
}) {
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    exercises: [],
  });

  function handleAddWorkout(evt: React.ChangeEvent<any>) {
    evt.preventDefault();
    addNewWorkout(newWorkout);
    setNewWorkout({
      name: "",
      exercises: [],
    });
  }

  function handleOnChange(evt: React.ChangeEvent<any>) {
    const newWorkoutData = {
      ...newWorkout,
      [evt.target.name]: evt.target.value,
    };
    setNewWorkout(newWorkoutData);
  }

  return (
    <>
      <h1>New Workout Form</h1>
      <form onSubmit={handleAddWorkout}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={handleOnChange}
            value={newWorkout.name}
            placeholder="Workout Name"
            required
          />
        </label>
        <label>
          Exercises
          <input
            name="exercises"
            type="text"
            onChange={handleOnChange}
            value={newWorkout.exercises}
          />
        </label>
        <button type="submit">Add Food</button>
      </form>
    </>
  );
}
