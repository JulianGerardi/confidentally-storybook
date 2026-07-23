import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const CONFIDENTALLY_LOGO =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="28" viewBox="0 0 180 28">
  <rect x="0" y="2" width="24" height="24" rx="7" fill="#0056EF"/>
  <text x="12" y="19" text-anchor="middle" font-family="Manrope, sans-serif" font-weight="800" font-size="14" fill="#ffffff">C</text>
  <text x="32" y="19" font-family="Manrope, sans-serif" font-weight="700" font-size="15" fill="#18181B">Confidentally</text>
</svg>`);

const theme = create({
  base: "light",
  brandTitle: "Confidentally — Design System",
  brandUrl: "?path=/docs/introduction--docs",
  brandImage: CONFIDENTALLY_LOGO,
  brandTarget: "_self",

  colorPrimary: "#0056EF",
  colorSecondary: "#0056EF",

  appBg: "#F7F8FA",
  appContentBg: "#FFFFFF",
  appBorderColor: "#E4E4E7",
  appBorderRadius: 8,

  fontBase: '"Inter", -apple-system, sans-serif',
  fontCode: '"SFMono-Regular", Consolas, monospace',

  textColor: "#18181B",
  textInverseColor: "#FFFFFF",

  barTextColor: "#71717A",
  barSelectedColor: "#0056EF",
  barBg: "#FFFFFF",

  inputBg: "#FFFFFF",
  inputBorder: "#E4E4E7",
  inputTextColor: "#18181B",
  inputBorderRadius: 6,
});

addons.setConfig({
  theme,
  sidebar: { showRoots: true },
});
