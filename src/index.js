import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpComponent from "./SignUpComponent";
import LoginComponent from "./LoginComponent";
import Profile from "./Profile";
import SettingPage from "./SettingPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LoginComponent />} /> */}
        <Route index path="/signup" element={<SignUpComponent />} />
        <Route index path="/profile" element={<Profile />} />
        <Route index path="/setting" element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
