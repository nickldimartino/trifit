import express from "express";
const router = express.Router();
import { create, login, checkToken } from "../../controllers/api/users";
import { ensureLoggedIn } from "../../config/ensureLoggedIn";

// POST /api/users
router.post('/', create);

// POST /api/users/login (login a user)
router.post('/login', login);

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken);

module.exports = router;