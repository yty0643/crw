import React from "react";
import RegListItem from "../reg_list_item/reg_list_item";
import styles from "./reg_list.module.css";

const RegList = ({ regsList, commitDel }) => {
  return (
    <ul className={styles.regList}>
      {Object.values(regsList).map((item, idx) => {
        return (
          <RegListItem key={idx} idx={idx} item={item} commitDel={commitDel} />
        );
      })}
    </ul>
  );
};
export default RegList;
