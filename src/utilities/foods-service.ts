import { Types } from "mongoose";
import { FoodType, UserDataObj } from "../types";
import sendRequest from "./send-request";

const BASE_URL = "/foods";

export function getFoodData() {
    return sendRequest(`${BASE_URL}/show`, "GET", null); 
}

export function createFoodData(food: FoodType) {
    return sendRequest(`${BASE_URL}/create`, "POST", food);
}

export function editFood(food: FoodType) {
    return sendRequest(`${BASE_URL}/edit`, "POST", food);
}

export function deleteFood(id: Types.ObjectId) {
    return sendRequest(`${BASE_URL}/delete`, "POST", {id});
}

export function addFoodToMealPlan(id: Types.ObjectId, user: UserDataObj) {
    return sendRequest(`${BASE_URL}/add`, "POST", {id, user});
}