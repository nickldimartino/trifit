// API modules are where the code lives to communicate
// with the server via AJAX
import { UserDataObj } from "../types";
import { CredentialsType } from "../types";
import sendRequest from "./send-request";

const BASE_URL = '/api/users';

export async function signUp(userData: UserDataObj) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials: CredentialsType) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`, "GET", null);
}