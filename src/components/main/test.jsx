import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import styles from "./test.module.css";
const Test = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <label className={styles.timeInput} onClick={onClick} ref={ref}>
      {value}
    </label>
  ));
  return (
    <div className={styles.test}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        locale={ko}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};
export default Test;
