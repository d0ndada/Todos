import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import GlobalStyles from "./components/styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
