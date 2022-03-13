import React from "react";

const RegListItem = ({ item, idx, commitDel }) => {
  return (
    <li>
      <div>
        <p>
          {item.time}
          <br />
          {item.fileContents}
          <br />
          {item.path}
        </p>
        <button
          onClick={() => {
            commitDel(idx);
          }}
        >
          del
        </button>
      </div>
    </li>
  );
};

export default RegListItem;
