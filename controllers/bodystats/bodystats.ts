/*----------------------------------- Module Imports -----------------------------------*/
import { Request, Response } from "express";

const BodyStatSchema = require("../../models/bodyStat");
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
  show,
  create,
};

/*------------------------------------- Functions --------------------------------------*/
// Retrieve all the body stats for the current user
export async function show(req: Request, res: Response) {
  try {
    // get the current user in the database
    const user = await UserSchema.findById(req.user?._id).populate("bodyStats");

    // respond with the user's body stats
    res.json(user.bodyStats);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Create a body stat for the current user
export async function create(req: Request, res: Response) {
  try {
    // create a body stat in the database
    const bodyStat = await BodyStatSchema.create(req.body);

    // find the current user in the database
    const user = await UserSchema.findById(req.user?._id);

    // add the created body stat to the user's body stats
    user.bodyStats.push(bodyStat);

    // save the user
    await user.save();

    // respond with the created body stat
    res.json(bodyStat);
  } catch (err) {
    res.status(400).json(err);
  }
}
