import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goto = (user) => {
    navigate("/main", { state: { userId: user.reloadUserInfo.screenName } });
  };
  const signIn = () => {
    authService.signIn().then((user) => goto(user));
  };
  useEffect(() => {
    authService.authChange(goto);
  });

  return (
    <div>
      <button value="gitgub" onClick={signIn}>
        github
      </button>
    </div>
  );
};

export default Login;
