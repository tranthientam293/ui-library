import type { Meta, StoryObj } from "@storybook/react";
import { RCSwitch } from "./RCSwitch";

const meta = {
  component: RCSwitch,
  tags: ["autodocs"],
} satisfies Meta<typeof RCSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onChange: (checked) => {
      console.log({ checked });
    },
    onKeyDown: () => {},
    onClick: () => {},
  },
};
