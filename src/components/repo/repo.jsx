import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import PreviewFile from "../preview_file/preview_file";
import PreviewRepo from "../preview_repo/preview_repo";
import styles from "./repo.module.css";

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
  const [commitMsg, setCommitMsg] = useState(); // input commit message
  const [fileContents, setFileContents] = useState(); // input file contents
  const [time, setTime] = useState(); // input time
  const [regsList, setRegList] = useState(); // reg list from DB
  const [repoNameArr, setRepoNameArr] = useState();

  const signOut = () => {
    authService.signOut().then(() => setUserId());
  };

  const tokenDel = () => {
    dbService.removeToken(userId);
    navigate("/");
  };

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

  const timeHandler = (date) => {
    setTime(new Date(date).toLocaleDateString());
  };

  const msgHandler = (msgRef) => {
    setCommitMsg(msgRef.current.value);
  };

  const commitReg = (event) => {
    event.preventDefault();
    if (!(file && time)) {
      alert("파일 ＊필수＊\n날짜 ＊필수＊\n경로 ＊선택＊\n커밋메세지 *선택*");
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
      file.name,
      time,
      fileContents,
      `${path + file.name}`,
      commitMsg ? commitMsg : "commit from CRW"
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
    authService.getUser((user) => {
      if (user) setUserId(user.reloadUserInfo.screenName);
      else navigate("/");
    });
  });

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
    dbService.readObserver(userName, str, callback);

    dbService.read(userName, str).then((res) => {
      if (res.exists()) {
        setRegList(res.val());
      }
    });

    return callback;
  }, [location]);

  useEffect(() => {
    if (!userId && !repo) return;
    githubService.list(userId).then((res) => {
      let arr = [];
      res.map((item) => {
        arr.push(item.name);
      });
      setRepoNameArr(arr);
    });

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
    <div className={styles.repoDoc}>
      <Header
        dbService={dbService}
        userId={userId}
        repoNameArr={repoNameArr}
        signOut={signOut}
        tokenDel={tokenDel}
      />
      <div className={styles.section}>
        <PreviewRepo
          regsList={regsList}
          treeData={treeData}
          repo={repo}
          contents={contents}
          path={path}
          file={file}
          treeClick={treeClick}
          fileHandler={fileHandler}
          timeHandler={timeHandler}
          msgHandler={msgHandler}
          commitReg={commitReg}
          commitDel={commitDel}
        />
        <PreviewFile contents={contents} />
      </div>
      <Footer />
    </div>
  );
};

export default Repo;
