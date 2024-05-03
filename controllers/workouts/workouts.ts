/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Request, Response } from "express";

// Internal
const ExerciseSchema = require("../../models/exercise");
const UserSchema = require("../../models/user");
const WorkoutSchema = require("../../models/workout");

/*----------------------------------- Type Declaration ---------------------------------*/
declare global {
  namespace Express {
    export interface Request {
      user?: Record<string, any> | null | undefined;
    }
  }
}

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = {
  create,
  read,
  update,
  deleteWorkout,
  addExerciseToWorkout,
  removeExerciseFromWorkout,
};

/*------------------------------------- Functions --------------------------------------*/
// Create a new workout in the database
export async function create(req: Request, res: Response) {
  try {
    // create a workout in the database from the received information
    const workout = await WorkoutSchema.create(req.body);

    // find the current user in the database
    const user = await UserSchema.findById(req.user?._id);

    // if a user exists and the user does not already have the workout,
    // add it and save the user
    if (user && !user.workouts.includes(workout._id)) {
      user.workouts.push(workout._id);
      await user.save();
    }

    // respond with the created meal plan
    res.json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Get all of the current user's workouts
export async function read(req: Request, res: Response) {
  try {
    // find the current user in the database
    const user = await UserSchema.findById(req.user?._id).populate("workouts");

    // respond with the user's workouts
    res.json(user.workouts);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Edit the received workout's information in the database
export async function update(req: Request, res: Response) {
  try {
    // find the workout in the database
    const workout = await WorkoutSchema.findById(req.body.id);

    // update the workout's information from the received information
    workout.name = req.body.name;

    // save the workout
    await workout.save();

    // find all the workout in the database
    const workouts = await WorkoutSchema.find({});

    // respond with the workouts
    res.json(workouts);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Delete a workout from the database
export async function deleteWorkout(req: Request, res: Response) {
  try {
    // find the workout in the database and delete it
    const workout = await WorkoutSchema.findOneAndDelete({ _id: req.body.id });

    // find all the workout in the database
    const workouts = await WorkoutSchema.find({});

    // find the current user in the database
    const user = await UserSchema.findById(req.user?._id);

    // remove the deleted workout from the user's meal plans
    if (user) user.workouts.remove(workout._id);

    // save the user
    await user.save();

    // respond with the workout
    res.json(workouts);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Add an exercise to a workout
export async function addExerciseToWorkout(req: Request, res: Response) {
  try {
    // find the received exercise data in the database
    const exercise = await ExerciseSchema.findById(req.body.exerciseId);

    // find the received meal plan in the database
    const workout = await WorkoutSchema.findById(req.body.id);

    // add the exercise to the workout
    if (!workout.exercises.includes(exercise._id))
      workout.exercises.push(exercise);

    // save the workout
    await workout.save();

    // respond with the exercise
    res.json(exercise);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Remove an exercise from a workout
export async function removeExerciseFromWorkout(req: Request, res: Response) {
  try {
    // find the received exercise data in the database
    const exercise = await ExerciseSchema.findById(req.body.exerciseId);

    // find the received workout in the database
    const workout = await WorkoutSchema.findById(req.body.id);

    // remove the exercise from the workout
    workout.exercises.remove(exercise);

    // save the workout
    await workout.save();

    // respond with the workout
    res.json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
}
