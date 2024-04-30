import mongoose from "mongoose";
import { WorkoutType } from "../src/types";
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema<WorkoutType>({
    name: {
        type: String,
        required: true,
        default: "New Workout"
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise",
        default: []
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model("WorkoutSchema", WorkoutSchema);
