import ReactBaseSwitch from "react-switch";
import React from "react";
import "./ReactSwitch.scss";

interface IReactSwitch {
  checked: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: [string, string];
  tabIndex?: number;
  onChange: (checked: boolean) => void;
}
export const ReactSwitch = React.forwardRef<ReactBaseSwitch, IReactSwitch>(
  ({ label, id = "react-switch", ...rest }, ref) => {
    return (
      <div
        className={[
          "custom-react-switch",
          rest.disabled ? "disabled" : "",
        ].join(" ")}
      >
        <ReactBaseSwitch
          {...rest}
          width={44} //set witdh
          height={20}
          checkedIcon={false} //turn off icon when state is checked
          uncheckedIcon={false} //turn off icon when state is unchecked
          id={id}
          onColor="#029cfd" //set background color of switch (checked)
          offColor="#ccc" //set background color of switch (unchecked)
          borderRadius={4} //set border radius of switch
          onHandleColor={rest.disabled ? "#3a3a3a" : "#fff"} //set background color of running circle (checked)
          offHandleColor={rest.disabled ? "#3a3a3a" : "#fff"} //set background color of running circle (unchecked)
          handleDiameter={16} //set diametter of running circle
          ref={ref}
        />
        {label && (
          <label
            htmlFor={id}
            className={["switch-label", rest.disabled ? "disabled" : ""].join(
              " "
            )}
          >
            {rest.checked ? label[0] : label[1]}
          </label>
        )}
      </div>
    );
  }
);

ReactSwitch.displayName = "ReactSwitch";
