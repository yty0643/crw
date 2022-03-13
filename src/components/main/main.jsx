import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import RegPreview from "../reg_preview/reg_preview";
import RepoList from "../repo_list/repo_list";
import styles from "./main.module.css";

const Main = ({ authService, githubService, dbService }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [repositories, setRepoitories] = useState();
  const [regsList, setRegsList] = useState();
  const [regArr, setRegArr] = useState();

  const signOut = () => {
    authService.signOut().then(() => setUserId());
  };

  const getRepo = (repo, callback) => {
    githubService.getRepo(userId, repo).then((res) => callback(res));
  };

  useEffect(() => {
    authService.getUser((user) => {
      if (user) setUserId(user.reloadUserInfo.screenName);
      else navigate("/");
    });
  });

  useEffect(() => {
    if (!userId) return;
    githubService.list(userId).then((res) => setRepoitories(res));

    dbService.readAll(userId).then((res) => {
      if (res.exists()) {
        setRegsList(res.val());
      } else {
        console.log("no data");
      }
    });
  }, [userId]);

  useEffect(() => {
    if (!regsList) return;
    let arr = [];
    Object.keys(regsList).map((repoName) => {
      arr.push(...Object.values(regsList[repoName]));
    });
    arr.sort((a, b) => {
      if (a.time < b.time) return -1;
      else return 1;
    });
    setRegArr(arr);

    arr.map((item) => {
      const st = new Date();
      const end = new Date(item.time);
      const cmp = end - st;
      console.log(`${cmp}ms 뒤에 ${item.repo}에서 ${item.path} 커밋예정`);
      // setTimeout(() => {
      //   let shaObj = {};
      //   githubService
      //     .getLastObjSha(item.userId, item.repo)
      //     .then((res) => (shaObj.objSha = res[0].sha))
      //     .then(() =>
      //       githubService.getNewBlobSha(item.userId, item.repo, item.contents)
      //     )
      //     .then((res) => (shaObj.blobSha = res.sha))
      //     .then(() => {
      //       githubService.getNewTreeSha(
      //         item.userId,
      //         item.repo,
      //         item.path,
      //         shaObj.objSha,
      //         shaObj.blobSha
      //       );
      //     })
      //     .then((res) => (shaObj.treeSha = res.sha))
      //     .then(() =>
      //       githubService.getNewCommitSha(
      //         item.userId,
      //         item.repo,
      //         shaObj.objSha,
      //         shaObj.treeSha
      //       )
      //     )
      //     .then((res) => (shaObj.commitSha = res.sha))
      //     .then(() =>
      //       githubService.updateReference(item.userId, item.repo, shaObj.commitSha)
      //     )
      //     .then((res) => console.log(res));
      // }, timeout);
    });
  }, [regsList]);

  return (
    <section className={styles.main}>
      <Navbar userId={userId} signOut={signOut} />
      {/* <Header /> */}
      {repositories && <RepoList list={repositories} getRepo={getRepo} />}
      {regArr && <RegPreview regArr={regArr} />}
    </section>
  );
};

export default Main;
