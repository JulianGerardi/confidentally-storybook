import type { Meta, StoryObj } from "@storybook/react";
import { LabOrderForm } from "./LabOrderForm";

const meta: Meta<typeof LabOrderForm> = {
  title: "Screens/LabOrder/LabOrderForm",
  component: LabOrderForm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Pantalla real de UX-UI · 2.0 (Lab Order - Detail, node 606:8185) — formulario de creación/edición de orden de laboratorio con información general, procedimientos, mapa dental y notas. Figma: https://www.figma.com/design/aESBq2SDwG2b4fnTyfBUgn/UX-UI-·-2.0?node-id=606-8185",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabOrderForm>;

export const Default: Story = {
  args: {
    notesDisabled: false,
  },
};

export const NotesDisabled: Story = {
  args: {
    notesDisabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Estado previo a seleccionar un Referral Provider (node 851:2467, 'Lab Order - Serch deshabilitado'): los campos de Notes se muestran deshabilitados hasta elegir un proveedor.",
      },
    },
  },
};
