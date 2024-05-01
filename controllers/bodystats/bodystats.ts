import { Request, Response } from "express";
const BodyStatSchema = require("../../models/bodyStat");
const UserSchema = require("../../models/user");

declare global {
  namespace Express {
    export interface Request {
      user?: Record<string, any> | null | undefined;
    }
  }
}

module.exports = {
  show,
  create,
};

export async function show(req: Request, res: Response) {
  try {
    let bodystats = await BodyStatSchema.find({});
    res.json(bodystats);
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const bodyStat = await BodyStatSchema.create(req.body);
    const user = await UserSchema.findById(req.user?._id);
    user.bodyStats.push(bodyStat);

    await user.save();

    res.json(bodyStat);
  } catch (err) {
    res.status(400).json(err);
  }
}
