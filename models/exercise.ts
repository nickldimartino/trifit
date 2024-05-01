/*----------------------------------- Module Imports -----------------------------------*/
import mongoose from "mongoose";

import { ExerciseType } from "../src/types";

/*-------------------------------- Variable Declarations -------------------------------*/
const Schema = mongoose.Schema;

/*----------------------------------- Schema -----------------------------------*/
const ExerciseSchema = new Schema<ExerciseType>(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    muscle: {
      type: String,
      required: true,
    },
    grip: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = mongoose.model("ExerciseSchema", ExerciseSchema);
