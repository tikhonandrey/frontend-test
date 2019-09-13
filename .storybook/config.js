import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
require("../src/style/storybook.sass");

// automatically import all files ending in *.stories.tsx
const components = require.context(
  "../src/app/components",
  true,
  /.stories.tsx$/
);
const stories = require.context("../src/stories", true, /.stories.tsx$/);

function loadStories() {
  stories.keys().forEach(filename => stories(filename));
  components.keys().forEach(filename => components(filename));
}

addDecorator(
  withOptions({
    name: "Internal Design System",
    url: "#"
  })
);

configure(loadStories, module);
