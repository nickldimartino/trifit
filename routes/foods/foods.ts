/*----------------------------------- Module Imports -----------------------------------*/
import express from "express";

import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import { show, create, edit, deleteFood } from "../../controllers/foods/foods";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /foods
// GET route to show the foods
router.get("/show", ensureLoggedIn, show);

// POST route to create a food
router.post("/create", ensureLoggedIn, create);

// POST route to edit a food
router.post("/edit", ensureLoggedIn, edit);

// DELETE route to delete a food
router.post("/delete", ensureLoggedIn, deleteFood);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
