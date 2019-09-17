import * as React from "react";
import { shallow } from "enzyme";

import { StarRating, TYPE_MAP } from "./StarRating";

describe("<StarRating />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(<StarRating rating={4} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders 5 whole stars", () => {
    const wholeStarText = TYPE_MAP["whole"];
    const wrapper = shallow(<StarRating rating={5} />);

    const texts = wrapper
      .find(".star-rating__star")
      .map(node => node.children().text());
    expect(texts).toEqual([
      wholeStarText,
      wholeStarText,
      wholeStarText,
      wholeStarText,
      wholeStarText
    ]);
  });

  it("renders 2.5 of 5 stars", () => {
    const wrapper = shallow(<StarRating rating={2.5} />);

    const texts = wrapper
      .find(".star-rating__star")
      .map(node => node.children().text());
    expect(texts).toEqual([
      TYPE_MAP["whole"],
      TYPE_MAP["whole"],
      TYPE_MAP["half"],
      TYPE_MAP["empty"],
      TYPE_MAP["empty"]
    ]);
  });
});
