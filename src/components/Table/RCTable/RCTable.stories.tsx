import { Meta, StoryObj } from "@storybook/react";
import { RCTable } from "./RCTable";

const meta = {
  title: "Components/Table/RCTable",
  tags: ["autodocs"],
  component: RCTable,
} satisfies Meta<typeof RCTable>;

export default meta;

type Story = StoryObj<typeof RCTable>;

export const Primary: Story = {
  args: {},
};
