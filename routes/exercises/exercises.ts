/*----------------------------------- Module Imports -----------------------------------*/
import express from "express";

import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import {
  show,
  create,
  edit,
  deleteExercise,
} from "../../controllers/exercises/exercises";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /exercises
// GET route to show the exercises
router.get("/show", ensureLoggedIn, show);

// POST route to create an exercise
router.post("/create", ensureLoggedIn, create);

// POST route to edit an exercise
router.post("/edit", ensureLoggedIn, edit);

// POST route to delete an exercise
router.post("/delete", ensureLoggedIn, deleteExercise);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
