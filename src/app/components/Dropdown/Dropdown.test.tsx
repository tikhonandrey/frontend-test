import * as React from "react";
import { shallow } from "enzyme";

import { Dropdown } from "./Dropdown";

describe("<Dropdown />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(
      <Dropdown>
        <div></div>
      </Dropdown>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("has isOpen flag default to false", () => {
    const wrapper = shallow(
      <Dropdown>
        <div></div>
      </Dropdown>
    );
    expect(wrapper.find('[data-open="false"]')).toBeDefined();
  });

  it("updates isOpen flag when clicked", () => {
    const wrapper = shallow(
      <Dropdown>
        <div></div>
      </Dropdown>
    );
    const link = wrapper.find(".dropdown__link");
    link.simulate("click");

    expect(wrapper.find('[data-open="true"]')).toBeDefined();
  });

  it("Calls onUpdate method when toggled closed/open", () => {
    let triggered = false;
    const updateMethod = () => {
      triggered = true;
    };
    const wrapper = shallow(
      <Dropdown onUpdate={updateMethod}>
        <div></div>
      </Dropdown>
    );
    const link = wrapper.find(".dropdown__link");
    link.simulate("click");
    expect(triggered).toEqual(true);
  });

  it("updates isOpen flag to true when explicitly passed", () => {
    const wrapper = shallow(
      <Dropdown open>
        <div></div>
      </Dropdown>
    );

    expect(wrapper.find('[data-open="true"]')).toBeDefined();
  });
});
