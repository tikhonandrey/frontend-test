import * as React from "react";

import TestComponent from "../components/TestComponent";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Home = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
    <TestComponent title={props.compiler} />
  </h1>
);
