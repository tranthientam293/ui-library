import { SwitchChangeEventHandler, SwitchClickEventHandler } from "rc-switch";
import BaseSwitch from "rc-switch";
import "rc-switch/assets/index.css";
import "./Switch.scss";

export interface IRCSwitch {
  disabled?: boolean;
  onChange?: SwitchChangeEventHandler;
  tabIndex?: number;
  checked?: boolean;
  defaultChecked?: boolean;
  style?: React.CSSProperties;
  variant?: "small" | "medium" | "large";
  innerValues?: [React.ReactNode, React.ReactNode];
}

export function RCSwitch({
  variant = "small",
  innerValues,
  ...rest
}: IRCSwitch) {
  return (
    <BaseSwitch
      {...rest}
      className={["base-rc-switch", variant].join(" ")}
      checkedChildren={variant !== "small" && innerValues?.[0]}
      unCheckedChildren={variant !== "small" && innerValues?.[1]}
    />
  );
}
