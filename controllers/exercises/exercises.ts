import { Request, Response } from "express";
const ExerciseSchema = require("../../models/exercise");

module.exports = {
    show,
    create,
    edit,
    deleteExercise
}

export async function show(req: Request, res: Response) {
    try {
        let exercises = await ExerciseSchema.find({});
        res.json(exercises);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function create(req: Request, res: Response) {
    try {
        await ExerciseSchema.create(req.body);
        res.json(req.body);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function edit(req: Request, res: Response) {
    try {
        const exercise = await ExerciseSchema.findById(req.body.id);

        exercise.name = req.body.name;
        exercise.type = req.body.type;
        exercise.muscle = req.body.muscle;
        exercise.grip = req.body.grip;
        exercise.width = req.body.width;

        await exercise.save();

        const exercises = await ExerciseSchema.find({});

        res.json(exercises);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function deleteExercise(req: Request, res: Response) {
    try {
        await ExerciseSchema.findOneAndDelete({_id: req.body.id});
        const exercises = await ExerciseSchema.find({});
        res.json(exercises);
    } catch (err) {
        res.status(400).json(err);
    }
}
