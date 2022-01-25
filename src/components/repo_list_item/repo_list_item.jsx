import React from "react";

const RepoListItem = ({ item }) => {
  return (
    <li>
      <button>{item.name}</button>
    </li>
  );
};

export default RepoListItem;
