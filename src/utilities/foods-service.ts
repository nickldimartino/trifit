/*----------------------------------- Module Imports -----------------------------------*/
import { Types } from "mongoose";

import { FoodType } from "../types";
import sendRequest from "./send-request";

/*--------------------------------- Variable Declarations ------------------------------*/
const BASE_URL = "/foods";

/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create a food
export function createFoodData(food: FoodType) {
  return sendRequest(`${BASE_URL}/create`, "POST", food);
}

// Send request to backend to read the foods
export function getFoodData() {
  return sendRequest(`${BASE_URL}/read`, "GET", null);
}

// Send request to backend to update a food
export function editFood(food: FoodType) {
  return sendRequest(`${BASE_URL}/update`, "POST", food);
}

// Send request to backend to delete a food
export function deleteFood(id: Types.ObjectId) {
  return sendRequest(`${BASE_URL}/delete`, "POST", { id });
}
