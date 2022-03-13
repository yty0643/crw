import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RegAddForm from "../reg_add_form/reg_add_form";
import RegList from "../reg_list/reg_list";
import RepoTreeMenu from "../repo_tree_menu/repo_tree_menu";

const Repo = ({ authService, githubService, dbService }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState(); // logged-in user's id
  const [repo, setRepo] = useState(); // selected repository's name
  const [tree, setTree] = useState(); // selected repository's folder structure
  const [treeData, setTreeData] = useState(); // tree-menu component init data
  const [contents, setContents] = useState(); // The contents of the file you clicked on the tree-menu component.
  const [path, setPath] = useState(""); // The path of the file you clicked on the tree-menu component.
  const [file, setFile] = useState(); // input file
  const [fileContents, setFileContents] = useState(); // input file contents
  const [time, setTime] = useState(); // input time
  const [regsList, setRegList] = useState(); // reg list from DB

  const makeNode = () => {
    let td = { nodes: {} };
    let index = 0;

    tree.map((item) => {
      let arr = [];
      let str = item.path;
      let idx = str.indexOf("/");
      let sub;
      let key = str;

      if (idx == -1) index++;
      while (idx != -1) {
        sub = str.substring(0, idx);
        str = str.substring(idx + 1);
        idx = str.indexOf("/");
        arr.push(sub);
        key = str;
      }
      let ref = td;
      while (arr.length > 0) {
        ref = ref["nodes"][`${arr[0]}`];
        arr.shift();
      }

      ref.nodes = {
        ...ref.nodes,
        [`${key}`]: {
          label: key,
          index: index,
          type: item.type,
          sha: item.sha,
          nodes: {},
        },
      };
    });
    setTreeData(td.nodes);
  };

  const fileHandler = (fileRef) => {
    if (!fileRef.current.files.length) return;
    setFile(fileRef.current.files[0]);
    fileRef.current.files[0].text().then((res) => setFileContents(res));
  };

  const timeHandler = (timeRef) => {
    const st = new Date();
    const end = new Date(timeRef.current.value);
    if (st > end) {
      alert("잘못된 입력입니다");
      timeRef.current.value = null;
    }
    setTime(timeRef.current.value);
  };

  const commitReg = (event) => {
    event.preventDefault();
    if (!(file && time)) {
      alert("파일 ＊필수＊\n날짜 ＊필수＊\n경로 ＊선택＊");
      return;
    }

    if (
      !window.confirm(
        `경로: ${path + file.name}\n날짜: ${time}\n등록하시겠습니까?`
      )
    )
      return;

    dbService.write(
      userId,
      repo,
      time,
      fileContents,
      `${path + file.name}`,
      "HI"
    );
  };

  const commitDel = (idx) => {
    const key = Object.keys(regsList)[idx];
    dbService.remove(userId, repo, key);
  };

  const treeClick = (type, sha, parent, label) => {
    if (type == "blob") {
      githubService
        .getBlob(userId, repo, sha)
        .then((res) => setContents(atob(res.content)));
      parent && setPath(parent + "/");
    } else {
      setPath(parent + "/" + label + "/");
    }
  };

  useEffect(() => {
    let userName;

    authService.getUser((user) => {
      if (user) {
        userName = user.reloadUserInfo.screenName;
        setUserId(user.reloadUserInfo.screenName);
      } else navigate("/");
    });

    let str = location.pathname;
    let idx = str.indexOf("/");
    str = str.substring(idx + 1);
    idx = str.indexOf("/");
    str = str.substring(idx + 1);
    setRepo(str);

    const callback = (data) => {
      setRegList(data);
    };
    dbService.read2(userName, str, callback);

    dbService.read(userName, str).then((res) => {
      if (res.exists()) {
        setRegList(res.val());
      } else {
        console.log("no data");
      }
    });

    return callback;
  }, []);

  useEffect(() => {
    if (!userId && !repo) return;
    githubService
      .getLastObjSha(userId, repo)
      .then((res) => {
        if (res.message) throw res.message;
        else return res[0].commit.tree.sha;
      })
      .then((res) => githubService.getTree(userId, repo, res))
      .then((res) => setTree(res.tree))
      .catch((err) => console.log(err));
  }, [userId, repo]);

  useEffect(() => {
    if (!tree) return;
    makeNode();
  }, [tree]);

  return (
    <div>
      <div>
        <h1>{repo}</h1>
        <h1>{userId}</h1>
        {treeData && (
          <RepoTreeMenu
            treeData={treeData}
            contents={contents}
            path={path}
            file={file}
            treeClick={treeClick}
          />
        )}
        <RegAddForm
          fileHandler={fileHandler}
          timeHandler={timeHandler}
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
  );
};

export default Repo;
