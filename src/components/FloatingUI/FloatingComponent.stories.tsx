import { Meta, StoryObj } from '@storybook/react'
import { FloatingComponent } from './FloatingComponent'

const meta = {
  title: 'Components/FloatingUI/FloatingComponent',
  component: FloatingComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FloatingComponent>

export default meta

type Story = StoryObj<typeof FloatingComponent>

export const Primary: Story = {
  args: {},
  render: () => (
    <div
      style={{
        height: 300,

        overflow: 'auto',
      }}
    >
      <div
        style={{
          height: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FloatingComponent />
      </div>
    </div>
  ),
}
