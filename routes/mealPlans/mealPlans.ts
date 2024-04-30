import express from "express";
import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import { show, create, edit, deleteMealPlan } from "../../controllers/mealPlans/mealPlans";

const router = express.Router();

// all routes start with mealplans

// GET route to display mealplans
router.get("/show", ensureLoggedIn, show);

// POST route to create a mealplans
router.post("/create", ensureLoggedIn, create);

// POST route to edit a mealplan
router.post("/edit", ensureLoggedIn, edit);

// POST route to delete a mealplan
router.post("/delete", ensureLoggedIn, deleteMealPlan);

module.exports = router;
