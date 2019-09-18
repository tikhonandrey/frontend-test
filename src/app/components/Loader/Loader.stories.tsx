import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";

import mockData from "../../__mocks__/search";
import { Loader } from "./Loader";

const stories = storiesOf("Components", module);

stories.add("Loader", () => <Loader />);
