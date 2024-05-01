/*----------------------------------- Module Imports -----------------------------------*/
import { Types } from "mongoose";

import { WorkoutType } from "../types";
import sendRequest from "./send-request";

/*--------------------------------- Variable Declarations ------------------------------*/
const BASE_URL = "/workouts";

/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create a workout
export function createWorkoutData(workout: WorkoutType) {
  return sendRequest(`${BASE_URL}/create`, "POST", workout);
}

// Send request to backend to read the workouts
export function getWorkoutsData() {
  return sendRequest(`${BASE_URL}/read`, "GET", null);
}

// Send request to backend to update a workout
export function editWorkout(workout: WorkoutType) {
  return sendRequest(`${BASE_URL}/update`, "POST", workout);
}

// Send request to backend to delete a workout
export function deleteWorkout(id: Types.ObjectId) {
  return sendRequest(`${BASE_URL}/delete`, "POST", { id });
}

// Send request to backend to add an exercise to a workout
export function addExerciseToWorkout(
  id: Types.ObjectId,
  exerciseId: Types.ObjectId
) {
  return sendRequest(`${BASE_URL}/add`, "POST", { id, exerciseId });
}

// Send request to backend to remove an exercise from a workout
export function removeExerciseFromWorkout(id: any, exerciseId: Types.ObjectId) {
  return sendRequest(`${BASE_URL}/remove`, "POST", { id, exerciseId });
}
