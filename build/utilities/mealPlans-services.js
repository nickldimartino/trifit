// Internal
import sendRequest from "./send-request";
/*--------------------------------- Variable Declarations ------------------------------*/
var BASE_URL = "/mealplans";
/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create a meal plan
export function createMealPlanData(mealPlan) {
    return sendRequest("".concat(BASE_URL, "/create"), "POST", mealPlan);
}
// Send request to backend to read the meal plans
export function getMealPlansData() {
    return sendRequest("".concat(BASE_URL, "/read"), "GET", null);
}
// Send request to backend to update a meal plan
export function editMealPlan(mealPlan) {
    return sendRequest("".concat(BASE_URL, "/update"), "POST", mealPlan);
}
// Send request to backend to delete a meal plan
export function deleteMealPlan(id) {
    return sendRequest("".concat(BASE_URL, "/delete"), "POST", { id: id });
}
// Send request to backend to add a food to a meal plan
export function addFoodToMealPlan(id, foodId) {
    return sendRequest("".concat(BASE_URL, "/add"), "POST", { id: id, foodId: foodId });
}
// Send request to backend to remove a food from a meal plan
export function removeFoodFromMealPlan(id, foodId) {
    return sendRequest("".concat(BASE_URL, "/remove"), "POST", { id: id, foodId: foodId });
}
