import React from "react";
import styles from "./schedule.module.css";

const Schedule = ({ weekArr }) => {
  const now = new Date().toLocaleDateString();
  let after = new Date();
  after.setDate(after.getDate() + 7);
  after = after.toLocaleDateString();
  return (
    <div className={styles.schedule}>
      <p className={styles.title}>Commit schedule for a week.</p>
      <div className={styles.contents}>
        <p className={styles.now}>{now}</p>
        {weekArr.map((item, index) => {
          if (item) return <div className={styles.true} key={index}></div>;
          else return <div className={styles.false} key={index}></div>;
        })}
        <p className={styles.after}>{after}</p>
      </div>
    </div>
  );
};

export default Schedule;
