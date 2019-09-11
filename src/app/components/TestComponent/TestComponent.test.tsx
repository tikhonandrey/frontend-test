import * as React from "react";
import { shallow } from "enzyme";

import { TestComponent } from "./TestComponent";

describe("<TestComponent />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(<TestComponent title="test" />);

    expect(wrapper).toMatchSnapshot();
  });
});
