import express from "express";
import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import { show, create, edit, deleteExercise } from "../../controllers/exercises/exercises";

const router = express.Router();

// all routes start with exercises

// GET route to create an exercise
router.get("/show", ensureLoggedIn, show);

// POST route to create an exercise
router.post("/create", ensureLoggedIn, create);

// POST route to create an exercise
router.post("/edit", ensureLoggedIn, edit);

// POST route to create an exercise
router.post("/delete", ensureLoggedIn, deleteExercise);

module.exports = router;
