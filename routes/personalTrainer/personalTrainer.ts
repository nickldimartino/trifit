/*----------------------------------- Module Imports -----------------------------------*/
// External
import express from "express";

// Internal
import { read } from "../../controllers/personalTrainer/personalTrainer";
import { ensureLoggedIn } from "../../config/ensureLoggedIn";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /personaltrainer
// GET route to show the body stats
router.get("/read", ensureLoggedIn, read);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
