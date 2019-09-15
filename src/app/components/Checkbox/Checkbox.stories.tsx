import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";

import { Checkbox } from "./Checkbox";

const stories = storiesOf("Components", module);

stories.add(
  "Checkbox",
  withInfo({ inline: true })(() => (
    <Checkbox
      onChange={action("Change event")}
      checked={boolean("Checked", true)}
      disabled={boolean("Disabled", false)}
      name="checkbox_test"
      id="checkbox_test"
      label="Hello Checkbox"
    />
  ))
);
