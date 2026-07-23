import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Container } from "./Container";
import { TokenInspector } from "../_shared/TokenInspector";
// @ts-expect-error ?raw
import cssSource from "./Container.css?raw";
// @ts-expect-error ?raw
import tsxSource from "./Container.tsx?raw";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  args: { onActionClick: action("container-action-click") },
  argTypes: { state: { control: "select", options: ["Default", "Variant2", "Inactive", "Error", "Disabled"] } },
  parameters: {
    docs: {
      description: {
        component:
          "Card de código de procedimiento con 4 acciones. Figma node 535:2822, 5 estados (`Variant2` sin diferencia visual confirmada). Ver clinical-mode-components/09-Container.md.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = { args: { state: "Default" } };
export const ErrorState: Story = { args: { state: "Error" } };
export const Disabled: Story = { args: { state: "Disabled" } };

export const AllStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {(["Default", "Variant2", "Inactive", "Error", "Disabled"] as const).map((s) => (
        <Container key={s} {...args} state={s} />
      ))}
    </div>
  ),
};

export const Inspector: Story = {
  render: () => (
    <TokenInspector json={{ component: "Container", figmaNodeId: "535:2822" }} css={cssSource} tsx={tsxSource} />
  ),
};
