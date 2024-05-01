import { BodyStatType } from "../types";
import sendRequest from "./send-request";

const BASE_URL = "/bodystats";

export function getBodyStatData() {
  return sendRequest(`${BASE_URL}/show`, "GET", null);
}

export function createBodyStatData(bodyStats: BodyStatType) {
  return sendRequest(`${BASE_URL}/create`, "POST", bodyStats);
}
