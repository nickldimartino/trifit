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
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-4xl mt-7 mb-5 ">Edit the Exercise</h1>
      <div className="flex justify-center items-center w-1/2 mb-5">
        <div className="flex justify-center items-center flex-col min-w-1/2 w-1/2 min-h-3/4 h-full bg-caramel shadow-lg rounded-lg border-2 border-black">
          <form onSubmit={handleEditExercise}>
            <label className="text-left block text-base mt-2 text-black font-semibold">
              Name
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                name="name"
                type="text"
                onChange={handleOnChange}
                value={newExercise.name}
                placeholder={name}
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
                placeholder={type}
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
                placeholder={muscle}
                required
                autoComplete="off"
              />
            </label>
            <label className="text-left block text-base mt-2 text-black font-semibold">
              Grip
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                name="grip"
                type="text"
                onChange={handleOnChange}
                value={newExercise.grip}
                placeholder={grip}
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
                placeholder={width}
                required
                autoComplete="off"
              />
            </label>
            <div className="mt-5">
              <button className="mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-orange-400 font-semibold">
                <i className="fa-solid fa-right-to-bracket"></i>Confirm Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
