import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";

const app = ({ authService }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route path="/main" element={<Main authService={authService} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default app;
