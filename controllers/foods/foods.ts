import { Request, Response } from "express";
const FoodSchema = require("../../models/food");
const UserSchema = require("../../models/user");

module.exports = {
    show,
    create,
    edit,
    deleteExercise,
    addFoodToMealPlan
}

export async function show(req: Request, res: Response) {
    try {
        let foods = await FoodSchema.find({});
        res.json(foods);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function create(req: Request, res: Response) {
    try {
        await FoodSchema.create(req.body);
        res.json(req.body);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function edit(req: Request, res: Response) {
    try {
        const food = await FoodSchema.findById(req.body.id);

        food.name = req.body.name;
        food.type = req.body.type;
        food.calories = req.body.calories;
        food.protein = req.body.protein;
        food.carbohydrates = req.body.carbohydrates;
        food.fat = req.body.fat;

        await food.save();

        const foods = await FoodSchema.find({});

        res.json(foods);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function deleteExercise(req: Request, res: Response) {
    try {
        await FoodSchema.findOneAndDelete({_id: req.body.id});
        const foods = await FoodSchema.find({});
        res.json(foods);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function addFoodToMealPlan(req: Request, res: Response) {
    try {
        const food = await FoodSchema.findById(req.body.id);
        const user = await UserSchema.findById(req.body.user._id);

        res.json(food);
    } catch (err) {
        res.status(400).json(err);
    }
}
