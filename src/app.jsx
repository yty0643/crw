import React from "react";
import styles from "./app.module.css";
import Nooter from "./components/navbar/navbar";
import Header from "./components/header/header";

const app = (props) => {
  return (
    <div className={styles.app}>
      <Nooter />
      <Header />
      <div className={styles.container}></div>
    </div>
  );
};
export default app;
