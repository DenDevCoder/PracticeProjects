import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import "../tailwind.css";

import WelcomeCard from "../components/WelcomeCard";

const meta = {
  title: "Components/WelcomeCard",
  component: WelcomeCard,
} satisfies Meta<typeof WelcomeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Card: Story = {};
