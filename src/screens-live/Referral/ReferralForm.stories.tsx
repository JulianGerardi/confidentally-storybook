import type { Meta, StoryObj } from "@storybook/react";
import { ReferralForm } from "./ReferralForm";

const meta: Meta<typeof ReferralForm> = {
  title: "Screens/Referral/Information Form",
  component: ReferralForm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Pantalla real de UX-UI · 2.0 (Referral form, node 409:9102) — formulario de creación/edición de derivación con información general, procedimientos y notas. Figma: https://www.figma.com/design/aESBq2SDwG2b4fnTyfBUgn/UX-UI-·-2.0?node-id=409-9102",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReferralForm>;

export const Default: Story = {};
