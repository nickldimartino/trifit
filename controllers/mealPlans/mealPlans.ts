import { Request, Response } from "express";
const MealPlanSchema = require("../../models/mealPlan");
const UserSchema = require("../../models/user");
const FoodSchema = require("../../models/food");

declare global {
    namespace Express {
        export interface Request {
            user?: Record<string, any> | null | undefined
        }
    }
}

module.exports = {
    show,
    create,
    edit,
    deleteMealPlan,
    addFoodToMealPlan
}

export async function show(req: Request, res: Response) {
    try {
        const user = await UserSchema.findById(req.user?._id).populate("mealPlans");
        res.json(user.mealPlans);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function create(req: Request, res: Response) {
    try {
        const mealPlan = await MealPlanSchema.create(req.body);

        const user = await UserSchema.findById(req.user?._id);

        if (user && !user.mealPlans.includes(mealPlan._id)) {
            user.mealPlans.push(mealPlan._id);
            await user.save();
        }

        res.json(req.body);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function edit(req: Request, res: Response) {
    try {
        const mealPlan = await MealPlanSchema.findById(req.body.id);

        mealPlan.name = req.body.name;
        mealPlan.foods = req.body.foods;

        await mealPlan.save();

        const mealPlans = await MealPlanSchema.find({});

        res.json(mealPlans);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function deleteMealPlan(req: Request, res: Response) {
    try {
        const mealPlan = await MealPlanSchema.findOneAndDelete({ _id: req.body.id });
        const mealPlans = await MealPlanSchema.find({});
        const user = await UserSchema.findById(req.user?._id);
        user.mealPlans.remove(mealPlan._id);
        await user.save();
        res.json(mealPlans);
    } catch (err) {
        res.status(400).json(err);
    }
}

export async function addFoodToMealPlan(req: Request, res: Response) {
    try {
        const food = await FoodSchema.findById(req.body.foodId);
        const mealPlan = await MealPlanSchema.findById(req.body.id);

        mealPlan.foods.push(food);

        await mealPlan.save();

        res.json(mealPlan);
    } catch (err) {
        res.status(400).json(err);
    }
}
