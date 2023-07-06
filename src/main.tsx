import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Workshop from "./workshop/Workshop";
import Webinar from "./webinar/Webinar";

export const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/pekan-it/" element={<App />} />
          <Route path="/pekan-it/dashboard" element={<Dashboard />} />
          <Route path="/pekan-it/workshop" element={<Workshop />} />
          <Route path="/pekan-it/webinar" element={<Webinar />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
