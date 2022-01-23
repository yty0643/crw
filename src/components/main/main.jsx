import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Upload from "../upload/upload";

const Main = ({ authService }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [user, setUser] = useState(navigateState && navigateState.userId);

  const signOut = () => {
    authService.signOut();
    setUser();
    navigate("/");
  };

  return (
    <div>
      <Navbar user={user} signOut={signOut} />
      <Header />
      <Upload />
    </div>
  );
};

export default Main;
