import * as React from "react";
import { shallow } from "enzyme";

import { OpenToggleInput } from "./OpenToggleInput";

describe("<OpenToggleInput />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(
      <OpenToggleInput
        name={"toggle-sample"}
        id={"toggle_sample"}
        checked={false}
        onChange={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
