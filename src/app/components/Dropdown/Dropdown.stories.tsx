import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";

import { Dropdown } from "./Dropdown";

const demoItems = ["sushi", "salad", "lemonade"];

const stories = storiesOf("Components", module);

stories.add(
  "Dropdown",
  withInfo({ inline: true })(() => (
    <Dropdown onUpdate={action("Menu Toggled")} open={boolean("open", false)}>
      {demoItems.map((item: string, idx: number) => (
        <div key={idx}>{item}</div>
      ))}
    </Dropdown>
  ))
);
