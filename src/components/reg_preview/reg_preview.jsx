import React from "react";

const RegPreview = ({ regArr }) => {
  return (
    <ul>
      {regArr.map((item, index) => {
        return (
          <li key={index}>
            {item.time}
            {item.file}
          </li>
        );
      })}
    </ul>
  );
};

export default RegPreview;
