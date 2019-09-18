import * as React from "react";
import gql from "graphql-tag";

import LoginForm from "../modules/LoginForm";

export const Login: React.FunctionComponent = () => {
  const login = ({ token }: { token: string }) => {
    localStorage.setItem("token", token);
    location.reload();
  };

  return <LoginForm login={login} />;
};

export default Login;
