import * as React from "react";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { shallow, mount } from "enzyme";
import * as Apollo from "@apollo/react-testing";

import { ListView } from "./ListView";
import mocks from "./__mocks__/search.mock";

const TEST_PARAMS = {
  location: "las vegas",
  limit: 20,
  categories: "Restaurants"
};

function mountWithProvider(component, mocks) {
  return mount(
    <Apollo.MockedProvider mocks={mocks} addTypename={false}>
      {component}
    </Apollo.MockedProvider>
  );
}

const updateWrapper = async (wrapper, time = 0) => {
  await act(async () => {
    await new Promise(res => setTimeout(res, time));
    await wrapper.update();
  });
};

describe("<ListView />", () => {
  it("doesn't blow up", () => {
    const wrapper = shallow(
      <Apollo.MockedProvider mocks={mocks} addTypename={false}>
        <ListView {...TEST_PARAMS} />
      </Apollo.MockedProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", async () => {
    const wrapper = mountWithProvider(<ListView {...TEST_PARAMS} />, mocks);
    await updateWrapper(wrapper);
  });

  it("should render loading state initially", async () => {
    const wrapper = mountWithProvider(<ListView {...TEST_PARAMS} />, mocks);
    expect(wrapper.text()).toContain("Loading...");
  });
});
