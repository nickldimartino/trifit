import { Request, Response, NextFunction } from "express";

module.exports = {
    ensureLoggedIn
}

declare global {
    namespace Express {
        interface Request {
            user? : Record<string, any> | null,
            exp? : Record<string, any> | null
        }
    }
}

export function ensureLoggedIn(req: Request, res: Response, next: NextFunction) {
    if (!req.user) return res.status(401).json('Unauthorized');
    next();
};