import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// themeing
import { ThemeProvider } from "./contexts/ThemeContext";
import Background from "./theme/Background";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>
);
