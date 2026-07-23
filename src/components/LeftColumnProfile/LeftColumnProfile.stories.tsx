import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { LeftColumnProfile } from "./LeftColumnProfile";
import { TokenInspector } from "../_shared/TokenInspector";
// @ts-expect-error ?raw
import cssSource from "./LeftColumnProfile.css?raw";
// @ts-expect-error ?raw
import tsxSource from "./LeftColumnProfile.tsx?raw";

const meta: Meta<typeof LeftColumnProfile> = {
  title: "Components/LeftColumnProfile",
  component: LeftColumnProfile,
  tags: ["autodocs"],
  args: { onNavigate: action("nav-click"), onStartEncounter: action("start-encounter-click") },
  argTypes: { size: { control: "select", options: ["Default", "SM"] } },
  parameters: { docs: { description: { component: "Panel lateral de perfil del paciente (reutiliza ClinicalBadgeStartEncounter). Figma node 610:1152." } } },
};
export default meta;
type Story = StoryObj<typeof LeftColumnProfile>;

export const Default: Story = {};
export const Small: Story = { args: { size: "SM" } };

export const Inspector: Story = {
  render: () => (
    <TokenInspector json={{ component: "LeftColumnProfile", figmaNodeId: "610:1152" }} css={cssSource} tsx={tsxSource} />
  ),
};
