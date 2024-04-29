import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
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
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    carbohydrates: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("FoodSchema", FoodSchema);
