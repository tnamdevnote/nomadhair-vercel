import { Meta, StoryObj } from "@storybook/react";
import PageTemplate from ".";
import * as React from "react";

const meta: Meta<typeof PageTemplate> = {
  title: "Templates/PageTemplate",
  component: PageTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=14-3607&mode=design&t=HCQxtNJl3gSDcBsd-4",
    },
    layout: "fullscreen",
  },
  /** Disabling test due to error related to importing firebase app */
  tags: ["no-tests"],
};

export default meta;
type Story = StoryObj<typeof PageTemplate>;

export const Default: Story = {
  args: {
    children: <div className="min-h-dvh"></div>,
  },
};
