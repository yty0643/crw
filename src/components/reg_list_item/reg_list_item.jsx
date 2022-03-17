import React, { useState } from "react";
import styles from "./reg_list_item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegListItem = ({ item, idx, commitDel }) => {
  const [hide, setHide] = useState(true);

  return (
    <li
      className={styles.regListItem}
      onMouseEnter={() => {
        setHide(false);
      }}
      onMouseLeave={() => {
        setHide(true);
      }}
    >
      <p className={styles.description}>{item.path}</p>
      <p className={styles.description}>{item.time}</p>
      <p className={styles.description}>{item.msg ? item.msg : "no message"}</p>
      <div className={`${styles.delBtnBox} ${!hide && styles.active}`}>
        <button
          className={styles.delBtn}
          onClick={() => {
            commitDel(idx);
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-trash-can" />
        </button>
      </div>
    </li>
  );
};

export default RegListItem;
