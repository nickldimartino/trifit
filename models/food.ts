/*----------------------------------- Module Imports -----------------------------------*/
// External
import mongoose from "mongoose";

// Types
import { FoodType } from "../src/types";

/*-------------------------------- Variable Declarations -------------------------------*/
const Schema = mongoose.Schema;

/*----------------------------------- Schema -----------------------------------*/
const FoodSchema = new Schema<FoodType>(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
      default: 0,
    },
    protein: {
      type: Number,
      required: true,
      default: 0,
    },
    carbohydrates: {
      type: Number,
      required: true,
      default: 0,
    },
    fat: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = mongoose.model("FoodSchema", FoodSchema);
