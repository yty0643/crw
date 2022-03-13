import React from "react";
import { Outlet } from "react-router-dom";
import RepoListItem from "../repo_list_item/repo_list_item";
import styles from "./repo_list.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RepoList = ({ list, getRepo }) => {
  return (
    <div className={styles.repos}>
      {list.map((item) => {
        return <RepoListItem key={item.id} item={item} getRepo={getRepo} />;
      })}
      <Outlet />
    </div>
  );
};

export default RepoList;
