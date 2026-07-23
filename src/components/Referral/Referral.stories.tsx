import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Referral } from "./Referral";
import { TokenInspector } from "../_shared/TokenInspector";
// @ts-expect-error ?raw
import cssSource from "./Referral.css?raw";
// @ts-expect-error ?raw
import tsxSource from "./Referral.tsx?raw";

const meta: Meta<typeof Referral> = {
  title: "Components/Referral",
  component: Referral,
  tags: ["autodocs"],
  args: { onDelete: action("referral-delete"), onMoreActions: action("referral-more-actions") },
  argTypes: { type: { control: "select", options: ["Referral", "Variant3", "Prescription"] } },
  parameters: {
    docs: {
      description: {
        component:
          "Card de derivación entre proveedores. Figma node 269:572. Documenta 3 tipos (Referral/Variant3/Prescription) que comparten la misma composición de layout — ver clinical-mode-components/06-Referral.md.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Referral>;

export const Default: Story = { args: { type: "Referral" } };
export const Variant3: Story = { args: { type: "Variant3" } };
export const Prescription: Story = { args: { type: "Prescription" } };

export const Inspector: Story = {
  render: () => (
    <TokenInspector json={{ component: "Referral", figmaNodeId: "269:572" }} css={cssSource} tsx={tsxSource} />
  ),
};
