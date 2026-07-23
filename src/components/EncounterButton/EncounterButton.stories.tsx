import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { EncounterButton } from "./EncounterButton";
import { TokenInspector } from "../_shared/TokenInspector";
// @ts-expect-error ?raw
import cssSource from "./EncounterButton.css?raw";
// @ts-expect-error ?raw
import tsxSource from "./EncounterButton.tsx?raw";

const meta: Meta<typeof EncounterButton> = {
  title: "Components/Buttons/EncounterButton",
  component: EncounterButton,
  tags: ["autodocs"],
  args: { onClick: action("main-click"), onSegmentClick: action("segment-click") },
  argTypes: {
    variant: {
      control: "select",
      options: ["Default", "Variant2", "Variant3", "Variant4", "Variant5"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Botón split de control del encuentro clínico (Start Encounter / Fullfield / End / Not Encounter / Paused). Figma node 600:3714. Tiene dos zonas clickeables: el cuerpo principal (`onClick`) y el segmento de ícono derecho (`onSegmentClick`, típicamente abre un menú Cancel/Discharge).",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof EncounterButton>;

export const StartEncounter: Story = { args: { variant: "Default" } };
export const Fullfield: Story = { args: { variant: "Variant2" } };
export const End: Story = { args: { variant: "Variant3" } };
export const NotEncounter: Story = { args: { variant: "Variant4" } };
export const Paused: Story = { args: { variant: "Variant5" } };

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {(["Default", "Variant2", "Variant3", "Variant4", "Variant5"] as const).map((v) => (
        <EncounterButton key={v} {...args} variant={v} />
      ))}
    </div>
  ),
};

export const Inspector: Story = {
  render: () => (
    <TokenInspector
      json={{ component: "EncounterButton", figmaNodeId: "600:3714", variants: ["Default", "Variant2", "Variant3", "Variant4", "Variant5"] }}
      css={cssSource}
      tsx={tsxSource}
    />
  ),
};
