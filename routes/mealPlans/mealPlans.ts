/*----------------------------------- Module Imports -----------------------------------*/
// External
import express from "express";

// Internal
import {
  create,
  read,
  update,
  deleteMealPlan,
  addFoodToMealPlan,
  removeFoodFromMealPlan,
} from "../../controllers/mealPlans/mealPlans";
import { ensureLoggedIn } from "../../config/ensureLoggedIn";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /mealplans
// POST route to create a meal plan
router.post("/create", ensureLoggedIn, create);

// GET route to display all mealplans
router.get("/read", ensureLoggedIn, read);

// POST route to edit a meal plan
router.post("/update", ensureLoggedIn, update);

// POST route to delete a meal plan
router.post("/delete", ensureLoggedIn, deleteMealPlan);

// POST route to add a food to a meal plan
router.post("/add", ensureLoggedIn, addFoodToMealPlan);

// POST route to remove a food from a meal plan
router.post("/remove", ensureLoggedIn, removeFoodFromMealPlan);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
