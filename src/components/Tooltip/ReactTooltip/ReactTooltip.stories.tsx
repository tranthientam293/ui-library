import { Meta, StoryObj } from "@storybook/react";
import { ReactTooltip } from "./ReactTooltip";

const meta = {
  component: ReactTooltip,
  tags: ["autodocs"],
  title: "Components/Tooltip/ReactTooltip",
  argTypes: {
    content: { control: { type: "text" } },
    id: { control: "text" },
    offset: { control: { type: "number" } },
    place: {
      control: { type: "inline-radio" },
      options: ["top", "right", "bottom", "left"],
    },

    variant: {
      control: { type: "select" },
      options: ["dark", "light", "success", "warning", "error", "info"],
    },

    opacity: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
  },
} satisfies Meta<typeof ReactTooltip>;

export default meta;

type Story = StoryObj<typeof ReactTooltip>;

export const Primary: Story = {
  args: {
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde officiis fugit quos exercitationem laudantium ex quaerat libero sapiente. Voluptatibus nam natus possimus expedita commodi? Non aspernatur a saepe consectetur libero?",
    place: "right",
    id: "react-tooltip-demo",
    offset: 10,
    variant: "dark",
    opacity: 1,
  },
  render: (args) => {
    return (
      <div className="container">
        <button className="button" data-tooltip-id={args.id}>
          Click me
        </button>
        <ReactTooltip {...args} />
      </div>
    );
  },
};
