import * as React from "react";

import { joinClassList } from "../../helpers";

export interface ButtonProps {
  onClick?: (e: React.SyntheticEvent) => void;
  secondary?: boolean;
  disabled?: boolean;
  block?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  secondary,
  disabled,
  block,
  children,
  className,
  type = "button",
  href,
  target
}) => {
  const classes = [
    `button`,
    `${secondary ? "button--secondary" : ""}`,
    `${className || ""}`,
    `${block ? "block" : ""}`
  ];

  if (!onClick && href) {
    return (
      <a href={href} target={target} className={joinClassList(classes)}>
        {children}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      className={joinClassList(classes)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
