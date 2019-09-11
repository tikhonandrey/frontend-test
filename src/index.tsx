import * as React from "react";
import * as ReactDOM from "react-dom";

require("./style/index.sass");

import { Home } from "./app/pages/home";

ReactDOM.render(
  <Home compiler="TypeScript" framework="React" />,
  document.getElementById("app")
);
