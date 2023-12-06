import { Meta, StoryObj } from "@storybook/react";
import { RCTextarea } from "./RCTextarea";

const meta = {
  component: RCTextarea,
  tags: ["autodocs"],
  title: "Components/Textarea/RCTextarea",
  argTypes: {},
} satisfies Meta<typeof RCTextarea>;

export default meta;

type Story = StoryObj<typeof RCTextarea>;

export const Primary: Story = {
  args: {
    placeholder: "Enter text...",
    minRows: 1,
    maxRows: 6,
    onBlur: (value) => console.log(value),
  },
};
