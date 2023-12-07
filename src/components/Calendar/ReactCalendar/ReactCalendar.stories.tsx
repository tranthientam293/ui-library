import { Meta, StoryObj } from '@storybook/react'
import { ReactCalendar } from './ReactCalendar'

const meta = {
  title: 'Components/Calendar/ReactCalendar',
  component: ReactCalendar,
  tags: ['autodocs'],
  argTypes: {
    selectRange: { control: { type: 'boolean' } },
    calendarType: {
      control: 'inline-radio',
    },
    defaultView: { control: 'inline-radio' },
  },
} satisfies Meta<typeof ReactCalendar>

export default meta

type Story = StoryObj<typeof ReactCalendar>

export const Primary: Story = {
  args: {
    selectRange: false,
    locale: 'en-GB',
    calendarType: 'gregory',
    defaultView: 'month',
    onChange: (date) => console.log({ date }),
  },

  render: (args) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ReactCalendar {...args} />
    </div>
  ),
}
