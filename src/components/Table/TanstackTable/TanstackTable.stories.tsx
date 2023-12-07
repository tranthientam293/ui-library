import { Meta, StoryObj } from "@storybook/react";
import { TanstackTable } from "./TanstackTable";

const meta = {
  component: TanstackTable,
  title: "Components/Table/TanstackTable",
  tags: ["autodocs"],
} satisfies Meta<typeof TanstackTable>;

export default meta;

type Story = StoryObj<typeof TanstackTable>;

export const Primary: Story = {
  args: {},
  render: () => (
    <div style={{ backgroundColor: "#171923" }}>
      <TanstackTable />
    </div>
  ),
};
