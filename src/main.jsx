import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
const isDev = import.meta.env.DEV; // true if running dev server

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={isDev ? "/" : "/portfolio/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
