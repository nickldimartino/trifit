/*----------------------------------- Module Imports -----------------------------------*/
import express from "express";

import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import {
  create,
  read,
  update,
  deleteWorkout,
  addExerciseToWorkout,
  removeExerciseFromWorkout,
} from "../../controllers/workouts/workouts";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /workouts
// POST route to create a workout
router.post("/create", ensureLoggedIn, create);

// GET route to read all workouts
router.get("/read", ensureLoggedIn, read);

// POST route to update a workout
router.post("/update", ensureLoggedIn, update);

// POST route to delete a workout
router.post("/delete", ensureLoggedIn, deleteWorkout);

// POST route to add an exercise to a workout
router.post("/add", ensureLoggedIn, addExerciseToWorkout);

// POST route to add an exercise from a workout
router.post("/remove", ensureLoggedIn, removeExerciseFromWorkout);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
