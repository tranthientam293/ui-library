import { Meta, StoryObj } from "@storybook/react";
import { RCTable } from "./RCTable";
import {
  columns,
  data,
  mockExpandableConfig,
  mockPaginationData,
} from "./RCTable.mock";

const meta = {
  title: "Components/Table/RCTable",
  tags: ["autodocs"],
  component: RCTable,
} satisfies Meta<typeof RCTable>;

export default meta;

type Story = StoryObj<typeof RCTable>;

export const Primary: Story = {
  args: {
    columns: columns,
    data: data,
    expandable: undefined,
  },
};

export const Expandable: Story = {
  args: {
    columns: columns,
    data: data,
    expandable: mockExpandableConfig,
  },
};

export const NoData: Story = {
  args: {
    columns: columns,
    data: [],
  },
};

export const TableWidthPagination: Story = {
  args: {
    columns: columns,
    data: mockPaginationData,
    pagination: {
      pageSize: 2,
    },
  },
};
