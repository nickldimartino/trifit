/*----------------------------------- Module Imports -----------------------------------*/
import express from "express";

import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import {
  create,
  read,
  update,
  deleteFood,
} from "../../controllers/foods/foods";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /foods
// POST route to create a food
router.post("/create", ensureLoggedIn, create);

// GET route to show the foods
router.get("/read", ensureLoggedIn, read);

// POST route to edit a food
router.post("/update", ensureLoggedIn, update);

// DELETE route to delete a food
router.post("/delete", ensureLoggedIn, deleteFood);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
