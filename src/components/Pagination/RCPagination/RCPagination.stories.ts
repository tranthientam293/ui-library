import type { Meta, StoryObj } from '@storybook/react'
import { RCPagination } from './RCPagination'

const meta = {
  component: RCPagination,
  title: 'components/Pagination/Pagination',
  tags: ['autodocs'],
} satisfies Meta<typeof RCPagination>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    total: 100,
    pageSize: 10,
  },
}
