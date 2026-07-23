import type { Meta, StoryObj } from "@storybook/react";
import { DiscardProcedureDialog } from "./DiscardProcedureDialog";

const meta: Meta<typeof DiscardProcedureDialog> = {
  title: "Screens/Referral/Discard Procedure Dialog",
  component: DiscardProcedureDialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Pantalla real de UX-UI · 2.0 (Discard Procedure dialog, node 802:12548) — diálogo de confirmación al completar/descartar un procedimiento con condiciones vinculadas. Este mismo diálogo se reutiliza también en Lab Order y Dental Assessment. Figma: https://www.figma.com/design/aESBq2SDwG2b4fnTyfBUgn/UX-UI-·-2.0?node-id=802-12548",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DiscardProcedureDialog>;

export const Default: Story = {
  args: {
    onCancel: () => {},
    onConfirm: () => {},
    conditions: [
      {
        status: "Active",
        date: "May 18, 2026",
        title: "SOFT PALATE",
        condition: "Oral Candidiasis",
        descriptors: "Red",
      },
      {
        status: "Active",
        date: "May 18, 2026",
        title: "SOFT PALATE",
        condition: "Oral Candidiasis",
        descriptors: "Red",
      },
    ],
  },
  render: (args) => (
    <div
      style={{
        position: "relative",
        background: "#1a1a1a",
        padding: 60,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DiscardProcedureDialog {...args} />
    </div>
  ),
};
