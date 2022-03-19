import React, { useRef } from "react";
import styles from "./token.module.css";

const Token = ({ userId, tokenTest }) => {
  const tokenRef = useRef();

  return (
    <div className={styles.token}>
      <p className={styles.title}>Welcome {userId && userId}!</p>
      <div className={styles.title}>
        <p>Enter your</p>
        <a
          className={styles.description}
          href="https://github.com/settings/tokens"
          target="_blank"
        >
          <p>&nbsp;personal access token&nbsp;</p>
        </a>
        <p>and start</p>
      </div>
      <input className={styles.tokenInput} ref={tokenRef} type="text" />
      <button
        className={styles.btn}
        onClick={() => {
          tokenTest(`token ${tokenRef.current.value}`);
        }}
      >
        Start
      </button>
    </div>
  );
};
export default Token;
