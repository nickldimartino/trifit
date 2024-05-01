/*----------------------------------- Module Imports -----------------------------------*/
// External
import mongoose from "mongoose";

/*---------------------------------- Type Declaration ----------------------------------*/
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      DATABASE_URL: string;
    }
  }
}

/*--------------------------------- Database Connection --------------------------------*/
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
