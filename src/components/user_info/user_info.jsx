import React from "react";
import styles from "./user_info.module.css";

const UserInfo = ({ userId, repoNameArr, signOut, tokenDel, goto }) => {
  return (
    <div className={styles.userInfo}>
      <p className={styles.title}>Signed in as {userId}</p>
      <div className={styles.horizontalLine}></div>
      <p className={styles.signOutBtn} onClick={signOut}>
        sign out
      </p>
      <p className={styles.tokenDelBtn} onClick={tokenDel}>
        token deletion
      </p>
      <div className={styles.horizontalLine}></div>
      {repoNameArr.map((item, index) => {
        return (
          <p className={styles.repo} key={index} onClick={() => goto(item)}>
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default UserInfo;
