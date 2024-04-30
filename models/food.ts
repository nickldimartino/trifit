import mongoose from "mongoose";
import { FoodType } from "../src/types";
const Schema = mongoose.Schema;

const FoodSchema = new Schema<FoodType>({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true,
        default: 0
    },
    protein: {
        type: Number,
        required: true,
        default: 0
    },
    carbohydrates: {
        type: Number,
        required: true,
        default: 0
    },
    fat: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("FoodSchema", FoodSchema);
