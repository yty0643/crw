import React, { useRef } from "react";

const RegAddForm = ({ fileHandler, timeHandler, commitReg }) => {
  const fileRef = useRef();
  const timeRef = useRef();

  return (
    <form onSubmit={commitReg}>
      <input
        ref={fileRef}
        type="file"
        onChange={() => {
          fileHandler(fileRef);
        }}
      />
      <input
        ref={timeRef}
        type="datetime-local"
        onChange={() => {
          timeHandler(timeRef);
        }}
      />
      <button>등록</button>
    </form>
  );
};

export default RegAddForm;
