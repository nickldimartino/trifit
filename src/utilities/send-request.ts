/*----------------------------------- Module Imports -----------------------------------*/
import { getToken } from "./users-service";

/*---------------------------------- Type Declarations ---------------------------------*/
interface requestObjType {
  body?: string;
  headers?: {
    [key: string]: string;
  };
  method: string;
}

/*------------------------------------- Functions --------------------------------------*/
// Send a request to the backend
export default async function sendRequest(
  url: string,
  method = "GET",
  payload: any
) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, specifiy the method, etc.
  const options: requestObjType = { method };

  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // Need to add an Authorization header
    // Use the Logical OR Assignment operator
    options.headers ||= {};
    // Older approach
    // options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  // if res.ok is false then something went wrong
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
