/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from "react";
import Background from "../../components/Background";
import LoginBox from "./components/LoginBox";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const accessToken = window.localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken) {
      history.push("/dashboard");
    }
  }, [accessToken, history]);

  return (
    <Background>
      <LoginBox />
    </Background>
  );
};

export default Login;
