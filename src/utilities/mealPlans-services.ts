/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";

// Internal
import sendRequest from "./send-request";

// Types
import { MealPlanType } from "../types";

/*--------------------------------- Variable Declarations ------------------------------*/
const BASE_URL = "/mealplans";

/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create a meal plan
export function createMealPlanData(mealPlan: MealPlanType) {
  return sendRequest(`${BASE_URL}/create`, "POST", mealPlan);
}

// Send request to backend to read the meal plans
export function getMealPlansData() {
  return sendRequest(`${BASE_URL}/read`, "GET", null);
}

// Send request to backend to update a meal plan
export function editMealPlan(mealPlan: MealPlanType) {
  return sendRequest(`${BASE_URL}/update`, "POST", mealPlan);
}

// Send request to backend to delete a meal plan
export function deleteMealPlan(id: Types.ObjectId) {
  return sendRequest(`${BASE_URL}/delete`, "POST", { id });
}

// Send request to backend to add a food to a meal plan
export function addFoodToMealPlan(id: Types.ObjectId, foodId: Types.ObjectId) {
  return sendRequest(`${BASE_URL}/add`, "POST", { id, foodId });
}

// Send request to backend to remove a food from a meal plan
export function removeFoodFromMealPlan(id: any, foodId: Types.ObjectId) {
  return sendRequest(`${BASE_URL}/remove`, "POST", { id, foodId });
}
