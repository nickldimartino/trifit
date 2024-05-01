/*----------------------------------- Module Imports -----------------------------------*/
// External
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// Internal
import "./index.css";
import App from "./pages/App/App";

/*---------------------------------- Root HTML Element ---------------------------------*/
// Create the root element
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Render the root element
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
