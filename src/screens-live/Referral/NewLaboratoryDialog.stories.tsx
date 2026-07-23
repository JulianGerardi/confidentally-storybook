import type { Meta, StoryObj } from "@storybook/react";
import { NewLaboratoryDialog } from "./NewLaboratoryDialog";

const meta: Meta<typeof NewLaboratoryDialog> = {
  title: "Screens/Referral/New Laboratory Dialog",
  component: NewLaboratoryDialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Modal para dar de alta un laboratorio/proveedor nuevo, disparado desde el link '+ New Laboratory' en el formulario de Referral. Figma: UX-UI · 2.0 > New Laboratory (node 606:8331, estado de error node 850:1197). https://www.figma.com/design/aESBq2SDwG2b4fnTyfBUgn/UX-UI-·-2.0?node-id=606-8331",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewLaboratoryDialog>;

export const Default: Story = {
  args: {
    invalid: false,
    onCancel: () => {},
    onSave: () => {},
  },
  render: (args) => (
    <div
      style={{
        position: "relative",
        background: "#1a1a1a",
        padding: 40,
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
    invalid: true,
    onCancel: () => {},
    onSave: () => {},
  },
  render: (args) => (
    <div
      style={{
        position: "relative",
        background: "#1a1a1a",
        padding: 40,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NewLaboratoryDialog {...args} />
    </div>
  ),
};
