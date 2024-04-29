import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    muscle: {
        type: String,
        required: true
    },
    grip: {
        type: String,
        required: true
    },
    width: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("ExerciseSchema", ExerciseSchema);
