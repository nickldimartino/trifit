/// <reference types="react-scripts" />
import express from "express";

declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            DATABASE_URL: string;
        }
    }
}

declare global {
    namespace Express {
      export interface Request {
        user?: Record<string,any>
      }
    }
  }

export {}