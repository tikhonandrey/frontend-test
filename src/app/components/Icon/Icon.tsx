import * as React from "react";

export interface IconProps {
  children: string;
  className?: string;
}

export const Icon: React.FunctionComponent<IconProps> = ({
  children,
  className
}) => <i className={`icon material-icons ${className || ""}`}>{children}</i>;
