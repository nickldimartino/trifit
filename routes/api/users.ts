/*----------------------------------- Module Imports -----------------------------------*/
// External
import express from "express";

// Internal
import { create, login, checkToken } from "../../controllers/api/users";
import { ensureLoggedIn } from "../../config/ensureLoggedIn";

/*--------------------------------- Variable Declarations ------------------------------*/
const router = express.Router();

/*---------------------------------------- Routes --------------------------------------*/
// all routes start with /api/users
// POST route to create a user
router.post("/", create);

// POST route to login a user
router.post("/login", login);

// GET route to check the user token
router.get("/check-token", ensureLoggedIn, checkToken);

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = router;
