/*----------------------------------- Module Imports -----------------------------------*/
import express from "express";

import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import { create, read } from "../../controllers/bodystats/bodystats";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /bodystats
// POST route to create a body stat
router.post("/create", ensureLoggedIn, create);

// GET route to show the body stats
router.get("/read", ensureLoggedIn, read);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
