/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import sendRequest from "./send-request";

/*--------------------------------- Variable Declarations ------------------------------*/
const BASE_URL = "/personaltrainer";

/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create a food
export function askQuestion(question: string) {
  return sendRequest(`${BASE_URL}/read`, "POST", { question });
}
