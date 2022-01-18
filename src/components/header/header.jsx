import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <p className={styles.title}>description</p>
    </header>
  );
};
export default Header;