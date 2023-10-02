import ReactBaseSwitch, { ReactSwitchProps } from "react-switch";
import { useState } from "react";

export function ReactSwitch({ ...rest }: ReactSwitchProps) {
  const [checked, setChecked] = useState(true);
  return (
    <ReactBaseSwitch
      {...rest}
      checked={checked}
      onChange={() => setChecked((prev) => !prev)}
    />
  );
}
