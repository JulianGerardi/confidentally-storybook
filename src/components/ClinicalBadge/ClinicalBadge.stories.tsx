import type { Meta, StoryObj } from "@storybook/react";
import { ClinicalBadge } from "./ClinicalBadge";
import { TokenInspector } from "../_shared/TokenInspector";
import tokens from "../../tokens/tokens.json";
// @ts-expect-error -- ?raw import de Vite
import cssSource from "./ClinicalBadge.css?raw";
// @ts-expect-error -- ?raw import de Vite
import tsxSource from "./ClinicalBadge.tsx?raw";

const meta: Meta<typeof ClinicalBadge> = {
  title: "Components/ClinicalBadge",
  component: ClinicalBadge,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["Chief Complaint", "Triage", "Triage-Negative", "Chief Complaint - Negative"],
    },
    state: {
      control: "select",
      options: ["active", "inactive", "disabled"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Badge de tipo/estado de consulta clínica. Figma: Design system · 2.0 > Clinical Mode > ClinicalBadge (node 254:2930). Ver también la variante 'Start Encounter' en `ClinicalBadgeStartEncounter`.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ClinicalBadge>;

export const Default: Story = {
  args: { type: "Chief Complaint", state: "active" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {(["Chief Complaint", "Triage", "Triage-Negative", "Chief Complaint - Negative"] as const).map(
        (type) =>
          (["active", "inactive", "disabled"] as const).map((state) => (
            <ClinicalBadge key={`${type}-${state}`} type={type} state={state} />
          ))
      )}
    </div>
  ),
};

export const Inspector: Story = {
  render: () => (
    <TokenInspector
      json={{
        component: "ClinicalBadge",
        figmaNodeId: "254:2930",
        variantProperties: { type: meta.argTypes?.type, state: meta.argTypes?.state },
        colorTokens: tokens.color.success,
      }}
      css={cssSource}
      tsx={tsxSource}
    />
  ),
};
