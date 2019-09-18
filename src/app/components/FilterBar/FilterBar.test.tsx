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

  it("sends a name/value update on change", () => {
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

    expect(result.name).toEqual("price");
    expect(result.value.name).toEqual("$$");
    expect(result.value.checked).toEqual(false);
  });
});
