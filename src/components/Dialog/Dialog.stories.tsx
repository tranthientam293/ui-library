import { Meta, StoryObj } from '@storybook/react'
import { Dialog } from './Dialog'

const meta = {
  title: 'components/Dialog/Dialog',
  tags: ['autodocs'],
  component: Dialog,
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof Dialog>

export const Primary: Story = {
  args: {},
}
