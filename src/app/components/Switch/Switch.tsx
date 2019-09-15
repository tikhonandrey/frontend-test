import * as React from "react";

import { joinClassList } from "../../helpers";

export interface ChangeEventObject {
  name: string;
  value: boolean;
}
export interface SwitchProps {
  /**
   * Triggers when Checkbox is toggled checked/unchecked.
   */
  onChange: (result: ChangeEventObject) => void;
  /**
   * The Name of the checkbox. Make sure it's unique to the page!
   */
  name: string;
  checked: boolean;
  disabled?: boolean;
  /**
   * Can be text or a React Element.
   */
  label?: [string, string];
  children?: React.ReactNode;
  /** Required for inputs. */
  id: string;
  className?: string;
}

export const Switch: React.FunctionComponent<SwitchProps> = ({
  onChange,
  name,
  checked,
  disabled = false,
  label = ["", ""],
  children,
  id,
  className
}) => {
  const [isChecked, toggleChecked] = React.useState(checked);
  const classes = [
    `switch`,
    `${className || ""}`,
    `${checked ? "switch--on" : ""}`
  ];

  React.useEffect(() => toggleChecked(checked), [checked]);

  return (
    <div className={joinClassList(classes)}>
      <label className="switch__label" htmlFor={id}>
        {label[0]}
        <input
          className="switch__input"
          type="checkbox"
          name={name}
          id={id}
          checked={isChecked}
          disabled={disabled}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            toggleChecked(!isChecked);
            onChange({ name, value: e.target.checked });
          }}
        />
        <span className="switch__lever" />
        {label[1]}
      </label>
    </div>
  );
};
