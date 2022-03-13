import React, { useEffect } from "react";
import RegListItem from "../reg_list_item/reg_list_item";

const RegList = ({ regsList, commitDel }) => {
  return (
    <ul>
      {Object.values(regsList).map((item, idx) => {
        return (
          <RegListItem key={idx} idx={idx} item={item} commitDel={commitDel} />
        );
      })}
    </ul>
  );
};
export default RegList;
