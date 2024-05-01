/*----------------------------------- Module Imports -----------------------------------*/
import express from "express";

import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import { show, create } from "../../controllers/bodystats/bodystats";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /bodystats
// GET route to show the body stats
router.get("/show", ensureLoggedIn, show);

// POST route to create a body stat
router.post("/create", ensureLoggedIn, create);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
