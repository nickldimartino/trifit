// Internal
import sendRequest from "./send-request";
/*--------------------------------- Variable Declarations ------------------------------*/
var BASE_URL = "/exercises";
/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create an exercise
export function createExerciseData(exercise) {
    return sendRequest("".concat(BASE_URL, "/create"), "POST", exercise);
}
// Send request to backend to read the exercises
export function getExerciseData() {
    return sendRequest("".concat(BASE_URL, "/read"), "GET", null);
}
// Send request to backend to update an exercise
export function editExercise(exercise) {
    return sendRequest("".concat(BASE_URL, "/update"), "POST", exercise);
}
// Send request to backend to delete an exercise
export function deleteExercise(id) {
    return sendRequest("".concat(BASE_URL, "/delete"), "POST", { id: id });
}
