import { RCSwitch } from "./RCSwitch";
import { ReactSwitch } from "./ReactSwitch";
import "./Switch.scss";

interface ISwitch {
  library: "rc-switch" | "react-switch";
}
export function Switch({ library }: ISwitch) {
  return <>{library === "rc-switch" ? <RCSwitch /> : null}</>;
}
