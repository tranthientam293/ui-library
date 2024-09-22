import { Meta, StoryObj } from '@storybook/react'
import ReactSelect from '.'

const meta = {
  title: 'components/Select/ReactSelect',
  component: ReactSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
  },
}
