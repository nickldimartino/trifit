// Internal
import sendRequest from "./send-request";
/*--------------------------------- Variable Declarations ------------------------------*/
var BASE_URL = "/workouts";
/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create a workout
export function createWorkoutData(workout) {
    return sendRequest("".concat(BASE_URL, "/create"), "POST", workout);
}
// Send request to backend to read the workouts
export function getWorkoutsData() {
    return sendRequest("".concat(BASE_URL, "/read"), "GET", null);
}
// Send request to backend to update a workout
export function editWorkout(workout) {
    return sendRequest("".concat(BASE_URL, "/update"), "POST", workout);
}
// Send request to backend to delete a workout
export function deleteWorkout(id) {
    return sendRequest("".concat(BASE_URL, "/delete"), "POST", { id: id });
}
// Send request to backend to add an exercise to a workout
export function addExerciseToWorkout(id, exerciseId) {
    return sendRequest("".concat(BASE_URL, "/add"), "POST", { id: id, exerciseId: exerciseId });
}
// Send request to backend to remove an exercise from a workout
export function removeExerciseFromWorkout(id, exerciseId) {
    return sendRequest("".concat(BASE_URL, "/remove"), "POST", { id: id, exerciseId: exerciseId });
}
