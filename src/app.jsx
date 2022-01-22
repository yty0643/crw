import React from "react";
import styles from "./app.module.css";
import Nooter from "./components/navbar/navbar";
import Header from "./components/header/header";
import Login from "./components/login/login";

const app = ({ authService }) => {
  return (
    <div className={styles.app}>
      <Nooter />
      <Header />
      <div className={styles.container}>
        <Login authService={authService} />
      </div>
    </div>
  );
};
export default app;
