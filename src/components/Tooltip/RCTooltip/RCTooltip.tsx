import React from "react";
import BaseTooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import { TooltipProps } from "rc-tooltip/lib/Tooltip";
import "./RCTooltip.scss";

interface RCTooltipProps
  extends Pick<
    TooltipProps,
    "children" | "trigger" | "placement" | "mouseEnterDelay" | "mouseLeaveDelay"
  > {
  content?: (() => React.ReactNode) | React.ReactNode;
  overlay?: (() => React.ReactNode) | React.ReactNode;
}

const DEFAULT_TOOLTIP_CONTENT = "I am a tooltip";

export function RCTooltip({
  children,
  content,
  overlay,
  ...rest
}: RCTooltipProps) {
  const baseOverlay = overlay || content || DEFAULT_TOOLTIP_CONTENT;

  return (
    <BaseTooltip
      {...rest}
      overlay={baseOverlay}
      overlayClassName="custom-tooltip"
      //   onVisibleChange={(visible) => console.log({ visible })}
      //   afterVisibleChange={(visible) => console.log("after", { visible })}
      destroyTooltipOnHide={true}
      showArrow={true}
      zIndex={10000}
    >
      {children}
    </BaseTooltip>
  );
}
