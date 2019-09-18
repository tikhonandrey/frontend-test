import * as React from "react";
import { shallow } from "enzyme";

import { LoginForm } from "./LoginForm";

describe("<LoginForm />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(<LoginForm login={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });
});
