import * as React from "react";
import { storiesOf } from "@storybook/react";

import { GridSystem } from "./Utilities/GridSystem";
import { PixelsToRemChart } from "./Utilities/PixelsToRem";

const stories = storiesOf("Utilities", module);

stories
  .add("Grid System", () => <GridSystem />)
  .add("Pixels to Rem Helper", () => <PixelsToRemChart />);
