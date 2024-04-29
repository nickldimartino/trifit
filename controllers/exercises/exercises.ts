import { Request, Response } from "express";
const ExerciseSchema = require("../../models/exercise");

module.exports = {
    show,
    create
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
