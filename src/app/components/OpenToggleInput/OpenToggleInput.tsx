import * as React from "react";

import Checkbox, { ChangeEventObject } from "../Checkbox";

export interface OpenToggleInputProps {
  className?: string;
  checked: boolean;
  name: string;
  id: string;
  onChange: (result: ChangeEventObject) => void;
}

export const OpenToggleInput: React.FunctionComponent<OpenToggleInputProps> = ({
  checked,
  onChange,
  name,
  id
}) => (
  <div className="open-toggle-input">
    <Checkbox
      label="Open Now"
      checked={checked}
      className="checkbox--radio"
      name={name}
      id={id}
      onChange={onChange}
    />
  </div>
);
