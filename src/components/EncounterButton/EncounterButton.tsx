import React from "react";
import "./EncounterButton.css";

export type EncounterButtonVariant =
  | "Default"
  | "Variant2"
  | "Variant3"
  | "Variant4"
  | "Variant5";

const LABELS: Record<EncounterButtonVariant, string> = {
  Default: "Start Encounter",
  Variant2: "Fullfield",
  Variant3: "End",
  Variant4: "Not Encounter",
  Variant5: "Paused",
};

export interface EncounterButtonProps {
  variant?: EncounterButtonVariant;
  /** Click en el cuerpo principal del botón */
  onClick?: () => void;
  /** Click en el segmento derecho (ícono) */
  onSegmentClick?: () => void;
  className?: string;
}

/**
 * EncounterButton (Frame 1000007215) — botón "split" de control del encuentro clínico.
 * Figma: Design system · 2.0 > Clinical Mode > Component — Encounter Buttons (node 600:3714)
 */
export const EncounterButton: React.FC<EncounterButtonProps> = ({
  variant = "Default",
  onClick,
  onSegmentClick,
  className,
}) => {
  return (
    <div
      className={["cb-encounter-btn", `cb-encounter-btn--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
    >
      <button type="button" className="cb-encounter-btn__main" onClick={onClick}>
        {variant === "Default" && (
          <svg viewBox="0 0 14 14" className="cb-encounter-btn__icon" aria-hidden="true">
            <path d="M3 2.5 11 7 3 11.5Z" fill="currentColor" />
          </svg>
        )}
        {variant === "Variant5" && (
          <svg viewBox="0 0 16 16" className="cb-encounter-btn__icon" aria-hidden="true">
            <rect x="4" y="3" width="3" height="10" fill="currentColor" />
            <rect x="9" y="3" width="3" height="10" fill="currentColor" />
          </svg>
        )}
        <span>{LABELS[variant]}</span>
      </button>
      <button
        type="button"
        className="cb-encounter-btn__segment"
        onClick={onSegmentClick}
        aria-label="Más acciones"
      >
        <svg viewBox="0 0 14 15" aria-hidden="true">
          <path d="M2 3l10 4.5L2 12z" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
};

export default EncounterButton;
