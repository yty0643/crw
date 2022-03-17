import React, { forwardRef, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import styles from "./reg_add_form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegAddForm = ({ fileHandler, timeHandler, msgHandler, commitReg }) => {
  const [startDate, setStartDate] = useState(new Date());
  const fileRef = useRef();
  const msgRef = useRef();
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <label className={styles.timeBtn} onClick={onClick} ref={ref}>
      {value}
    </label>
  ));
  const date = new Date();
  const tomorrow = new Date(date.setDate(date.getDate() + 1));

  return (
    <form className={styles.regAddForm} onSubmit={commitReg}>
      <label className={styles.fileBtn} htmlFor="input">
        {fileRef.current && fileRef.current.files[0]
          ? fileRef.current.files[0].name
          : "파일선택"}
      </label>
      <input
        className={styles.fileInput}
        ref={fileRef}
        onChange={() => {
          fileHandler(fileRef);
        }}
        type="file"
        id="input"
      />
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          timeHandler(date);
        }}
        minDate={tomorrow}
        locale={ko}
        customInput={<ExampleCustomInput />}
      />
      <input
        ref={msgRef}
        className={styles.msgInput}
        type="text"
        placeholder="commit message"
        onChange={() => {
          msgHandler(msgRef);
        }}
      />
      <button className={styles.addBtn}>
        <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
      </button>
    </form>
  );
};

export default RegAddForm;
