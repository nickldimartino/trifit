/*----------------------------------- Module Imports -----------------------------------*/
import { Types } from "mongoose";

import { ExerciseType } from "../types";
import sendRequest from "./send-request";

/*--------------------------------- Variable Declarations ------------------------------*/
const BASE_URL = "/exercises";

/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create an exercise
export function createExerciseData(exercise: ExerciseType) {
  return sendRequest(`${BASE_URL}/create`, "POST", exercise);
}

// Send request to backend to read the exercises
export function getExerciseData() {
  return sendRequest(`${BASE_URL}/read`, "GET", null);
}

// Send request to backend to update an exercise
export function editExercise(exercise: ExerciseType) {
  return sendRequest(`${BASE_URL}/update`, "POST", exercise);
}

// Send request to backend to delete an exercise
export function deleteExercise(id: Types.ObjectId) {
  return sendRequest(`${BASE_URL}/delete`, "POST", { id });
}
