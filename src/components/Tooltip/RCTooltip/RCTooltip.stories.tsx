import { Meta, StoryObj } from "@storybook/react";
import { RCTooltip } from "./RCTooltip";
import "./RCTooltip.scss";

const meta = {
  component: RCTooltip,
  tags: ["autodocs"],
  title: "Components/Tooltip/RCTooltip",
  argTypes: {
    content: { control: { type: "text" } },
    mouseEnterDelay: { control: { type: "number" } },
    mouseLeaveDelay: { control: { type: "number" } },
    placement: {
      options: ["top", "left", "bottom", "right"],
      control: { type: "select" },
    },
    trigger: {
      options: ["hover", "click"],
      control: { type: "inline-radio" },
    },
  },
} satisfies Meta<typeof RCTooltip>;

export default meta;

type Story = StoryObj<typeof RCTooltip>;

const TOOLTIP_CONTENT =
  "Lorem ipsum dolor sit. Optio, voluptatibus quo! Lorem ipsum dolor sit. Optio, voluptatibus quo! Lorem ipsum dolor sit. Optio, voluptatibus quo! Lorem ipsum dolor sit. Optio, voluptatibus quo! ";

export const Primary: Story = {
  args: {
    children: <button className={"button"}>Click me!</button>,
    content: TOOLTIP_CONTENT,
    trigger: "click",
    placement: "right",
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0,
  },
};
