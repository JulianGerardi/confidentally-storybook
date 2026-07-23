import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Sidebar } from "./Sidebar";
import { TokenInspector } from "../_shared/TokenInspector";
// @ts-expect-error ?raw
import cssSource from "./Sidebar.css?raw";
// @ts-expect-error ?raw
import tsxSource from "./Sidebar.tsx?raw";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  args: { onProfileClick: action("profile-click"), onActionClick: action("action-click") },
  argTypes: { state: { control: "select", options: ["Default", "Inactive", "Frame"] } },
  parameters: {
    docs: {
      description: {
        component:
          "Barra de perfil + accesos rápidos. Figma node 254:3016, 3 estados: Default (331px), Inactive (acciones deshabilitadas), Frame (631px, ancho). Ver clinical-mode-components/02-Sidebar.md.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = { args: { state: "Default" } };
export const Inactive: Story = { args: { state: "Inactive" } };
export const Frame: Story = { args: { state: "Frame" } };

export const Inspector: Story = {
  render: () => (
    <TokenInspector
      json={{ component: "Sidebar", figmaNodeId: "254:3016", states: ["Default", "Inactive", "Frame"] }}
      css={cssSource}
      tsx={tsxSource}
    />
  ),
};
