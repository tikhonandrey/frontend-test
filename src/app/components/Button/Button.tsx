import * as React from "react";

export interface ButtonProps {
  onClick: (e: React.SyntheticEvent) => void;
  secondary?: boolean;
  disabled?: boolean;
  block?: boolean;
  children: React.ReactNode;
  className?: string;
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
    <button disabled={disabled} className={classes.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};
