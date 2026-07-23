import type { Meta, StoryObj } from "@storybook/react";
import { Steps } from "./Steps";
import { TokenInspector } from "../_shared/TokenInspector";
// @ts-expect-error ?raw
import cssSource from "./Steps.css?raw";
// @ts-expect-error ?raw
import tsxSource from "./Steps.tsx?raw";

const meta: Meta<typeof Steps> = {
  title: "Components/Steps",
  component: Steps,
  tags: ["autodocs"],
  argTypes: {
    total: { control: "select", options: [2, 3, 4, 5] },
    currentStep: { control: { type: "number", min: 1, max: 5 } },
    complete: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Stepper de 2 a 5 pasos. Figma node 388:1419. Documenta 19 variantes (`Step N - M` por combinación de paso/total, más `Step complete - M`) — ver clinical-mode-components/07-Steps.md.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Steps>;

export const Pending: Story = { args: { total: 2, currentStep: 1 } };
export const ThreeStepsInProgress: Story = { args: { total: 3, currentStep: 2 } };
export const FiveStepsComplete: Story = { args: { total: 5, currentStep: 5, complete: true } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {[2, 3, 4, 5].map((total) => (
        <Steps key={total} total={total as 2 | 3 | 4 | 5} currentStep={Math.ceil(total / 2)} />
      ))}
      <Steps total={5} currentStep={5} complete />
    </div>
  ),
};

export const Inspector: Story = {
  render: () => (
    <TokenInspector json={{ component: "Steps", figmaNodeId: "388:1419", variantCount: 19 }} css={cssSource} tsx={tsxSource} />
  ),
};
