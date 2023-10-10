import type { Meta, StoryObj } from "@storybook/react";
import { RCSwitch } from "./RCSwitch";

const meta = {
  component: RCSwitch,
  title: "components/Switch/RCSwitch",
  tags: ["autodocs"],
} satisfies Meta<typeof RCSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    label: ["ON", "OFF"],
    checked: true,
    onChange: () => {},
    disabled: false,
  },
};

export const Unchecked: Story = {
  args: {
    label: ["ON", "OFF"],
    checked: false,
    onChange: () => {},
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: ["ON", "OFF"],
    onChange: () => {},
    disabled: true,
  },
};
