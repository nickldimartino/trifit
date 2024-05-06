/// <reference types="react-scripts" />
/*----------------------------------- Module Imports -----------------------------------*/
import express from "express";

/*--------------------------------------- Types ----------------------------------------*/
// ProcessENV type to use the database variable
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      DATABASE_URL: string;
      GROQ_API_KEY: string;
    }
  }
}

// Request type to use the user variable
declare global {
  namespace Express {
    export interface Request {
      user?: Record<string, any>;
    }
  }
}

export {};
