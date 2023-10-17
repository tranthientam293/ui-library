import { Meta, StoryObj } from "@storybook/react"
import { ReactDropdown } from "./ReactDropdown"

const meta = {
  title: "components/Dropdown/react-dropdown",
  component: ReactDropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof ReactDropdown>

export default meta

type Story = StoryObj<typeof ReactDropdown>

export const Primary: Story = {
  args: {
    options: [
      { value: "1", label: "Menu Item 1" },
      { value: "2", label: "Menu Item 2" },
      { value: "3", label: "Menu Item 3" },
      { value: "4", label: "Menu Item 4" },
      { value: "5", label: "Menu Item 5" },
      { value: "6", label: "Menu Item 6" },
    ],
  },
}
