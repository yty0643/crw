import React, { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Test = ({ githubService }) => {
  const [objSha, setObjSha] = useState();
  const [blobSha, setBlobSha] = useState();
  const [treeSha, setTreeSha] = useState();
  const [commitSha, setCommitSha] = useState();

  let a = 2;
  const set = async (sha) => {
    a = sha;
  };
  useEffect(() => {
    githubService //
      .getLastObjSha()
      .then((res) => {
        set(res[0].sha);
      })
      .then(console.log(a));
  }, []);
  //   useEffect(() => {
  //     githubService
  //       .getLastObjSha()
  //       .then((res) => res.json())
  //       .then((res) => setObjSha(res[0].sha))
  //       .then(() => githubService.getNewBlobSha())
  //       .then((res) => res.json())
  //       .then((res) => setBlobSha(res.sha))
  //       .then(() => githubService.getNewTreeSha(objSha, blobSha))
  //       .then((res) => res.json())
  //       .then((res) => setTreeSha(res.sha))
  //       .then(() => githubService.getNewCommitSha(objSha, treeSha))
  //       .then((res) => res.json())
  //       .then((res) => setCommitSha(res.sha));
  //   }, []);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Test;
