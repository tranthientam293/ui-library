import type { Meta, StoryObj } from "@storybook/react";
import "./Switch.scss";
import { RCSwitch } from "./RCSwitch";

const meta = {
  component: RCSwitch,
  tags: ["autodocs"],
} satisfies Meta<typeof RCSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    innerValues: ["ON", "OFF"],
  },
};
