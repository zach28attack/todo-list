import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {LoginContextProvider} from "./components/utility/LoginContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginContextProvider>
    <App />
  </LoginContextProvider>
);
