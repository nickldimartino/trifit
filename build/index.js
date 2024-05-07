import { jsx as _jsx } from "react/jsx-runtime";
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
var root = ReactDOM.createRoot(document.getElementById("root"));
// Render the root element
root.render(_jsx(React.StrictMode, { children: _jsx(Router, { children: _jsx(App, {}) }) }));
