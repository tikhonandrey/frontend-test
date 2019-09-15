import * as React from "react";
import { shallow } from "enzyme";

import { Icon } from "./Icon";

describe("<Icon />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(<Icon>check</Icon>);

    expect(wrapper).toMatchSnapshot();
  });
});
