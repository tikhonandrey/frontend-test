import * as React from "react";
import { shallow } from "enzyme";

import { Checkbox } from "./Checkbox";

describe("<Checkbox />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(
      <Checkbox
        onChange={() => {}}
        checked={true}
        disabled={false}
        label="label"
        name="checkbox_test"
        id="checkbox_test"
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
      <Checkbox
        onChange={updateMethod}
        checked={false}
        disabled={false}
        label="label"
        name="checkbox_test"
        id="checkbox_test"
      />
    );

    const input = wrapper.find(".checkbox__input");
    input.simulate("change", { target: { checked: true } });
    expect(triggered).toEqual(true);
  });

  it("Is checked if value is passed", () => {
    const wrapper = shallow(
      <Checkbox
        onChange={() => {}}
        checked={true}
        disabled={false}
        label="label"
        name="checkbox_test"
        id="checkbox_test"
      />
    );
    const input = wrapper.find(".checkbox__input").get(0);
    expect(input.props.checked).toBe(true);
  });
});
