import * as React from "react";
import { shallow } from "enzyme";

import { FilterBar } from "./FilterBar";

describe("<FilterBar />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(
      <FilterBar
        prices={["$", "$$", "$$$"]}
        categories={["French", "Italian", "Japanese"]}
        values={{
          prices: ["$$"],
          categories: ["French"],
          open: false
        }}
        onUpdate={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("prices: sends a name/value update on change", () => {
    let result: { name: string; value: any } = {
      name: null,
      value: {}
    };
    const callback = (name, value) => {
      result = {
        name,
        value
      };
    };

    const wrapper = shallow(
      <FilterBar
        prices={["$", "$$", "$$$"]}
        categories={["French", "Italian", "Japanese"]}
        values={{
          prices: ["$$"],
          categories: ["French"],
          open: false
        }}
        onUpdate={callback}
      />
    );

    const price = wrapper
      .find(".filter-bar__price-dropdown-input")
      .find('[name="$$"]');

    expect(price.prop("checked")).toEqual(true);

    price.simulate("change", { name: "$$", checked: false });

    expect(result.name).toEqual("prices");
    expect(result.value.name).toEqual("$$");
    expect(result.value.checked).toEqual(false);
  });

  it("categories: sends a name/value update on change", () => {
    let result: { name: string; value: any } = {
      name: null,
      value: {}
    };
    const callback = (name, value) => {
      result = {
        name,
        value
      };
    };

    const wrapper = shallow(
      <FilterBar
        prices={["$", "$$", "$$$"]}
        categories={["French", "Italian", "Japanese"]}
        values={{
          prices: ["$$"],
          categories: ["French"],
          open: false
        }}
        onUpdate={callback}
      />
    );

    const category = wrapper
      .find(".filter-bar__category-dropdown-input")
      .find('[name="French"]');

    expect(category.prop("checked")).toEqual(true);

    category.simulate("change", { name: "French", checked: false });

    expect(result.name).toEqual("categories");
    expect(result.value.name).toEqual("French");
    expect(result.value.checked).toEqual(false);
  });

  it("toggles the open boolean on change", () => {
    let result: { name: string; value: any } = {
      name: null,
      value: {}
    };
    const callback = (name, value) => {
      console.log(">>>", name);
      result = {
        name,
        value
      };
    };

    const wrapper = shallow(
      <FilterBar
        prices={["$", "$$", "$$$"]}
        categories={["French", "Italian", "Japanese"]}
        values={{
          prices: ["$$"],
          categories: ["French"],
          open: false
        }}
        onUpdate={callback}
      />
    );
    const open = wrapper
      .find(".filter-bar__open-toggle-input")
      .find('[name="open"]');

    expect(open.prop("checked")).toEqual(false);

    open.simulate("change", { name: "open", checked: true });

    expect(result.name).toEqual("open");
    expect(result.value.name).toEqual("open");
    expect(result.value.checked).toEqual(true);
  });
});
