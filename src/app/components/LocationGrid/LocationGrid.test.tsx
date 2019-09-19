import * as React from "react";
import { shallow } from "enzyme";

import { LocationGridItem } from "./LocationGridItem";
import { FILTER_DEFAULT } from "../FilterBar";
import { LocationGrid, filterList } from "./LocationGrid";
import { deriveCategories, deriveOptions } from "../../pages/ListView";
import mockData from "../../__mocks__/search";

describe("<LocationGridItem />", () => {
  it("doesn't blow up", () => {
    const data = mockData.search.business;
    const wrapper = shallow(<LocationGridItem data={data[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("<LocationGrid />", () => {
  it("doesn't blow up", () => {
    const data = mockData.search.business;
    const wrapper = shallow(
      <LocationGrid list={data} filters={FILTER_DEFAULT} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("filterList: filters entries based on criteria", () => {
    const data = mockData.search.business;
    const categories = deriveCategories(data);
    const prices = deriveOptions("price", data);
    const filters = {
      open: true,
      categories,
      prices
    };

    const wrapper = shallow(<LocationGrid list={data} filters={filters} />);

    const children = wrapper.find(".location-grid").children();
    expect(children.length).toEqual(data.length);
  });

  it("filterList: should show nothing with empty filters", () => {
    const data = mockData.search.business;

    const wrapper = shallow(
      <LocationGrid list={data} filters={FILTER_DEFAULT} />
    );

    const children = wrapper.find(".location-grid").children();
    expect(children.length).toEqual(1);
    expect(wrapper.find(".location-grid--empty")).toBeDefined();
  });
});
