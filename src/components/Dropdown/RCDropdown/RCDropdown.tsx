import BaseDropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";

interface IRCDropdown {
  menu: JSX.Element;
}
export function RCDropdown({ menu }: IRCDropdown) {
  return (
    <BaseDropdown overlay={menu} trigger={["click"]} animation="slide-up">
      <button>Click</button>
    </BaseDropdown>
  );
}
