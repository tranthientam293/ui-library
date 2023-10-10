import { Meta, StoryObj } from "@storybook/react";
import { RCDropdown } from "./RCDropdown";

const meta = {
  title: "components/Dropdown/RCDropdown",
  tags: ["autodocs"],
  component: RCDropdown,
} satisfies Meta<typeof RCDropdown>;

export default meta;

type Story = StoryObj<typeof RCDropdown>;

export const Primary: Story = {
  args: {
    menu: (
      <div
        style={{ padding: "8px 16px", width: 100, backgroundColor: "#fafafa" }}
      >
        <div>1</div>
        <div>2</div>
      </div>
    ),
  },
};
