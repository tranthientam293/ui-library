import { Meta, StoryObj } from '@storybook/react'
import { ReactPaginate } from './ReactPaginate'

const meta = {
  title: 'Components/Pagination/ReactPaginate',
  component: ReactPaginate,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ReactPaginate>

export default meta

type Story = StoryObj<typeof ReactPaginate>

export const Primary: Story = { args: {} }
