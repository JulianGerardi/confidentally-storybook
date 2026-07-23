import type { Meta, StoryObj } from "@storybook/react";
import { NewLaboratoryDialog } from "./NewLaboratoryDialog";

const meta: Meta<typeof NewLaboratoryDialog> = {
  title: "Screens/LabOrder/NewLaboratoryDialog",
  component: NewLaboratoryDialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Pantalla real de UX-UI · 2.0 (New Laboratory modal, node 606:8331) — diálogo para crear un nuevo laboratorio con información general, credenciales y dirección. Figma: https://www.figma.com/design/aESBq2SDwG2b4fnTyfBUgn/UX-UI-·-2.0?node-id=606-8331",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewLaboratoryDialog>;

export const Default: Story = {
  args: {
    onCancel: () => {},
    onSave: () => {},
    invalid: false,
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
      <NewLaboratoryDialog {...args} />
    </div>
  ),
};

export const ValidationError: Story = {
  args: {
    onCancel: () => {},
    onSave: () => {},
    invalid: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Estado de error (node 850:1197) — todos los campos se muestran con borde rojo simultáneamente, reproduciendo el frame de demo de Figma.",
      },
    },
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
      <NewLaboratoryDialog {...args} />
    </div>
  ),
};
