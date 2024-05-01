import { Types } from "mongoose";
import { MealPlanType } from "../types";
import sendRequest from "./send-request";

const BASE_URL = "/mealplans";

export function createMealPlanData(mealPlan: MealPlanType) {
    return sendRequest(`${BASE_URL}/create`, "POST", mealPlan);
}

export function getMealPlansData() {
    return sendRequest(`${BASE_URL}/read`, "GET", null); 
}

export function editMealPlan(mealPlan: MealPlanType) {
    return sendRequest(`${BASE_URL}/update`, "POST", mealPlan);
}

export function deleteMealPlan(id: Types.ObjectId) {
    return sendRequest(`${BASE_URL}/delete`, "POST", {id});
}

export function addFoodToMealPlan(id: Types.ObjectId, foodId: Types.ObjectId) {
    return sendRequest(`${BASE_URL}/add`, "POST", {id, foodId});
}

export function removeFoodFromMealPlan(id: any, foodId: Types.ObjectId) {
    return sendRequest(`${BASE_URL}/remove`, "POST", {id, foodId});
}
