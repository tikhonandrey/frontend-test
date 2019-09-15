import * as React from "react";
import { shallow } from "enzyme";

import { Button } from "./Button";

describe("<Button />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(<Button onClick={() => {}}>Content</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  it("Calls onClick method", () => {
    let triggered = false;
    const clickMethod = () => {
      triggered = true;
    };
    const wrapper = shallow(<Button onClick={clickMethod}>Content</Button>);
    const button = wrapper.find("button").at(0);
    button.simulate("click");
    expect(triggered).toEqual(true);
  });

  it("Disables with disabled flag", () => {
    const wrapper = shallow(
      <Button disabled onClick={() => {}}>
        Content
      </Button>
    );

    expect(wrapper.prop("disabled")).toBe(true);
  });
});
