import * as React from "react";
import { shallow } from "enzyme";

import { Switch } from "./Switch";

describe("<Switch />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(
      <Switch
        onChange={() => {}}
        checked={true}
        disabled={false}
        name="switch_test"
        id="switch_test"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("Triggers onChange when change happens", () => {
    let triggered = false;
    const updateMethod = () => {
      triggered = true;
    };
    const wrapper = shallow(
      <Switch
        onChange={updateMethod}
        checked={false}
        disabled={false}
        name="switch_test"
        id="switch_test"
      />
    );

    const input = wrapper.find(".switch__input");
    input.simulate("change", { target: { checked: true } });
    expect(triggered).toEqual(true);
  });

  it("Is checked if value is passed", () => {
    const wrapper = shallow(
      <Switch
        onChange={() => {}}
        checked={true}
        disabled={false}
        name="switch_test"
        id="switch_test"
      />
    );
    const input = wrapper.find(".switch__input").get(0);
    expect(input.props.checked).toBe(true);
  });
});
