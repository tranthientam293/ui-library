import React from "react";
import { SwitchChangeEventHandler } from "rc-switch";
import BaseSwitch from "rc-switch";
import "rc-switch/assets/index.css";
import "./Switch.scss";

export interface IRCSwitch {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: [React.ReactNode, React.ReactNode];
  style?: React.CSSProperties;
  tabIndex?: number;
  onChange?: SwitchChangeEventHandler;
}

export const RCSwitch = React.forwardRef<HTMLButtonElement, IRCSwitch>(
  ({ label, id = "base-rc-switch", ...rest }, ref) => {
    return (
      <div className={["base-rc", rest.disabled ? "disabled" : ""].join(" ")}>
        <BaseSwitch
          {...rest}
          className={"base-rc-switch"} //className to overwrite css
          checkedChildren={null} //turn off inner icon (checked)
          unCheckedChildren={null} //turn off inner icon (unchecked)
          ref={ref}
          id={id}
        />
        {label && (
          <label htmlFor={id}>{rest.checked ? label[0] : label[1]}</label>
        )}
      </div>
    );
  }
);

RCSwitch.displayName = "RCSwitch";
