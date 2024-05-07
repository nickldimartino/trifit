/*----------------------------------- Module Imports -----------------------------------*/
// External
import express, { Request, Response } from "express";
import logger from "morgan";
import path from "path";
import favicon from "serve-favicon";

// Allow use of the .env file
require("dotenv").config();

// Connect to the database
require("./config/database");

/*--------------------------------- Variable Declarations ------------------------------*/
const app = express();

/*--------------------------------------- Middleware -----------------------------------*/
app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Middleware to check and verify a JWT and
// assign the user object from the JWT to req.user
app.use(require("./config/checkToken"));

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

/*---------------------------------------- Routes --------------------------------------*/
app.use("/api/users", require("./routes/api/users"));
app.use("/exercises", require("./routes/exercises/exercises"));
app.use("/foods", require("./routes/foods/foods"));
app.use("/workouts", require("./routes/workouts/workouts"));
app.use("/mealplans", require("./routes/mealPlans/mealPlans"));
app.use("/bodystats", require("./routes/bodystats/bodystats"));
app.use(
  "/personaltrainer",
  require("./routes/personalTrainer/personalTrainer")
);

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
