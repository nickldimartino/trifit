/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Types
import { ExerciseType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function EditExercisePage({
  editExercise,
}: {
  editExercise: Function;
}) {
  // save the params in the URL path
  const { id, name, type, muscle, grip, width } = useParams();

  // new exercise state
  const [newExercise, setNewExercise] = useState({
    name: "",
    type: "",
    muscle: "",
    grip: "",
    width: "",
  });

  // save the navigation
  const navigate = useNavigate();

  // handles the form submission to edit an exercise
  function handleEditExercise(evt: React.ChangeEvent<any>) {
    // prevent the page from rerendering
    evt.preventDefault();

    // create a new object with the information to edit the exercise
    const edittedExerciseData: ExerciseType = {
      id: new Types.ObjectId(id),
      name: newExercise.name,
      type: newExercise.type,
      muscle: newExercise.muscle,
      grip: newExercise.grip,
      width: newExercise.width,
    };

    // edit the exercise
    editExercise(edittedExerciseData);

    // navigate to the exercises page
    navigate("/exercises");
  }

  // handles the keystrokes for the input elements
  function handleOnChange(evt: React.ChangeEvent<any>) {
    // save each keystroke in the state
    const newExerciseData = {
      ...newExercise,
      [evt.target.name]: evt.target.value,
    };

    // set the state with the  new keystrokes
    setNewExercise(newExerciseData);
  }

  // render the Edit Exercise Page
  return (
    <>
      <h1>Edit Exercise Page</h1>
      <form onSubmit={handleEditExercise}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={handleOnChange}
            value={newExercise.name}
            placeholder={name}
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
            placeholder={type}
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
            placeholder={muscle}
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
            placeholder={grip}
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
            placeholder={width}
            required
          />
        </label>
        <button type="submit">Confirm Edit</button>
      </form>
    </>
  );
}
