import mongoose from "mongoose";
import { BodyStatType } from "../src/types";
const Schema = mongoose.Schema;

const BodyStatSchema = new Schema<BodyStatType>({
    calories: {
        type: Number,
        required: true,
        default: 0
    },
    weight: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("BodyStatSchema", BodyStatSchema);
