import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { action } from "@storybook/addon-actions";
import { ClinicalModeButton } from "./ClinicalModeButton";
import { TokenInspector } from "../_shared/TokenInspector";
// @ts-expect-error ?raw
import cssSource from "./ClinicalModeButton.css?raw";
// @ts-expect-error ?raw
import tsxSource from "./ClinicalModeButton.tsx?raw";

const meta: Meta<typeof ClinicalModeButton> = {
  title: "Components/Buttons/ClinicalModeButton",
  component: ClinicalModeButton,
  tags: ["autodocs"],
  args: { onTabClick: action("tab-click") },
  parameters: {
    docs: {
      description: {
        component:
          "Barra de tabs de navegación del modo clínico (Exams, Treatment Plan, Treatment, ...). Figma node 254:3215. Cada click dispara `onTabClick(index, label)`, visible en el panel Actions. Nota: clinical-mode-components/03-ClinicalModeButton.md marca que Figma nombra las variantes de forma inconsistente (mezcla `variant`/`state`, distinta capitalización); acá se normalizó a una sola lista de tabs + índice activo.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof ClinicalModeButton>;

export const Default: Story = { args: { activeIndex: 1 } };

export const Interactive: Story = {
  render: (args) => {
    const [active, setActive] = useState(1);
    return (
      <ClinicalModeButton
        {...args}
        activeIndex={active}
        onTabClick={(i, label) => {
          setActive(i);
          action("tab-click")(i, label);
        }}
      />
    );
  },
};

export const Inspector: Story = {
  render: () => (
    <TokenInspector
      json={{ component: "ClinicalModeButton", figmaNodeId: "254:3215", tabs: 8 }}
      css={cssSource}
      tsx={tsxSource}
    />
  ),
};
