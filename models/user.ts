import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { ExerciseType } from "../src/types";
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;  // 6 is a reasonable value

const userSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    },
    isAdmin: {
        type: String,
        default: false,
        required: true,
    },
    workouts: {
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    },
    mealPlans: {
        type: Schema.Types.ObjectId,
        ref: "Food"
    },
    dailyCalories: {
        type: [Number],
        default: []
    },
    weights: {
        type: [Number],
        default: []
    }
}, {
    timestamps: true,
    // Even though it's hashed - don't serialize the password
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre('save', async function (next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});

module.exports = mongoose.model('User', userSchema);
