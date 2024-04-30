import express from "express";
import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import { show, create, edit, deleteWorkout } from "../../controllers/workouts/workouts";

const router = express.Router();

// all routes start with workouts

// GET route to display workouts
router.get("/show", ensureLoggedIn, show);

// POST route to create a workouts
router.post("/create", ensureLoggedIn, create);

// POST route to edit a workout
router.post("/edit", ensureLoggedIn, edit);

// POST route to delete a workout
router.post("/delete", ensureLoggedIn, deleteWorkout);

module.exports = router;
