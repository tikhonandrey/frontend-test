import * as React from "react";

import TestComponent from "../components/TestComponent";
import Icon from "../components/Icon";
import Minimap, { MapCoordinateProps } from "../components/Minimap";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const mockCoords: MapCoordinateProps = {
  latitude: 37.33,
  longitude: -121.89
};
export const Home = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
    <TestComponent title={props.compiler} />
    <Icon>keyboard_arrow_down</Icon>
    <Minimap data={mockCoords} popup={"moo"} />
  </h1>
);
