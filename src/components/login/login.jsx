import React, { memo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("yty0643@naver.com");
  const emailRef = useRef();

  const signIn = () => {
    authService.signIn().then(() => navigate("/main"));
  };

  const copy = (e) => {
    navigator.clipboard.writeText(email);
    setEmail("copied!");
    setTimeout(() => {
      setEmail("yty0643@naver.com");
    }, 1000);
  };

  useEffect(() => {
    authService.getUser((user) => {
      user && navigate("/main");
    });
  });

  return (
    <section className={styles.login}>
      <FontAwesomeIcon
        className={styles.logo}
        icon="fa-solid fa-calendar-days"
      />
      <p className={styles.title}>Welcome CRW</p>
      <div className={styles.signIn}>
        <button className={styles.signInBtn} value="gitgub" onClick={signIn}>
          Sign in
        </button>
      </div>
      <div className={styles.contact}>
        <p ref={emailRef} className={styles.email} onClick={copy}>
          {email}
        </p>
        <div>
          <a href="https://github.com/yty0643" target="blank">
            <button className={styles.githubBtn}>
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </button>
          </a>
          <button className={styles.messageBtn}>
            <FontAwesomeIcon icon="fa-solid fa-comments" />
          </button>
        </div>
      </div>
      <p className={styles.description}>2022 tayoung - all rights reserved </p>
    </section>
  );
};

export default Login;
