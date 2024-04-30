import { Types } from "mongoose";
import { WorkoutType } from "../types";
import sendRequest from "./send-request";

const BASE_URL = "/workouts";

export function getWorkoutsData() {
    return sendRequest(`${BASE_URL}/show`, "GET", null); 
}

export function createWorkoutData(workout: WorkoutType) {
    return sendRequest(`${BASE_URL}/create`, "POST", workout);
}

export function editWorkout(exercise: WorkoutType) {
    return sendRequest(`${BASE_URL}/edit`, "POST", exercise);
}

export function deleteWorkout(id: Types.ObjectId) {
    return sendRequest(`${BASE_URL}/delete`, "POST", {id});
}
