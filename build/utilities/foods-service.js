// Internal
import sendRequest from "./send-request";
/*--------------------------------- Variable Declarations ------------------------------*/
var BASE_URL = "/foods";
/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create a food
export function createFoodData(food) {
    return sendRequest("".concat(BASE_URL, "/create"), "POST", food);
}
// Send request to backend to read the foods
export function getFoodData() {
    return sendRequest("".concat(BASE_URL, "/read"), "GET", null);
}
// Send request to backend to update a food
export function editFood(food) {
    return sendRequest("".concat(BASE_URL, "/update"), "POST", food);
}
// Send request to backend to delete a food
export function deleteFood(id) {
    return sendRequest("".concat(BASE_URL, "/delete"), "POST", { id: id });
}
