import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ButtonsContainer } from "./ButtonsContainer";
import { TokenInspector } from "../_shared/TokenInspector";
// @ts-expect-error ?raw
import cssSource from "./ButtonsContainer.css?raw";
// @ts-expect-error ?raw
import tsxSource from "./ButtonsContainer.tsx?raw";

const meta: Meta<typeof ButtonsContainer> = {
  title: "Components/ButtonsContainer",
  component: ButtonsContainer,
  tags: ["autodocs"],
  args: { onStartEncounter: action("start-encounter-click") },
  parameters: {
    docs: {
      description: {
        component:
          "Header completo del paciente en modo clínico. Compone ClinicalBadge, LocationSelector y ClinicalBadgeStartEncounter. Figma node 265:2071.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof ButtonsContainer>;

export const Default: Story = {};

export const Inspector: Story = {
  render: () => (
    <TokenInspector
      json={{ component: "ButtonsContainer", figmaNodeId: "265:2071", composedOf: ["ClinicalBadge", "LocationSelector", "ClinicalBadgeStartEncounter"] }}
      css={cssSource}
      tsx={tsxSource}
    />
  ),
};
