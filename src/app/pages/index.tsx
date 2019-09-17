import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";

const Pages: React.FunctionComponent = () => (
  <div className="app--container">
    <Home />
  </div>
);

export default Pages;
