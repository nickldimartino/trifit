/*----------------------------------- Module Imports -----------------------------------*/
// External
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

// Internal
const User = require("../../models/user");

// Types
import { UserType } from "../../src/types";

/*----------------------------------- Type Declaration ---------------------------------*/
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      SECRET: string;
    }
  }

  namespace Express {
    interface Request {
      exp?: Record<string, any> | null;
    }
  }
}

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = {
  create,
  login,
  checkToken,
};

/*------------------------------------- Functions --------------------------------------*/
// Check the user token
export function checkToken(req: Request, res: Response) {
  res.json(req.exp);
}

// Log in the user
export async function login(req: Request, res: Response) {
  try {
    // check if the user exsits from their email
    const user = await User.findOne({ email: req.body.email });

    // if they don't exist, throw an error
    if (!user) throw new Error();

    // check if the passwords are a match
    const match = await bcrypt.compare(req.body.password, user.password);

    // if the passwords don't match, throw an error
    if (!match) throw new Error();

    // create a token for the user
    const token = createJWT(user);

    // respond with the token
    res.json(token);
  } catch (err) {
    res.status(400).json("Bad Credentials");
  }
}

// Create a user
export async function create(req: Request, res: Response) {
  try {
    // create a User Schema from the new user info
    const user = await User.create(req.body);

    // create a token for the new user
    const token = createJWT(user);

    // respond with the token
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Create a token for the received user
function createJWT(user: UserType) {
  return jwt.sign(
    // extra data for the payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
