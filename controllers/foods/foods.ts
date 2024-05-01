/*----------------------------------- Module Imports -----------------------------------*/
import { Request, Response } from "express";

const FoodSchema = require("../../models/food");

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = {
  create,
  read,
  update,
  deleteFood,
};

/*------------------------------------- Functions --------------------------------------*/
// Create a new food in the database
export async function create(req: Request, res: Response) {
  try {
    // create a food from the received information
    const food = await FoodSchema.create(req.body);

    // respond with the created food
    res.json(food);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Get all of the foods in the database
export async function read(req: Request, res: Response) {
  try {
    // find all the foods in the database
    let foods = await FoodSchema.find({});

    // respond with all of the foods
    res.json(foods);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Edit the received food in the database
export async function update(req: Request, res: Response) {
  try {
    // find the food in the database
    const food = await FoodSchema.findById(req.body.id);

    // update the database food information with the received inforamtion
    food.name = req.body.name;
    food.type = req.body.type;
    food.calories = req.body.calories;
    food.protein = req.body.protein;
    food.carbohydrates = req.body.carbohydrates;
    food.fat = req.body.fat;

    // save the food
    await food.save();

    // find all the foods in the database
    const foods = await FoodSchema.find({});

    // respond with all of the foods
    res.json(foods);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Delete a food from the database
export async function deleteFood(req: Request, res: Response) {
  try {
    // find the received food in the database and delete it
    await FoodSchema.findOneAndDelete({ _id: req.body.id });

    // find all the foods in the database
    const foods = await FoodSchema.find({});

    // respond with all of the foods in the database
    res.json(foods);
  } catch (err) {
    res.status(400).json(err);
  }
}
