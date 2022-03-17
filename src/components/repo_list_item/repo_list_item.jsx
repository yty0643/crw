import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./repo_list_item.module.css";

const RepoListItem = ({ item, regsList, getLag }) => {
  const [lag, setLag] = useState();
  const navigate = useNavigate();

  const goto = () => {
    navigate(`/main/${item.name}`);
  };

  useEffect(() => {
    getLag(item.name, (res) => {
      if (res.message) return;
      let str = "";
      Object.keys(res).map((item) => {
        str += item + " ";
      });
      setLag(str);
    });
  }, []);

  return (
    <div className={styles.repo} onClick={goto}>
      <p className={styles.repoName}>{item.name}</p>
      <p className={styles.updated}>
        updated {new Date(item.updated_at).toLocaleDateString()}
      </p>
      {lag && <p className={styles.lag}>{lag}</p>}
      {regsList && <p className={styles.commitLight}>●</p>}
    </div>
  );
};

export default RepoListItem;
