import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./repo_list_item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RepoListItem = ({ item, getRepo }) => {
  const navigator = useNavigate();
  const [repo, setRepo] = useState();
  const [updated, setUpdate] = useState();

  const goto = () => {
    navigator(`/main/${item.name}`);
  };

  useEffect(() => {
    getRepo(item.name, (res) => {
      if (res.message) return;
      setRepo(res);

      setUpdate(new Date(res.updated_at).toLocaleDateString());
    });
  }, []);

  useEffect(() => {
    if (!repo) return;
    console.log(repo);
  }, [repo]);

  return (
    <div className={styles.repo} onClick={goto}>
      <p>{item.name}</p>
      {repo && <p>updated {updated}</p>}
    </div>
  );
};

export default RepoListItem;
