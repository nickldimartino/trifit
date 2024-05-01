/*----------------------------------- Module Imports -----------------------------------*/
import express from "express";

import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import {
  show,
  create,
  edit,
  deleteWorkout,
  addExerciseToWorkout,
  removeExerciseFromWorkout,
} from "../../controllers/workouts/workouts";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /workouts
// GET route to display all workouts
router.get("/show", ensureLoggedIn, show);

// POST route to create a workout
router.post("/create", ensureLoggedIn, create);

// POST route to edit a workout
router.post("/edit", ensureLoggedIn, edit);

// POST route to delete a workout
router.post("/delete", ensureLoggedIn, deleteWorkout);

// POST route to add an exercise to a workout
router.post("/add", ensureLoggedIn, addExerciseToWorkout);

// POST route to add an exercise from a workout
router.post("/remove", ensureLoggedIn, removeExerciseFromWorkout);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
