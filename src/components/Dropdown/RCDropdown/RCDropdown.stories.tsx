import { Meta, StoryObj } from "@storybook/react"
import { RCDropdown } from "./RCDropdown"

const meta = {
  title: "components/Dropdown/RCDropdown",
  tags: ["autodocs"],
  component: RCDropdown,
} satisfies Meta<typeof RCDropdown>

export default meta

type Story = StoryObj<typeof RCDropdown>

export const Primary: Story = {
  args: {
    menu: [
      { key: 1, title: "Menu 1", value: 1 },
      { key: 2, title: "Menu 2", value: 2 },
      { key: 3, title: "Menu 3", value: 3 },
    ],
  },
}
