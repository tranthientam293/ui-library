import { SwitchChangeEventHandler, SwitchClickEventHandler } from "rc-switch";
import BaseSwitch from "rc-switch";
import "rc-switch/assets/index.css";

export interface IRCSwitch
  extends Omit<
    React.HTMLAttributes<HTMLButtonElement>,
    "onChange" | "onClick"
  > {
  className?: string;
  prefixCls?: string;
  disabled?: boolean;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  onChange?: SwitchChangeEventHandler;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onClick?: SwitchClickEventHandler;
  tabIndex?: number;
  checked?: boolean;
  defaultChecked?: boolean;
  loadingIcon?: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
}

export function RCSwitch({ ...rest }: IRCSwitch) {
  return <BaseSwitch {...rest} />;
}
