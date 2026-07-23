import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { LocationSelector } from "./LocationSelector";
import { TokenInspector } from "../_shared/TokenInspector";
// @ts-expect-error ?raw
import cssSource from "./LocationSelector.css?raw";
// @ts-expect-error ?raw
import tsxSource from "./LocationSelector.tsx?raw";

const meta: Meta<typeof LocationSelector> = {
  title: "Components/Buttons/LocationSelector",
  component: LocationSelector,
  tags: ["autodocs"],
  args: { onClick: action("location-click") },
  argTypes: { state: { control: "select", options: ["Default", "Variant2", "Botons clinical mode"] } },
  parameters: {
    docs: {
      description: {
        component:
          "Botón selector de ubicación. Figma node 265:1775. `Variant2` está documentada en Figma pero sin diferencia visual confirmada — ver clinical-mode-components/04-LocationSelector.md.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof LocationSelector>;

export const Default: Story = { args: { state: "Default" } };
export const Variant2: Story = { args: { state: "Variant2" } };
export const ClinicalModeVariant: Story = { args: { state: "Botons clinical mode" } };

export const Inspector: Story = {
  render: () => (
    <TokenInspector json={{ component: "LocationSelector", figmaNodeId: "265:1775" }} css={cssSource} tsx={tsxSource} />
  ),
};
