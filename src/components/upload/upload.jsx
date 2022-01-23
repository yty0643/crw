import React from "react";

const Upload = (props) => {
  // var requestOptions = {
  //   method: "GET",
  //   redirect: "follow",
  //   auth: {
  //     user: "yty0643",
  //     pass: "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",
  //   },
  // };

  // fetch("https://api.github.com/user/repos", requestOptions)
  // .then((response) => response.text())
  // .then((result) => console.log(result))
  // .catch((error) => console.log("error", error));

  fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: "token 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",
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return (
    <div>
      <input type="file" />
      <input type="file" />
      <input type="file" />
      <input type="file" />
    </div>
  );
};

export default Upload;
