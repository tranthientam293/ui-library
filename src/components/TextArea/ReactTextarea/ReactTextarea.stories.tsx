import { Meta, StoryObj } from "@storybook/react";
import { ReactTextarea } from "./ReactTextarea";

const meta = {
  title: "Components/Textarea/ReactTextarea",
  component: ReactTextarea,
  tags: ["autodocs"],
  argTypes: {
    minRows: { control: { type: "number" } },
    maxRows: { control: { type: "number" } },
  },
} satisfies Meta<typeof ReactTextarea>;

export default meta;

type Story = StoryObj<typeof ReactTextarea>;

export const Primary: Story = {
  args: {
    minRows: 1,
    maxRows: 6,
    placeholder: "Enter text...",
  },
};
