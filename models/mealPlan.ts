/*----------------------------------- Module Imports -----------------------------------*/
// External
import mongoose from "mongoose";

// Types
import { MealPlanType } from "../src/types";

/*-------------------------------- Variable Declarations -------------------------------*/
const Schema = mongoose.Schema;

/*----------------------------------- Schema -----------------------------------*/
const MealPlanSchema = new Schema<MealPlanType>(
  {
    name: {
      type: String,
      required: true,
    },
    foods: [
      {
        type: Schema.Types.ObjectId,
        ref: "Food",
      },
    ],
    totalCalories: {
      type: Number,
      default: 0,
    },
    totalProtein: {
      type: Number,
      default: 0,
    },
    totalCarbohydrates: {
      type: Number,
      default: 0,
    },
    totalFat: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = mongoose.model("MealPlanSchema", MealPlanSchema);
