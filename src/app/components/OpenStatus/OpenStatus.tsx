import * as React from "react";

export interface OpenStatusProps {
  className?: string;
  open: boolean;
  size?: "small" | "normal" | "compact";
}

export const OpenStatus: React.FunctionComponent<OpenStatusProps> = ({
  className,
  size = "normal",
  open
}) => {
  const label = open ? "Open Now" : "Closed";
  return (
    <div className={`open-status open-status--${size}`}>
      <span
        className={`open-status__indicator open-status__indicator--${
          open ? "open" : "closed"
        }`}
      >
        {size === "compact" ? (
          <span className="open-status__compact-label">
            {open ? "Open" : "Closed"}
          </span>
        ) : null}
      </span>
      <span className="open-status__label">{label}</span>
    </div>
  );
};
