/*----------------------------------- Module Imports -----------------------------------*/
import { UserDataType, CredentialsType } from "../types";
import sendRequest from "./send-request";

/*--------------------------------- Variable Declarations ------------------------------*/
const BASE_URL = "/api/users";

/*------------------------------------- Functions --------------------------------------*/
// Send request to sign up a user
export async function signUp(userData: UserDataType) {
  return sendRequest(BASE_URL, "POST", userData);
}

// Send request to log in a user
export async function login(credentials: CredentialsType) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

// Send request to check the user token
export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`, "GET", null);
}
