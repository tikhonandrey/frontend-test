import * as React from "react";

import { joinClassList } from "../../helpers";

export interface ButtonProps {
  onClick: (e: React.SyntheticEvent) => void;
  secondary?: boolean;
  disabled?: boolean;
  block?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  secondary,
  disabled,
  block,
  children,
  className
}) => {
  const classes = [
    `button`,
    `${secondary ? "button--secondary" : ""}`,
    `${className || ""}`
  ];
  return (
    <button
      disabled={disabled}
      className={joinClassList(classes)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
