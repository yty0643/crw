import React from "react";
import RepoListItem from "../repo_list_item/repo_list_item";

const RepoList = ({ list }) => {
  return (
    <ul>
      {list.map((item) => {
        return <RepoListItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default RepoList;
