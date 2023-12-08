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
    // view: { control: 'inline-radio' },
    showNavigation: { control: 'boolean' },
  },
} satisfies Meta<typeof ReactCalendar>

export default meta

type Story = StoryObj<typeof ReactCalendar>

export const Primary: Story = {
  args: {
    selectRange: false,
    locale: 'en-GB',
    calendarType: 'gregory',
    // view: 'month',
    onChange: (date) => console.log({ date }),
    showNavigation: true,
    showWeekNumbers: false,
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
