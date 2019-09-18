import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";

const demoItems = ["sushi", "salad", "lemonade"];

const stories = storiesOf("Components", module);

import { Dropdown } from "./Dropdown";
import Checkbox, { ChangeEventObject } from "../Checkbox";

interface CheckboxList {
  [name: string]: boolean;
}

interface DemoProps {
  items: CheckboxList;
}
const items: CheckboxList = {
  sushi: true,
  salad: false,
  banana: false
};

export const DropdownWithCheckboxes: React.FunctionComponent = () => {
  const [changedItems, updateItems] = React.useState(items);

  const changeHandler = ({ name, value }: ChangeEventObject) => {
    updateItems({
      ...changedItems,
      [name]: value
    });
  };

  return (
    <div className="grid">
      <Dropdown className="col-8" open name="Click Me">
        {Object.keys(items).map((item: string, idx: number) => (
          <Checkbox
            key={idx}
            id={`item-${idx}`}
            label={item}
            name={item}
            checked={changedItems[item]}
            onChange={changeHandler}
          />
        ))}
      </Dropdown>
      <div>
        <h4>Items result:</h4>
        {JSON.stringify(changedItems)}
      </div>
    </div>
  );
};

stories.add("Dropdown With Checkboxes", () => <DropdownWithCheckboxes />);
