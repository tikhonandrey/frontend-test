import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs";

import { StarRating } from "./StarRating";

const stories = storiesOf("Components", module);
stories.add(
  "StarRating",
  withInfo({ inline: true })(() => (
    <StarRating
      size={select("Size", ["small", "large"], "small")}
      rating={select("Rating", [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5], 2.5)}
    />
  ))
);
