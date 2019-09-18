import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";

import mockData from "../../__mocks__/search";

import { ReviewItem } from "./ReviewItem";
const review = mockData.data.search.business[0].reviews[0];

const stories = storiesOf("Components", module);

stories.add(
  "Review Item",
  withInfo({ inline: true })(() => <ReviewItem data={review} />)
);
