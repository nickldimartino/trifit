/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import sendRequest from "./send-request";

// Types
import { BodyStatType } from "../types";

/*--------------------------------- Variable Declarations ------------------------------*/
const BASE_URL = "/bodystats";

/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create a body stat
export function createBodyStatData(bodyStats: BodyStatType) {
  return sendRequest(`${BASE_URL}/create`, "POST", bodyStats);
}

// Send request to backend to read the body stats
export function getBodyStatData() {
  return sendRequest(`${BASE_URL}/read`, "GET", null);
}
