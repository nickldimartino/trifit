import mongoose from "mongoose";
import { MealPlanType } from "../src/types";
const Schema = mongoose.Schema;

const MealPlanSchema = new Schema<MealPlanType>({
    name: {
        type: String,
        required: true
    },
    foods: [{
        type: Schema.Types.ObjectId,
        ref: "Food"
    }],
    totalCalories: {
        type: Number,
        default: 0
    },
    totalProtein: {
        type: Number,
        default: 0
    },
    totalCarbohydrates: {
        type: Number,
        default: 0
    },
    totalFat: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("MealPlanSchema", MealPlanSchema);
