import * as React from "react";

import Icon from "../Icon";
import { joinClassList } from "../../helpers";

export interface DropdownProps {
  /** The selection list. */
  children: React.ReactNode;
  /**
   * Whether to explicitly open or close the dropdown. Used for things like OnClickOutside.
   */
  open?: boolean;
  /**
   * Optionally provide a callback for open/closed trigger.
   */
  onUpdate?: (openStatus: boolean) => void;
  id?: string;
  className?: string;
}

export const Dropdown: React.FunctionComponent<DropdownProps> = ({
  open = false,
  onUpdate = () => {},
  className,
  id,
  children
}) => {
  const classes = [`dropdown`, `${className || ""}`];
  const elementRef = React.useRef(null);

  const [isOpen, toggleOpen] = React.useState(open);

  React.useEffect(() => toggleOpen(open), [open]);

  return (
    <div className={joinClassList(classes)} ref={elementRef}>
      <a
        className="dropdown__link"
        onClick={() => {
          toggleOpen(!isOpen);
          onUpdate(isOpen);
        }}
      >
        Click me
        <Icon className="dropdown__link-icon">
          {isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </Icon>
      </a>
      <ul
        className={`dropdown__menu ${isOpen ? "dropdown__menu--open" : ""}`}
        role="menu"
        data-open={isOpen}
        // style={{ display: isOpen ? "block" : "none" }}
      >
        {React.Children.map(children, (el: any, idx: number) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
