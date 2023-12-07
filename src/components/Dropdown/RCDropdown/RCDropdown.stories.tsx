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
    menu: [
      { key: 1, title: "Menu Item Menu Item Menu Item Menu Item 1", value: 1 },
      { key: 2, title: "Menu Item 2", value: 2 },
      { key: 3, title: "Menu Item 3", value: 3 },
      { key: 4, title: "Menu Item 4", value: 4 },
      { key: 5, title: "Menu Item 5", value: 5 },
      { key: 6, title: "Menu Item 6", value: 6 },
    ],
    onChange: (data) => console.log(`You clicked on "${data.title}"`),
  },
};
