import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import { Button } from "./Button";

const stories = storiesOf("Components", module);
stories.addDecorator(withKnobs);
stories.add(
  "Button",
  withInfo({ inline: true })(() => (
    <Button
      secondary={boolean("Secondary", false)}
      disabled={boolean("Disabled", false)}
      block={boolean("Block", false)}
      onClick={action("click!")}
      className={text("Class Name", null)}
    >
      {text("Button Text", "Button Text")}
    </Button>
  ))
);
