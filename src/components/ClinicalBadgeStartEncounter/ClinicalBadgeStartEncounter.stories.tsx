import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ClinicalBadgeStartEncounter } from "./ClinicalBadgeStartEncounter";
import { TokenInspector } from "../_shared/TokenInspector";
// @ts-expect-error ?raw
import cssSource from "./ClinicalBadgeStartEncounter.css?raw";
// @ts-expect-error ?raw
import tsxSource from "./ClinicalBadgeStartEncounter.tsx?raw";

const meta: Meta<typeof ClinicalBadgeStartEncounter> = {
  title: "Components/Buttons/ClinicalBadgeStartEncounter",
  component: ClinicalBadgeStartEncounter,
  tags: ["autodocs"],
  args: { onClick: action("start-encounter-click") },
  argTypes: {
    state: { control: "select", options: ["Default", "Disable", "inactive"] },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Botón/badge de acción 'Start Encounter'. Figma node 617:1184. La acción de click queda registrada en el panel Actions de Storybook.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof ClinicalBadgeStartEncounter>;

export const Default: Story = { args: { state: "Default" } };
export const Disabled: Story = { args: { state: "Disable" } };
export const Inactive: Story = { args: { state: "inactive" } };

export const AllStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12 }}>
      <ClinicalBadgeStartEncounter {...args} state="Default" />
      <ClinicalBadgeStartEncounter {...args} state="Disable" />
      <ClinicalBadgeStartEncounter {...args} state="inactive" />
    </div>
  ),
};

export const Inspector: Story = {
  render: () => (
    <TokenInspector
      json={{ component: "ClinicalBadgeStartEncounter", figmaNodeId: "617:1184", states: ["Default", "Disable", "inactive"] }}
      css={cssSource}
      tsx={tsxSource}
    />
  ),
};
