import { Types } from "mongoose";
import { WorkoutType } from "../types";
import sendRequest from "./send-request";

const BASE_URL = "/workouts";

export function createWorkoutData(workout: WorkoutType) {
    return sendRequest(`${BASE_URL}/create`, "POST", workout);
}

export function getWorkoutsData() {
    return sendRequest(`${BASE_URL}/read`, "GET", null); 
}

export function editWorkout(workout: WorkoutType) {
    return sendRequest(`${BASE_URL}/update`, "POST", workout);
}

export function deleteWorkout(id: Types.ObjectId) {
    return sendRequest(`${BASE_URL}/delete`, "POST", {id});
}

export function addExerciseToWorkout(id: Types.ObjectId, exerciseId: Types.ObjectId) {
    return sendRequest(`${BASE_URL}/add`, "POST", {id, exerciseId});
}

export function removeExerciseFromWorkout(id: any, exerciseId: Types.ObjectId) {
    return sendRequest(`${BASE_URL}/remove`, "POST", {id, exerciseId});
}
