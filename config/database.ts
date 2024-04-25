import mongoose from "mongoose";

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      DATABASE_URL: string;
    }
  }
}

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});