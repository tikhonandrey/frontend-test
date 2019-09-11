import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { TestComponent } from "./TestComponent";

const stories = storiesOf("Components", module);

stories.add(
  "TestComponent",
  withInfo({ inline: true })(() => <TestComponent title="I work, yay!" />)
);
