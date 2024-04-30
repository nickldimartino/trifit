import { Types } from "mongoose";

export interface UserDataType {
    name: string,
    email: string,
    password: string;
    isAdmin: string,
    workouts: ExerciseType[],
    mealPlans: FoodType[],
    dailyCalories: number[],
    weights: number[]
}

export interface UserType {
    name: string,
    email: string,
    password: string,
    _id: Types.ObjectId,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}

export interface CredentialsType {
    email: string,
    password: string
}

export interface ExerciseType {
    id: Types.ObjectId,
    name: string,
    type: string,
    muscle: string,
    grip: string,
    width: string
}

export interface FoodType {
    id: Types.ObjectId,
    name: string,
    type: string,
    calories: number,
    protein: number,
    carbohydrates: number,
    fat: number
}

export interface WorkoutType {
    id: Types.ObjectId,
    name: string,
    exercises: ExerciseType[]
}

export interface MealPlanType {
    id: Types.ObjectId,
    name: string,
    foods: FoodType[],
    totalCalories: number,
    totalProtein: number,
    totalCarbohydrates: number,
    totalFat: number
}
