import type { Meta, StoryObj } from "@storybook/react";
import { ReactSwitch } from "./ReactSwitch";

const meta = {
  component: ReactSwitch,
  title: "components/ReactSwitch",
  tags: ["autodocs"],
} satisfies Meta<typeof ReactSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    label: ["on", "off"],
    onChange: () => {},
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    disabled: false,
    label: ["on", "off"],
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: ["on", "off"],
    onChange: () => {},
  },
};
