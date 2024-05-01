/*----------------------------------- Module Imports -----------------------------------*/
// External
import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");

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
module.exports = function (req: Request, res: Response, next: NextFunction) {
  // Check for the token being sent in a header or as a query param
  let token: any = req.get("Authorization") || req.query.token;
  // Default to null
  req.user = null;
  if (!token) return next();
  // Remove the 'Bearer ' that was included in the token header
  token = token.replace("Bearer ", "");
  // Check if token is valid and not expired
  jwt.verify(token, process.env.SECRET, function (err: any, decoded: any) {
    // Invalid token if err
    if (err) return next();
    // decoded is the entire token payload
    req.user = decoded.user;
    // If interested in the expiration,
    // and we just happen to be...
    req.exp = new Date(decoded.exp * 1000);
    return next();
  });
};
