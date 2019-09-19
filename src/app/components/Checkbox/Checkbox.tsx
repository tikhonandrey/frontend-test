import * as React from "react";

import { joinClassList } from "../../helpers";

export interface ChangeEventObject {
  name: string;
  value: boolean;
}
export interface CheckboxProps {
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
  label: React.ReactNode;
  children?: React.ReactNode;
  /** Required for inputs. */
  id: string;
  className?: string;
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  onChange,
  name,
  checked,
  disabled = false,
  label,
  children,
  id,
  className
}) => {
  const [isChecked, toggleChecked] = React.useState(checked);
  const classes = [
    `checkbox`,
    `${className || ""}`,
    `${checked ? "checkbox--checked" : ""}`
  ];

  React.useEffect(() => toggleChecked(checked), [checked]);

  return (
    <div className={joinClassList(classes)}>
      <input
        className="checkbox__input"
        type="checkbox"
        name={name}
        id={id}
        checked={isChecked}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          toggleChecked(!isChecked);
          onChange({ name, value: !isChecked });
        }}
      />
      <label className="checkbox__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
