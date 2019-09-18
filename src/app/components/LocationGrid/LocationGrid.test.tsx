import * as React from "react";
import { mount } from "enzyme";

import { LocationGridItem } from "./LocationGridItem";
import { FILTER_DEFAULT } from "../FilterBar";
import { LocationGrid } from "./LocationGrid";
import mockData from "../../__mocks__/search";

describe("<LocationGridItem />", () => {
  it("doesn't blow up", () => {
    const data = mockData.search.business;
    const wrapper = mount(<LocationGridItem data={data[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("<LocationGrid />", () => {
  it("doesn't blow up", () => {
    const data = mockData.search.business;
    const wrapper = mount(
      <LocationGrid list={data} filters={FILTER_DEFAULT} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
