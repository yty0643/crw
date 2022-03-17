import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import RepoList from "../repo_list/repo_list";
import Schedule from "../schedule/schedule";
import styles from "./main.module.css";

const Main = ({ authService, githubService, dbService }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [repositories, setRepoitories] = useState();
  const [regsList, setRegsList] = useState();
  const [repoNameArr, setRepoNameArr] = useState();
  const [token, setToken] = useState();
  const [weekArr, setWeekArr] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const signOut = () => {
    authService.signOut().then(() => setUserId());
  };

  const tokenDel = () => {
    dbService.removeToken(userId);
    navigate("/");
  };

  const getLag = (repo, callback) => {
    githubService //
      .getLanguages(userId, repo)
      .then((res) => callback(res));
  };

  useEffect(() => {
    authService.getUser((user) => {
      if (user) {
        setUserId(user.reloadUserInfo.screenName);
        dbService.readToken(user.reloadUserInfo.screenName).then((res) => {
          if (res.exists()) {
            setToken(res.val());
          } else {
            navigate("/");
          }
        });
      } else navigate("/");
    });
  });

  useEffect(() => {
    if (!userId) return;
    githubService.list(userId).then((res) => {
      let arr = [];
      res.map((item) => {
        arr.push(item.name);
      });
      setRepoNameArr(arr);
      setRepoitories(res);
    });

    dbService.readAll(userId).then((res) => {
      if (res.exists()) {
        setRegsList(res.val());
      }
    });
  }, [userId]);

  useEffect(() => {
    if (!regsList) return;
    let arr = [];
    const week = [false, false, false, false, false, false, false];
    const now = new Date(new Date().toLocaleDateString());
    Object.keys(regsList).map((repoName) => {
      arr.push(...Object.values(regsList[repoName]));
    });
    arr.map((item) => {
      const date = new Date(item.time);
      const diff = (date - now) / (1000 * 3600 * 24);
      if (diff >= 0 && diff < 7) week[diff] = true;
    });
    setWeekArr(week);
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
      //         item.msg,
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
    <>
      {token && (
        <div className={styles.mainDoc}>
          <Header
            dbService={dbService}
            userId={userId}
            repoNameArr={repoNameArr}
            signOut={signOut}
            tokenDel={tokenDel}
          />
          <div className={styles.section}>
            <Schedule weekArr={weekArr} />
            {repositories && (
              <RepoList
                list={repositories}
                regsList={regsList}
                getLag={getLag}
              />
            )}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Main;
