import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Minimap, MapCoordinateProps } from "./Minimap";

const mockCoords: MapCoordinateProps = {
  latitude: 37.33,
  longitude: -121.89
};

const stories = storiesOf("Components", module);
stories.add(
  "Minimap",
  withInfo({ inline: true })(() => (
    <Minimap
      data={mockCoords}
      popup={text("Popup Marker", "Hello, from Map!")}
      size={select("Size", ["small", "normal", "large"], "normal")}
      label={text("Optional Label", "123 My Address, Somewhere, CA, 12354")}
    />
  ))
);
