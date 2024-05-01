import { BodyStatType } from "../types";
import sendRequest from "./send-request";

const BASE_URL = "/bodystats";

export function createBodyStatData(bodyStats: BodyStatType) {
  return sendRequest(`${BASE_URL}/create`, "POST", bodyStats);
}

export function getBodyStatData() {
  return sendRequest(`${BASE_URL}/read`, "GET", null);
}
