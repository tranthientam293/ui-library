import { Meta, StoryObj } from '@storybook/react'
import { RCCalendar } from './RCCalendar'

const meta = {
  title: 'Components/Calendar/RCCalendar',
  component: RCCalendar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RCCalendar>

export default meta

type Story = StoryObj<typeof RCCalendar>

export const Primary: Story = {
  args: {},

  render: (args) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RCCalendar {...args} />
    </div>
  ),
}
