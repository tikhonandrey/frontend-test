import * as React from "react";
import { shallow } from "enzyme";

import { OpenStatus } from "./OpenStatus";

describe("<OpenStatus />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(<OpenStatus open />);

    expect(wrapper).toMatchSnapshot();
  });
});
