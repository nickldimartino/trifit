import express from "express";
import { ensureLoggedIn } from "../../config/ensureLoggedIn";
import { show, create } from "../../controllers/bodystats/bodystats";

const router = express.Router();

// all routes start with bodystats

// GET route to show the body stats
router.get("/show", ensureLoggedIn, show);

// POST route to create a body stat
router.post("/create", ensureLoggedIn, create);

module.exports = router;
