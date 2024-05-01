/*----------------------------------- Module Imports -----------------------------------*/
import express from "express";

import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import {
  show,
  create,
  edit,
  deleteMealPlan,
  addFoodToMealPlan,
  removeFoodFromMealPlan,
} from "../../controllers/mealPlans/mealPlans";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /mealplans
// GET route to display all mealplans
router.get("/show", ensureLoggedIn, show);

// POST route to create a meal plan
router.post("/create", ensureLoggedIn, create);

// POST route to edit a meal plan
router.post("/edit", ensureLoggedIn, edit);

// POST route to delete a meal plan
router.post("/delete", ensureLoggedIn, deleteMealPlan);

// POST route to add a food to a meal plan
router.post("/add", ensureLoggedIn, addFoodToMealPlan);

// POST route to remove a food from a meal plan
router.post("/remove", ensureLoggedIn, removeFoodFromMealPlan);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
