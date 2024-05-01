/*----------------------------------- Module Imports -----------------------------------*/
import { Request, Response } from "express";

const FoodSchema = require("../../models/food");
const MealPlanSchema = require("../../models/mealPlan");
const UserSchema = require("../../models/user");

/*----------------------------------- Type Declaration ---------------------------------*/
declare global {
  namespace Express {
    export interface Request {
      user?: Record<string, any> | null | undefined;
    }
  }
}

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = {
  create,
  read,
  update,
  deleteMealPlan,
  addFoodToMealPlan,
  removeFoodFromMealPlan,
};

/*------------------------------------- Functions --------------------------------------*/
// Create a new meal plan in the database
export async function create(req: Request, res: Response) {
  try {
    // create a meal plan in the database from the received information
    const mealPlan = await MealPlanSchema.create(req.body);

    // find the current user in the database
    const user = await UserSchema.findById(req.user?._id);

    // if a user exists and the user does not already have the meal plan,
    // add it and save the user
    if (user && !user.mealPlans.includes(mealPlan._id)) {
      user.mealPlans.push(mealPlan._id);
      await user.save();
    }

    // respond with the created meal plan
    res.json(mealPlan);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Get all of the current user's meal plans
export async function read(req: Request, res: Response) {
  try {
    // find the current user in the database
    const user = await UserSchema.findById(req.user?._id).populate("mealPlans");

    // respond with the user's meal plans
    res.json(user.mealPlans);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Edit the received meal plan's information in the database
export async function update(req: Request, res: Response) {
  try {
    // find the meal plan in the database
    const mealPlan = await MealPlanSchema.findById(req.body.id);

    // update the meal plan's information from the received information
    mealPlan.name = req.body.name;
    mealPlan.totalCalories = req.body.totalCalories;
    mealPlan.totalProtein = req.body.totalProtein;
    mealPlan.totalFat = req.body.totalFat;

    // save the meal plan
    await mealPlan.save();

    // find all the meal plans in the database
    const mealPlans = await MealPlanSchema.find({});

    // respond with the meal plans
    res.json(mealPlans);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Delete a meal plan from the database
export async function deleteMealPlan(req: Request, res: Response) {
  try {
    // find the meal plan in the database and delete it
    const mealPlan = await MealPlanSchema.findOneAndDelete({
      _id: req.body.id,
    });

    // find all the meal plans in the database
    const mealPlans = await MealPlanSchema.find({});

    // find the current user in the database
    const user = await UserSchema.findById(req.user?._id);

    // remove the deleted meal plan from the user's meal plans
    user.mealPlans.remove(mealPlan._id);

    // save the user
    await user.save();

    // respond with the meal plans
    res.json(mealPlans);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Add a food to a meal plan
export async function addFoodToMealPlan(req: Request, res: Response) {
  try {
    // find the received food data in the database
    const food = await FoodSchema.findById(req.body.foodId);

    // find the received meal plan in the database
    const mealPlan = await MealPlanSchema.findById(req.body.id);

    // add the food to the meal plan
    mealPlan.foods.push(food);

    // save the meal plan
    await mealPlan.save();

    // respond with the meal plan
    res.json(mealPlan);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Remove a food from a meal plan
export async function removeFoodFromMealPlan(req: Request, res: Response) {
  try {
    // find the received food data in the database
    const food = await FoodSchema.findById(req.body.foodId);

    // find the received meal plan in the database
    const mealPlan = await MealPlanSchema.findById(req.body.id);

    // remove the food from the meal plan
    mealPlan.foods.remove(food);

    // save the meal plan
    await mealPlan.save();

    // respond with the meal plan
    res.json(mealPlan);
  } catch (err) {
    res.status(400).json(err);
  }
}
