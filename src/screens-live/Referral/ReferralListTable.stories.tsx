import type { Meta, StoryObj } from "@storybook/react";
import { ReferralListTable } from "./ReferralListTable";

const meta: Meta<typeof ReferralListTable> = {
  title: "Screens/Referral/List Table",
  component: ReferralListTable,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Pantalla real de UX-UI · 2.0 (Referral, node 455:2111) — listado de derivaciones del paciente. Compone ButtonsContainer + ClinicalModeButton + tabla de Referral. Figma: https://www.figma.com/design/aESBq2SDwG2b4fnTyfBUgn/UX-UI-·-2.0?node-id=455-2111",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReferralListTable>;

export const Default: Story = {};
