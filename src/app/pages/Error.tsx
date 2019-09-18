import * as React from "react";

import Button from "../components/Button";

export const Error: React.FunctionComponent = () => {
  const logout = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div className="module module__error">
      <h2>Something Blew Up. :(</h2>
      <p>Your API token might be invalid?</p>
      <Button onClick={logout}>Reset (Fake Logout)</Button>
    </div>
  );
};

export default Error;
