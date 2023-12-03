import { Meta, StoryObj } from "@storybook/react"
import { ReactTooltip } from "./ReactTooltip"

const meta = {
  component: ReactTooltip,
  tags: ["autodocs"],
  title: "Components/Tooltip/ReactTooltip",
} satisfies Meta<typeof ReactTooltip>

export default meta

type Story = StoryObj<typeof ReactTooltip>

export const Primary: Story = { args: {} }
