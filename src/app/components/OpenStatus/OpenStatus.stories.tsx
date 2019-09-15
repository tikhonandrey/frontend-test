import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";

import { OpenStatus } from "./OpenStatus";

const stories = storiesOf("Components", module);
stories.add(
  "OpenStatus",
  withInfo({ inline: true })(() => (
    <OpenStatus
      open={boolean("Open", true)}
      size={select("Size", ["normal", "small", "compact"], "normal")}
    />
  ))
);
