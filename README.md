# Confidentally — Storybook

Storybook con todo lo relevado y documentado desde Figma (**Design system · 2.0** + **UX-UI · 2.0**), con la misma arquitectura de navegación que [JPL Explorer 1](https://nasa-jpl.github.io/explorer-1/?path=/docs/introduction--docs) (Introduction editorial + Foundations + Components + Screens):

```
Introduction        → src/Introduction.mdx (portada del sistema, calca la estructura de Explorer 1)
Foundations
  └ Design tokens    → src/foundations/Tokens.mdx (colores/radios/tipografía en vivo desde tokens.json)
Components
  ├ Overview          → src/components/_docs/Overview.mdx
  ├ Buttons/*          → ClinicalModeButton, EncounterButton, LocationSelector, ClinicalBadgeStartEncounter
  └ ...                → ClinicalBadge, Sidebar, Steps, CardReferral, Container, Referral, LeftColumnProfile, ButtonsContainer
Screens
  ├ Overview          → src/screens/00-Overview.mdx
  └ Referral, Lab Order, Prescription, Ros - Physical, Extra Oral - Intra Oral,
    Dental Assessment, Treatment Plan, Patients, Consent Template, Radiography, Vitals
    (una página por flujo, con las ~130 pantallas documentadas de UX-UI · 2.0)
```

El branding del sidebar (`.storybook/manager.ts`) está seteado como "Confidentally — Design System", igual que el logo propio que tiene Explorer 1 en la esquina superior izquierda.

## Componentes incluidos (Clinical Mode)

| Componente | Foco | Figma node |
|---|---|---|
| `ClinicalBadge` | badge de tipo/estado | 254:2930 |
| `ClinicalBadgeStartEncounter` | **botón** "Start Encounter" compacto | 617:1184 |
| `ClinicalModeButton` | **barra de tabs/botones** de navegación | 254:3215 |
| `EncounterButton` | **botón split** de control de encuentro (Start/Paused/End/...) | 600:3714 |
| `LocationSelector` | **botón** de ubicación | 265:1775 |
| `Sidebar` | barra de perfil + accesos rápidos | 254:3016 |
| `Steps` | stepper de 2 a 5 pasos | 388:1419 |
| `CardReferral` | card de diagnóstico/procedimiento | 535:2307 |
| `Container` | card de código de procedimiento + acciones | 535:2822 |
| `Referral` | card de derivación entre proveedores | 269:572 |
| `LeftColumnProfile` | panel lateral de perfil (compone `ClinicalBadgeStartEncounter`) | 610:1152 |
| `ButtonsContainer` | header de paciente (compone `ClinicalBadge` + `LocationSelector` + `ClinicalBadgeStartEncounter`) | 265:2071 |

Cada componente tiene, dentro de Storybook:
- Sus **variantes** controlables (Controls panel), basadas en las variant properties reales de Figma.
- Una story **"Inspector"** con tres paneles: **JSON** (props/tokens), **CSS** y **React (TSX)** — para que un dev vea de un vistazo cómo está armado.
- Los botones con acción (`onClick`, `onTabClick`, etc.) están conectados al panel **Actions** de Storybook, así se ve qué evento dispara cada botón.

## Instalación y uso

Este proyecto se armó en un entorno sin acceso a internet, así que **no se corrió `npm install` todavía**. Para levantarlo en tu máquina:

```bash
cd confidentally-storybook
npm install
npm run storybook       # abre Storybook en http://localhost:6006
```

Otros comandos:

```bash
npm run build-storybook # genera una versión estática (storybook-static/) para publicar
npm run build            # build de producción de la app (fuera de Storybook)
```

## Tokens de diseño (`src/tokens/`)

- `tokens.json` — tokens en formato JSON (colores, radios, tipografía), con el nombre original de la variable en Figma.
- `tokens.css` — los mismos tokens como CSS custom properties (`--color-confidentally`, `--radius-lg`, etc.), importados globalmente en `.storybook/preview.ts` y en `src/main.tsx`.

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

Esto sobreescribe `src/tokens/tokens.json` y `src/tokens/tokens.css` con los valores actuales de Figma. Como pediste que sea **manual (on-demand)** y no un push automático, hay que correrlo cada vez que alguien cambie un color/token en Figma y quieran verlo reflejado acá. Si más adelante prefieren automatizarlo, este mismo script se puede:

- Dejar como **tarea programada** (ej. corre cada mañana), o
- Enganchar a un webhook de Figma + CI (requiere infraestructura propia — avisame si querés que lo armemos).

### Nota importante sobre nombres de variables

El script mapea el nombre de la variable de Figma a una custom property CSS (ej. `color/success/default` → `--color-success-default`). Los componentes ya escritos referencian nombres fijos como `--color-confidentally` — si en Figma renombran o crean variables nuevas, hay que revisar que el mapeo siga coincidiendo (está documentado el paso a paso en el propio script).

## Sobre la sección "Screens"

Las páginas bajo **Screens/** son documentación (texto + tablas), no componentes React interactivos: las ~130 pantallas de UX-UI · 2.0 son flujos completos de producto (formularios, tablas, diálogos), no piezas reutilizables aisladas como sí lo son los 12 de Clinical Mode. Cada página de Screens lista qué instancias de componentes usa cada pantalla (Button, Input, Switch, Card Referral, etc.), sus campos/columnas, y las inconsistencias detectadas. Si en algún momento quieren que alguna pantalla puntual pase a tener su propio componente React interactivo (como los de Clinical Mode), avisen cuál y seguimos con esa.

## Diferencias con la referencia (Explorer 1)

No pude renderizar visualmente https://nasa-jpl.github.io/explorer-1 con exactitud pixel a pixel (se relevó vía accesibilidad/capturas, no CSS calcado), así que esto sigue el mismo **patrón de información** (Introduction → Foundations → Components → Screens, con una portada editorial con GOALS/benefits/how-to-use) pero no es una copia visual exacta de sus estilos.
