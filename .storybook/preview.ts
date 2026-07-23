import type { Preview } from "@storybook/react";
import "../src/tokens/tokens.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      // Muestra automáticamente el código fuente de React de cada story
      source: { type: "dynamic" },
    },
  },
  tags: ["autodocs"],
};

export default preview;
