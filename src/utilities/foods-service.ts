import { Types } from "mongoose";
import { FoodType } from "../types";
import sendRequest from "./send-request";

const BASE_URL = "/foods";

export function createFoodData(food: FoodType) {
    return sendRequest(`${BASE_URL}/create`, "POST", food);
}

export function getFoodData() {
    return sendRequest(`${BASE_URL}/read`, "GET", null); 
}

export function editFood(food: FoodType) {
    return sendRequest(`${BASE_URL}/update`, "POST", food);
}

export function deleteFood(id: Types.ObjectId) {
    return sendRequest(`${BASE_URL}/delete`, "POST", {id});
}
