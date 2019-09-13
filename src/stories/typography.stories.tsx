import * as React from "react";
import { storiesOf } from "@storybook/react";

import { DefaultHeaders } from "./Typography/Headers";
import { Text } from "./Typography/Text";

const stories = storiesOf("Typography", module);

stories
  .add("Headers", () => (
    <div>
      <DefaultHeaders />
    </div>
  ))
  .add("Text & Colors", () => (
    <div>
      <Text />
    </div>
  ));
