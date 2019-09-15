import * as React from "react";
import { shallow } from "enzyme";

import Minimap, { MapCoordinateProps } from "./Minimap";

const mockCoords: MapCoordinateProps = {
  latitude: 37.33,
  longitude: -121.89
};

describe("<Minimap />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(<Minimap data={mockCoords} />);

    expect(wrapper).toMatchSnapshot();
  });
});
