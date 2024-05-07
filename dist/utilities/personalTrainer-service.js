/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import sendRequest from "./send-request";
/*--------------------------------- Variable Declarations ------------------------------*/
var BASE_URL = "/personaltrainer";
/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create a food
export function askQuestion(question) {
    return sendRequest("".concat(BASE_URL, "/read"), "POST", { question: question });
}
