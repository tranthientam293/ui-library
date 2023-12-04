import React from "react";
import { Tooltip, ITooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./ReactTooltip.scss";

interface ReactTooltipProps
  extends Pick<ITooltip, "id" | "place" | "offset" | "variant" | "opacity"> {
  content?: React.ReactNode;
}
export function ReactTooltip({
  id,
  content,
  place,
  offset,
  variant,
  opacity,
}: ReactTooltipProps) {
  return (
    <Tooltip
      id={id} // id connecting to item that trigger tooltip
      clickable // interact with content of tooltip
      opacity={opacity} // opacity of wrapper
      place={place} // positon of tooltip
      // isOpen={true} // controlled display of tooltip, true -> always show, false -> always hide
      offset={offset} // distance between triggered item and tooltip
      variant={variant}
      afterShow={() => console.log("show")}
      afterHide={() => console.log("hide")}
    >
      {content}
    </Tooltip>
  );
}
