import React, { useState } from "react";
import styles from "./header.module.css";
import UserInfo from "../user_info/user_info";
import Comment from "../comment/comment";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ dbService, userId, repoNameArr, signOut, tokenDel }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(false);
  const [comment, setComment] = useState(false);

  const sendComment = (comment) => {
    dbService.writeMsg(userId, comment);
  };

  const goto = (repo) => {
    navigate(`/main/${repo}`);
  };

  const clickUser = () => {
    setUserInfo(!userInfo);
    setComment(false);
  };
  const clickComment = () => {
    setComment(!comment);
    setUserInfo(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <button className={styles.logo} onClick={() => goto("")}>
          <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
        </button>
        <p className={styles.webName}>CRW</p>
      </div>
      <div className={styles.box}>
        <button className={styles.bellBtn} onClick={clickComment}>
          <FontAwesomeIcon icon="fa-solid fa-comments" />
        </button>
        <button className={styles.bellBtn}>
          <FontAwesomeIcon icon="fa-solid fa-bell" />
        </button>
        <button className={styles.userBtn} onClick={clickUser}>
          <FontAwesomeIcon icon="fa-solid fa-circle-user" />
        </button>
        {userInfo && (
          <UserInfo
            userId={userId}
            repoNameArr={repoNameArr}
            signOut={signOut}
            tokenDel={tokenDel}
            goto={goto}
          />
        )}
        {comment && <Comment sendComment={sendComment} />}
      </div>
    </header>
  );
};
export default Header;
