# Confidentally — Design System

Componentes React con todo lo relevado y documentado desde Figma (**Design system · 2.0** + **UX-UI · 2.0**).

```
Components
  ├ Buttons/*  → ClinicalModeButton, LocationSelector
  └ ...        → ClinicalBadge, Referral, ButtonsContainer
Screens (live)
  └ Referral   → ReferralForm, ReferralListTable, DiscardProcedureDialog, NewLaboratoryDialog
```

## Componentes incluidos (Clinical Mode)

| Componente | Foco | Figma node |
|---|---|---|
| `ClinicalBadge` | badge de tipo/estado | 254:2930 |
| `ClinicalModeButton` | **barra de tabs/botones** de navegación | 254:3215 |
| `LocationSelector` | **botón** de ubicación | 265:1775 |
| `Referral` | card de derivación entre proveedores | 269:572 |
| `ButtonsContainer` | header de paciente (compone `ClinicalBadge` + `LocationSelector`) | 265:2071 |

## Instalación y uso

```bash
cd confidentally-storybook
npm install
npm run dev     # levanta la app en modo desarrollo
npm run build   # build de producción
```

## Tokens de diseño (`src/tokens/`)

- `tokens.json` — tokens en formato JSON (colores, radios, tipografía), con el nombre original de la variable en Figma.
- `tokens.css` — los mismos tokens como CSS custom properties (`--color-confidentally`, `--radius-lg`, etc.), importados globalmente en `src/main.tsx`.

Todos los componentes consumen estas variables CSS en vez de hardcodear colores, así que cambiar un valor en `tokens.css` actualiza todos los componentes a la vez.

## Sincronizar tokens desde Figma (manual, on-demand)

`scripts/sync-figma-tokens.mjs` lee las **Variables** del archivo de Figma vía su REST API oficial y regenera `tokens.json` + `tokens.css` automáticamente.

```bash
# 1. Generá un Personal Access Token en Figma:
#    Ajustes de cuenta → Security → Personal access tokens → Generate new token
#    (necesita permiso de lectura sobre el archivo "Design system · 2.0")

# 2. Corré el sync:
FIGMA_TOKEN=tu_token npm run sync-tokens
```

Esto sobreescribe `src/tokens/tokens.json` y `src/tokens/tokens.css` con los valores actuales de Figma. También existe un workflow (`github/workflows/sync-figma-tokens.yml`) para dispararlo manualmente desde GitHub Actions.

### Nota importante sobre nombres de variables

El script mapea el nombre de la variable de Figma a una custom property CSS (ej. `color/success/default` → `--color-success-default`). Los componentes ya escritos referencian nombres fijos como `--color-confidentally` — si en Figma renombran o crean variables nuevas, hay que revisar que el mapeo siga coincidiendo (está documentado el paso a paso en el propio script).
