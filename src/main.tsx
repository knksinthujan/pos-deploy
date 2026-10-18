import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App";
import "@/styles/company.css";
import "@/styles/reference.css";
import "@/styles/contact.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
