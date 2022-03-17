import React from "react";
import RepoListItem from "../repo_list_item/repo_list_item";
import styles from "./repo_list.module.css";

const RepoList = ({ list, regsList, getLag }) => {
  return (
    <div className={styles.repos}>
      {list &&
        list.map((item) => {
          return (
            <RepoListItem
              key={item.id}
              item={item}
              regsList={regsList && regsList[item.name]}
              getLag={getLag}
            />
          );
        })}
    </div>
  );
};

export default RepoList;
