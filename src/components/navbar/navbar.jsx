import React from "react";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ userId, signOut }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.box}>
        <FontAwesomeIcon
          className={styles.logo}
          icon="fa-solid fa-calendar-days"
        />
        <p className={styles.webName}>CRW</p>
      </div>
      <div className={styles.box}>
        <button className={styles.bellBtn}>
          <FontAwesomeIcon icon="fa-solid fa-bell" />
        </button>
        <button className={styles.userBtn} onClick={signOut}>
          <FontAwesomeIcon icon="fa-solid fa-circle-user" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
