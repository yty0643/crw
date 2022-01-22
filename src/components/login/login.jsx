import React, { useEffect, useState } from "react";

const Login = ({ authService }) => {
  const [user, setUser] = useState();
  const signIn = () => {
    authService.signIn().then((user) => {
      console.log(user);
      setUser(user.reloadUserInfo.screenName);
    });
  };
  const signOut = () => {
    authService.signOut();
    setUser();
  };

  useEffect(() => {
    authService.authChange((user) => {
      setUser(user.reloadUserInfo.screenName);
    });
    console.log(user);
  });

  return (
    <div>
      <p>{user}</p>
      <button value="gitgub" onClick={signIn}>
        github
      </button>
      <button onClick={signOut}>signOut</button>
    </div>
  );
};

export default Login;
