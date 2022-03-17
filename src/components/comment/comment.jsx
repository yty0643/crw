import React, { useRef, useState } from "react";
import styles from "./comment.module.css";
const Comment = ({ sendComment }) => {
  const [text, setText] = useState();
  const textRef = useRef();

  const onClick = () => {
    if (text) {
      alert("send message!");
      sendComment(text);
      setText("");
    }
  };

  const onChange = () => {
    setText(textRef.current.value);
  };
  return (
    <div className={styles.comment}>
      <textarea
        className={styles.text}
        ref={textRef}
        cols="15"
        rows="5"
        value={text}
        onChange={onChange}
        placeholder="마지막 메세지만 전송됨"
      ></textarea>
      <p className={styles.sendBtn} onClick={onClick}>
        send
      </p>
    </div>
  );
};

export default Comment;
