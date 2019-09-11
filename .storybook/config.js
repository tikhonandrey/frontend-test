import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
// require("../src/stories/_helpers/styles/storybook.sass");

// automatically import all files ending in *.stories.tsx
const components = require.context(
  "../src/app/components",
  true,
  /.stories.tsx$/
);
function loadStories() {
  components.keys().forEach(filename => components(filename));
}

addDecorator(
  withOptions({
    name: "Internal Design System",
    url: "#"
  })
);

configure(loadStories, module);
