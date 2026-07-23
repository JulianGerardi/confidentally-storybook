import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { CardReferral } from "./CardReferral";
import { TokenInspector } from "../_shared/TokenInspector";
// @ts-expect-error ?raw
import cssSource from "./CardReferral.css?raw";
// @ts-expect-error ?raw
import tsxSource from "./CardReferral.tsx?raw";

const meta: Meta<typeof CardReferral> = {
  title: "Components/CardReferral",
  component: CardReferral,
  tags: ["autodocs"],
  args: { onClick: action("card-click") },
  argTypes: { state: { control: "select", options: ["Default", "Variant2", "Inactive", "Error", "Disabled"] } },
  parameters: { docs: { description: { component: "Card de diagnóstico/procedimiento. Figma node 535:2307." } } },
};
export default meta;
type Story = StoryObj<typeof CardReferral>;

export const Default: Story = { args: { state: "Default" } };
export const ErrorState: Story = { args: { state: "Error" } };
export const Disabled: Story = { args: { state: "Disabled" } };

export const AllStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {(["Default", "Variant2", "Inactive", "Error", "Disabled"] as const).map((s) => (
        <CardReferral key={s} {...args} state={s} />
      ))}
    </div>
  ),
};

export const Inspector: Story = {
  render: () => (
    <TokenInspector json={{ component: "CardReferral", figmaNodeId: "535:2307" }} css={cssSource} tsx={tsxSource} />
  ),
};
