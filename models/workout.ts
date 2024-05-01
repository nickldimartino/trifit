/*----------------------------------- Module Imports -----------------------------------*/
// External
import mongoose from "mongoose";

// Types
import { WorkoutType } from "../src/types";

/*-------------------------------- Variable Declarations -------------------------------*/
const Schema = mongoose.Schema;

/*----------------------------------- Schema -----------------------------------*/
const WorkoutSchema = new Schema<WorkoutType>(
  {
    name: {
      type: String,
      required: true,
      default: "New Workout",
    },
    exercises: [
      {
        type: Schema.Types.ObjectId,
        ref: "Exercise",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = mongoose.model("WorkoutSchema", WorkoutSchema);
