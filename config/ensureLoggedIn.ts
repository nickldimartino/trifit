/*----------------------------------- Module Imports -----------------------------------*/
import { Request, Response, NextFunction } from "express";

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = {
  ensureLoggedIn,
};

/*----------------------------------- Type Declaration ---------------------------------*/
declare global {
  namespace Express {
    interface Request {
      user?: Record<string, any> | null;
      exp?: Record<string, any> | null;
    }
  }
}

/*---------------------------------- Exported Function ---------------------------------*/
export function ensureLoggedIn(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.user) return res.status(401).json("Unauthorized");
  next();
}
