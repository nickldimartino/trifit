/*----------------------------------- Module Imports -----------------------------------*/
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

/*------------------------------------ Assignments -------------------------------------*/
Object.assign(global, { TextDecoder, TextEncoder });
