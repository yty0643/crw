import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import Test from "./components/main/test";
import Repo from "./components/repo/repo";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarDays,
  faComments,
  faCircleUser,
  faCaretDown,
  faBell,
  faThumbsUp,
  faTrashCan,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Token from "./components/token/token";

library.add(
  faCalendarDays,
  faComments,
  faGithub,
  faCircleUser,
  faCaretDown,
  faBell,
  faThumbsUp,
  faTrashCan,
  faCirclePlus
);
const app = ({ authService, githubService, dbService }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              authService={authService}
              githubService={githubService}
              dbService={dbService}
            />
          }
        />
        <Route
          path="/main"
          element={
            <Main
              authService={authService}
              githubService={githubService}
              dbService={dbService}
            />
          }
        />
        <Route
          path="/main/:repo"
          element={
            <Repo
              authService={authService}
              githubService={githubService}
              dbService={dbService}
            />
          }
        />
        <Route
          path="/test"
          element={
            <Test
              authService={authService}
              githubService={githubService}
              dbService={dbService}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default app;
