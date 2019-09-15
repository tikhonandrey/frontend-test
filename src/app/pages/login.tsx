import * as React from "react";

import LoginForm from "../modules/LoginForm";

export const Login: React.FunctionComponent = () => {
  const login = ({ token }: { token: string }) => {
    // localStorage.setItem("token", token);
    debugger;
  };

  return <LoginForm login={login} />;
};

export default Login;
