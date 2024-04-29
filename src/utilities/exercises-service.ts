import { Types } from "mongoose";
import { ExerciseType, UserDataObj } from "../types";
import sendRequest from "./send-request";

const BASE_URL = "/exercises";

export function getExerciseData() {
    return sendRequest(`${BASE_URL}/show`, "GET", null); 
}

export function createExerciseData(exercise: ExerciseType) {
    return sendRequest(`${BASE_URL}/create`, "POST", exercise);
}

export function editExercise(exercise: ExerciseType) {
    return sendRequest(`${BASE_URL}/edit`, "POST", exercise);
}

export function deleteExercise(id: Types.ObjectId) {
    return sendRequest(`${BASE_URL}/delete`, "POST", {id});
}

export function addExerciseToTemplate(id: Types.ObjectId, user: UserDataObj) {
    return sendRequest(`${BASE_URL}/add`, "POST", {id, user});
}
