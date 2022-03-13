import React, { useEffect, useState } from "react";

const Test = ({ dbService }) => {
  const [userId, setUserId] = useState("yty0643");
  const [regList, setRegList] = useState();
  const [regArr, setRegArr] = useState();

  const onClick = () => {
    dbService.readAll(userId).then((res) => {
      if (res.exists()) {
        setRegList(res.val());
      } else {
        console.log("no data");
      }
    });
  };

  useEffect(() => {
    if (!regList) return;
    let arr = [];
    Object.keys(regList).map((repoName) => {
      arr.push(...Object.values(regList[repoName]));
    });
    setRegArr(arr);
  }, [regList]);

  return (
    <div>
      <button onClick={onClick}>click</button>
      <ul>
        {regArr &&
          regArr.map((item, index) => {
            return (
              <li key={index}>
                {item.time}
                {item.file}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Test;
