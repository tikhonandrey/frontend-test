import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";

import { FilterBar } from "./FilterBar";

const stories = storiesOf("Components", module);

stories.add(
  "Filter Bar",
  withInfo({ inline: true })(() => (
    <FilterBar
      prices={["$", "$$", "$$$"]}
      categories={["French", "Italian", "Japanese"]}
      values={{
        prices: ["$$"],
        categories: ["French"],
        open: false
      }}
      onUpdate={action("Update event")}
    />
  ))
);
