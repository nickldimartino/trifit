/*----------------------------------- Module Imports -----------------------------------*/
// Internal
import sendRequest from "./send-request";
/*--------------------------------- Variable Declarations ------------------------------*/
var BASE_URL = "/bodystats";
/*------------------------------------- Functions --------------------------------------*/
// Send request to backend to create a body stat
export function createBodyStatData(bodyStats) {
    return sendRequest("".concat(BASE_URL, "/create"), "POST", bodyStats);
}
// Send request to backend to read the body stats
export function getBodyStatData() {
    return sendRequest("".concat(BASE_URL, "/read"), "GET", null);
}
