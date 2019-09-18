import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import { OpenToggleInput } from "./OpenToggleInput";

const stories = storiesOf("Components", module);

stories.add(
  "Open Toggle Input",
  withInfo({ inline: true })(() => (
    <OpenToggleInput
      name={"toggle-sample"}
      id={"toggle_sample"}
      checked={boolean("Checked", false)}
      onChange={action("Changed")}
    />
  ))
);
