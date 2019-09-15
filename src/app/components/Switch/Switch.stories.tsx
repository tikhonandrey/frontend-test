import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";

import { Switch } from "./Switch";

const stories = storiesOf("Components", module);

stories.add(
  "Switch",
  withInfo({ inline: true })(() => (
    <Switch
      onChange={action("Change event")}
      checked={boolean("Checked", true)}
      disabled={boolean("Disabled", false)}
      name="switch_test"
      id="switch_test"
    />
  ))
);
