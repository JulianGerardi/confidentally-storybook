#!/usr/bin/env node
/**
 * sync-figma-tokens.mjs
 * ----------------------
 * Lee las Variables (Design Tokens) del archivo "Design system · 2.0" en Figma
 * usando la REST API oficial de Figma, y regenera:
 *   - src/tokens/tokens.json
 *   - src/tokens/tokens.css
 *
 * Uso:
 *   FIGMA_TOKEN=tu_personal_access_token npm run sync-tokens
 *
 * Cómo generar el token:
 *   Figma → Ajustes de cuenta → Security → Personal access tokens → Generate new token
 *   (necesita permiso de lectura de "File content" / "Variables" sobre el archivo)
 *
 * Este script es "on-demand": no corre solo. Ejecutalo cada vez que alguien
 * cambie un color/token en Figma y quieran reflejarlo acá, o dejalo agendado
 * como tarea programada si prefieren automatizarlo.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY || "QZThiRTqdCgD1H6fv3k5zf"; // Design system · 2.0

if (!FIGMA_TOKEN) {
  console.error(
    "❌ Falta FIGMA_TOKEN. Corré: FIGMA_TOKEN=xxxx npm run sync-tokens"
  );
  process.exit(1);
}

async function fetchVariables() {
  const url = `https://api.figma.com/v1/files/${FILE_KEY}/variables/local`;
  const res = await fetch(url, {
    headers: { "X-Figma-Token": FIGMA_TOKEN },
  });
  if (!res.ok) {
    throw new Error(
      `Figma API respondió ${res.status} ${res.statusText}. ¿El token tiene acceso al archivo ${FILE_KEY}?`
    );
  }
  return res.json();
}

/** Convierte un valor de color de Figma (r,g,b,a en 0-1) a hex */
function rgbaToHex({ r, g, b, a = 1 }) {
  const toHex = (n) =>
    Math.round(n * 255)
      .toString(16)
      .padStart(2, "0");
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return a < 1 ? `${hex}${toHex(a)}` : hex;
}

function cssVarName(figmaName) {
  return (
    "--" +
    figmaName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );
}

async function main() {
  console.log(`→ Consultando Variables de Figma (file ${FILE_KEY})...`);
  const data = await fetchVariables();
  const variables = data.meta?.variables ?? {};
  const collections = data.meta?.variableCollections ?? {};

  const tokens = { source: { figmaFile: "Design system · 2.0", fileKey: FILE_KEY, lastSynced: new Date().toISOString() }, color: {}, other: {} };
  const cssLines = [
    "/* Generado automáticamente por scripts/sync-figma-tokens.mjs — no editar a mano */",
    ":root {",
  ];

  for (const [id, variable] of Object.entries(variables)) {
    const collection = collections[variable.variableCollectionId];
    const modeId = collection?.defaultModeId;
    const value = variable.valuesByMode?.[modeId];
    if (value === undefined) continue;

    const varName = cssVarName(variable.name);
    if (variable.resolvedType === "COLOR" && typeof value === "object") {
      const hex = rgbaToHex(value);
      tokens.color[variable.name] = hex;
      cssLines.push(`  ${varName}: ${hex};`);
    } else if (typeof value === "number") {
      tokens.other[variable.name] = value;
      cssLines.push(`  ${varName}: ${value}px;`);
    } else if (typeof value === "string") {
      tokens.other[variable.name] = value;
      cssLines.push(`  ${varName}: ${value};`);
    }
  }
  cssLines.push("}");

  await fs.writeFile(
    path.join(ROOT, "src/tokens/tokens.json"),
    JSON.stringify(tokens, null, 2)
  );
  await fs.writeFile(path.join(ROOT, "src/tokens/tokens.css"), cssLines.join("\n") + "\n");

  console.log(`✔ Sincronizados ${Object.keys(variables).length} tokens desde Figma.`);
  console.log("  → src/tokens/tokens.json");
  console.log("  → src/tokens/tokens.css");
  console.log(
    "\nNota: los componentes usan nombres de variable CSS fijos (ej. --color-confidentally)."
  );
  console.log(
    "Si en Figma renombran una variable, actualizá el mapeo en este script o en los .css de cada componente."
  );
}

main().catch((err) => {
  console.error("❌ Error sincronizando tokens:", err.message);
  process.exit(1);
});
