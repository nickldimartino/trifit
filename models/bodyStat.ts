/*----------------------------------- Module Imports -----------------------------------*/
// External
import mongoose from "mongoose";

// Types
import { BodyStatType } from "../src/types";

/*-------------------------------- Variable Declarations -------------------------------*/
const Schema = mongoose.Schema;

/*----------------------------------- Schema -----------------------------------*/
const BodyStatSchema = new Schema<BodyStatType>(
  {
    calories: {
      type: Number,
      required: true,
      default: 0,
    },
    weight: {
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
module.exports = mongoose.model("BodyStatSchema", BodyStatSchema);
