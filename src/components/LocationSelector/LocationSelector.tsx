import React from "react";
import "./LocationSelector.css";

export type LocationSelectorState = "Default" | "Variant2" | "Botons clinical mode";

export interface LocationSelectorProps {
  /**
   * clinical-mode-components/04-LocationSelector.md documenta 3 estados.
   * `Variant2` (node 265:1776) no tiene diferencia visual confirmada contra
   * `Default` en la pasada de documentación — se renderiza igual hasta
   * confirmar el detalle con una captura de Figma.
   */
  state?: LocationSelectorState;
  onClick?: () => void;
  className?: string;
}

/**
 * LocationSelector — botón de ubicación. Figma node 265:1775.
 */
export const LocationSelector: React.FC<LocationSelectorProps> = ({
  state = "Default",
  onClick,
  className,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={["cb-location-selector", `cb-location-selector--${state.replace(/\s+/g, "-")}`, className]
      .filter(Boolean)
      .join(" ")}
    aria-label="Seleccionar ubicación"
  >
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8 1c-2.8 0-5 2.2-5 5 0 3.7 5 9 5 9s5-5.3 5-9c0-2.8-2.2-5-5-5Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
        fill="currentColor"
      />
    </svg>
  </button>
);

export default LocationSelector;
