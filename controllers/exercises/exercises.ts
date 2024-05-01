/*----------------------------------- Module Imports -----------------------------------*/
import { Request, Response } from "express";

const ExerciseSchema = require("../../models/exercise");

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = {
  create,
  read,
  update,
  deleteExercise,
};

/*------------------------------------- Functions --------------------------------------*/
// Create a new exercise in the database
export async function create(req: Request, res: Response) {
  try {
    // create the exercise in the database
    const exercise = await ExerciseSchema.create(req.body);

    // respond with the created exercise
    res.json(exercise);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Get all the exercises from the database
export async function read(req: Request, res: Response) {
  try {
    // find all the exercises in the database
    let exercises = await ExerciseSchema.find({});

    // respond with all of the exercises
    res.json(exercises);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Edit the received exercise
export async function update(req: Request, res: Response) {
  try {
    // find the received exercise in the database
    const exercise = await ExerciseSchema.findById(req.body.id);

    // update the database information with the received information
    exercise.name = req.body.name;
    exercise.type = req.body.type;
    exercise.muscle = req.body.muscle;
    exercise.grip = req.body.grip;
    exercise.width = req.body.width;

    // save the updated exercise
    await exercise.save();

    // get all of the exercises in the database
    const exercises = await ExerciseSchema.find({});

    // respond with all of the exercises
    res.json(exercises);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Delete an exercise from the database
export async function deleteExercise(req: Request, res: Response) {
  try {
    // find the received exercise in the database and delete it
    await ExerciseSchema.findOneAndDelete({ _id: req.body.id });

    // get all of the database exercises
    const exercises = await ExerciseSchema.find({});

    // respond with all of the exercises
    res.json(exercises);
  } catch (err) {
    res.status(400).json(err);
  }
}
