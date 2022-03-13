import React from "react";
import TreeViewMenu from "react-simple-tree-menu";

const RepoTreeMenu = ({ treeData, contents, path, file, treeClick }) => {
  return (
    <div>
      <TreeViewMenu
        data={treeData}
        onClickItem={({ type, sha, key, label, parent, ...props }) => {
          treeClick(type, sha, parent, label);
        }}
      />
      <pre>{contents && contents}</pre>
      <p>
        최종경로:{path}
        {file && file.name}
      </p>
    </div>
  );
};

export default RepoTreeMenu;
