import { Request, Response } from "express";
const WorkoutSchema = require("../../models/workout");
const UserSchema = require("../../models/user");

module.exports = {
    show,
    create,
    edit,
    deleteWorkout
}

export async function show(req: Request, res: Response) {
    try {
        let workouts = await WorkoutSchema.find({});
        res.json(workouts);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function create(req: Request, res: Response) {
    try {
        await WorkoutSchema.create(req.body);
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
        await WorkoutSchema.findOneAndDelete({_id: req.body.id});
        const workouts = await WorkoutSchema.find({});
        res.json(workouts);
    } catch (err) {
        res.status(400).json(err);
    }
}
