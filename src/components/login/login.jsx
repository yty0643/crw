import React, { useEffect, useRef, useState } from "react";
import styles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Token from "../token/token";
import { useNavigate } from "react-router-dom";

const Login = ({ authService, githubService, dbService }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [isToken, setIsToken] = useState(true);
  const [email, setEmail] = useState("yty0643@naver.com");
  const [likeNum, setLikeNum] = useState(1);
  const emailRef = useRef();

  const signIn = () => {
    authService
      .signIn()
      .then((res) => setUserId(res.user.reloadUserInfo.screenName));
  };

  const tokenTest = (token) => {
    if (!token) return;
    githubService //
      .tokenTest(token)
      .then((res) => {
        if (res.message) {
          throw new Error();
        } else {
          dbService.writeToken(userId, token);
          navigate("/main");
        }
      })
      .catch((error) => alert("잘못된 TOKEN입니다."));
  };

  const copy = (e) => {
    navigator.clipboard.writeText(email);
    setEmail("copied!");
    setTimeout(() => {
      setEmail("yty0643@naver.com");
    }, 1000);
  };

  const likeBtnClick = () => {
    dbService.like(likeNum + 1);
    dbService.readLike().then((res) => setLikeNum(res.val()));
  };

  useEffect(() => {
    authService.getUser((user) => {
      if (user) {
        setUserId(user.reloadUserInfo.screenName);
      }
    });
    dbService.readLike().then((res) => setLikeNum(res.val()));
  }, []);

  useEffect(() => {
    if (!userId) return;
    dbService.readToken(userId).then((res) => {
      if (res.exists()) {
        navigate("/main");
      } else {
        setIsToken(false);
      }
    });
  }, [userId]);

  return (
    <div>
      {isToken && (
        <section className={styles.login}>
          <FontAwesomeIcon
            className={styles.logo}
            icon="fa-solid fa-calendar-days"
          />
          <p className={styles.title}>Welcome CRW</p>
          <div className={styles.signIn}>
            <button
              className={styles.signInBtn}
              value="gitgub"
              onClick={signIn}
            >
              Sign in
            </button>
          </div>
          <div className={styles.contact}>
            <p ref={emailRef} className={styles.email} onClick={copy}>
              {email}
            </p>
            <div className={styles.contactBtns}>
              <a href="https://github.com/yty0643" target="blank">
                <button className={styles.githubBtn}>
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </button>
              </a>
              <div className={styles.thumbsUpBtnBox}>
                <button className={styles.thumbsUpBtn} onClick={likeBtnClick}>
                  <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                </button>
                <p className={styles.likeNum}>{likeNum}</p>
              </div>
            </div>
          </div>
          <p className={styles.description}>
            2022 tayoung - all rights reserved{" "}
          </p>
        </section>
      )}
      {!isToken && <Token userId={userId} tokenTest={tokenTest} />}
    </div>
  );
};

export default Login;
