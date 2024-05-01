/*----------------------------------- Module Imports -----------------------------------*/
import express from "express";

import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import {
  create,
  read,
  update,
  deleteExercise,
} from "../../controllers/exercises/exercises";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /exercises
// POST route to create an exercise
router.post("/create", ensureLoggedIn, create);

// GET route to show the exercises
router.get("/read", ensureLoggedIn, read);

// POST route to edit an exercise
router.post("/update", ensureLoggedIn, update);

// POST route to delete an exercise
router.post("/delete", ensureLoggedIn, deleteExercise);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
