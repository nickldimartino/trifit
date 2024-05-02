/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Types } from "mongoose";

/*--------------------------------------- Types ----------------------------------------*/
// User Data
export interface UserDataType {
  name: string;
  email: string;
  password: string;
  isAdmin: string;
  workouts: ExerciseType[];
  mealPlans: FoodType[];
  bodyStats: BodyStatType[];
}

// User
export interface UserType {
  name: string;
  email: string;
  password: string;
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

// Credentials
export interface CredentialsType {
  email: string;
  password: string;
}

// Exercises
export interface ExerciseType {
  id: Types.ObjectId;
  name: string;
  type: string;
  muscle: string;
  grip: string;
  width: string;
}

// Foods
export interface FoodType {
  id: Types.ObjectId;
  name: string;
  type: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
}

// Workouts
export interface WorkoutType {
  id: Types.ObjectId;
  name: string;
  exercises: ExerciseType[];
}

// Meal Plans
export interface MealPlanType {
  id: Types.ObjectId;
  name: string;
  foods: FoodType[];
  totalCalories: number;
  totalProtein: number;
  totalCarbohydrates: number;
  totalFat: number;
}

// Body Stats
export interface BodyStatType {
  calories: number;
  weight: number;
}

// Body Stats Coordinates for Scatter Plot
export interface BodyStarCoordinates {
  x: number;
  y: number;
}

// Data for the Body Stats Scatter PLot
export interface ScatterPlotData {
  datasets: {
    labels: string;
    data: Object[];
    backgroundColor: string;
    borderColor: string;
    pointBorderColor: string;
  }[];
}

// Request Object
export interface requestObjType {
  body?: string;
  headers?: {
    [key: string]: string;
  };
  method: string;
}

export interface SignUpFormProps {
  setUser: Function;
}

export interface SignUpFormState {
  name: string;
  email: string;
  password: string;
  confirm: string;
  isAdmin: string;
  workouts: ExerciseType[];
  mealPlans: FoodType[];
  bodyStats: BodyStatType[];
  error: string;
}
