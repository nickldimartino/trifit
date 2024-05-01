import { Types } from "mongoose";
import { ExerciseType, UserDataType } from "../types";
import sendRequest from "./send-request";

const BASE_URL = "/exercises";

export function createExerciseData(exercise: ExerciseType) {
    return sendRequest(`${BASE_URL}/create`, "POST", exercise);
}

export function getExerciseData() {
    return sendRequest(`${BASE_URL}/read`, "GET", null); 
}

export function editExercise(exercise: ExerciseType) {
    return sendRequest(`${BASE_URL}/update`, "POST", exercise);
}

export function deleteExercise(id: Types.ObjectId) {
    return sendRequest(`${BASE_URL}/delete`, "POST", {id});
}

// export function addExerciseToWorkout(id: Types.ObjectId, user: UserDataType) {
//     return sendRequest(`${BASE_URL}/add`, "POST", {id, user});
// }
