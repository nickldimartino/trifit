import express from "express";
import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import { show, create, edit, deleteExercise, addFoodToMealPlan } from "../../controllers/foods/foods";

const router = express.Router();

// all routes start with foods

// GET route to create an foods
router.get("/show", ensureLoggedIn, show);

// POST route to create an foods
router.post("/create", ensureLoggedIn, create);

// POST route to create an foods
router.post("/edit", ensureLoggedIn, edit);

// DELETE route to create an foods
router.post("/delete", ensureLoggedIn, deleteExercise);

// POST route to add an exercise to a template
router.post("/add", ensureLoggedIn, addFoodToMealPlan);

module.exports = router;