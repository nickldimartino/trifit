import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserType } from "../../src/types";
import bcrypt from "bcrypt";
const User = require('../../models/user');

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      SECRET: string;
    }
  }
}

module.exports = {
  create,
  login,
  checkToken
};

export function checkToken(req: Request, res: Response) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

export async function login(req: Request, res: Response) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

export async function create(req: Request, res: Response) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    // The token is a string, but yes, we can
    // res.json a string
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*-- Helper Functions --*/
function createJWT(user: UserType) {
  return jwt.sign(
    // extra data for the payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}
