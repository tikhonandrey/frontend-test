import * as React from "react";

import { joinClassList } from "../../helpers";

export interface InputProps {
  onChange: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
  block?: boolean;
  className?: string;
  id?: string;
  name: string;
  placeholder?: string;
  type?: "text" | "number" | "password" | "email";
  size?: "small" | "normal" | "large";
  label?: string;
}

export const Input: React.FunctionComponent<InputProps> = ({
  onChange,
  disabled,
  block,
  className,
  type = "text",
  size = "normal",
  placeholder,
  label,
  name
}) => {
  const inputClasses = [
    `input__element`,
    `input__${type}`,
    `${block ? "block" : ""}`
  ];

  return (
    <div className={`input input--${size} ${className || ""}`}>
      {label ? (
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <input
        disabled={disabled}
        className={joinClassList(inputClasses)}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </div>
  );
};
