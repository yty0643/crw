import React from "react";
import TreeViewMenu from "react-simple-tree-menu";
import RegAddForm from "../reg_add_form/reg_add_form";
import RegList from "../reg_list/reg_list";
import styles from "./preview_repo.module.css";

const PreviewRepo = ({
  regsList,
  treeData,
  repo,
  path,
  file,
  treeClick,
  fileHandler,
  timeHandler,
  msgHandler,
  commitReg,
  commitDel,
}) => {
  return (
    <div className={styles.previewRepo}>
      <p className={styles.title}>{repo}</p>
      <div className={styles.contents}>
        {treeData && (
          <div className={styles.repoDirectory}>
            <p className={styles.path}>
              path: {path}
              {file && file.name}
            </p>
            <TreeViewMenu
              data={treeData}
              onClickItem={({ type, sha, key, label, parent, ...props }) => {
                treeClick(type, sha, parent, label);
              }}
            />
          </div>
        )}
        <div className={styles.horizontal}></div>
        <div className={styles.vertical}></div>
        <div className={styles.regEditor}>
          <RegAddForm
            fileHandler={fileHandler}
            timeHandler={timeHandler}
            msgHandler={msgHandler}
            commitReg={commitReg}
          />
          {regsList && (
            <RegList //
              regsList={regsList}
              commitDel={commitDel}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewRepo;
