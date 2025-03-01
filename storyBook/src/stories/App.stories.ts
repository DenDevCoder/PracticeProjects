import type { Meta, StoryObj } from "@storybook/react";
import "../tailwind.css";

import App from "../App";

const meta = {
  title: "Components/App page",
  component: App,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Page: Story = {};
