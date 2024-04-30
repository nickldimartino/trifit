import { Request, Response } from "express";
const WorkoutSchema = require("../../models/workout");
const UserSchema = require("../../models/user");
const ExerciseSchema = require("../../models/exercise");

declare global {
    namespace Express {
        export interface Request {
            user?: Record<string, any> | null | undefined
        }
    }
}

module.exports = {
    show,
    create,
    edit,
    deleteWorkout,
    addExerciseToWorkout
}

export async function show(req: Request, res: Response) {
    try {
        const user = await UserSchema.findById(req.user?._id).populate("workouts");
        res.json(user.workouts);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function create(req: Request, res: Response) {
    try {
        const workout = await WorkoutSchema.create(req.body);

        const user = await UserSchema.findById(req.user?._id);

        if (user && !user.workouts.includes(workout._id)) {
            user.workouts.push(workout._id);
            await user.save();
        }

        res.json(req.body);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function edit(req: Request, res: Response) {
    try {
        const workout = await WorkoutSchema.findById(req.body.id);

        workout.name = req.body.name;
        workout.exercsises = req.body.exercsises;

        await workout.save();

        const workouts = await WorkoutSchema.find({});

        res.json(workouts);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function deleteWorkout(req: Request, res: Response) {
    try {
        const workout = await WorkoutSchema.findOneAndDelete({ _id: req.body.id });
        const workouts = await WorkoutSchema.find({});
        const user = await UserSchema.findById(req.user?._id);
        user.workouts.remove(workout._id);
        await user.save();
        res.json(workouts);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function addExerciseToWorkout(req: Request, res: Response) {
    try {
        const exercise = await ExerciseSchema.findById(req.body.exerciseId);
        const workout = await WorkoutSchema.findById(req.body.id);

        workout.exercises.push(exercise);

        await workout.save();

        res.json(exercise);
    } catch (err) {
        res.status(400).json(err);
    }
}
