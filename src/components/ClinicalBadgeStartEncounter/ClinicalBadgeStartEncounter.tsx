import React from "react";
import "./ClinicalBadgeStartEncounter.css";

export type StartEncounterState = "Default" | "Disable" | "inactive";

export interface ClinicalBadgeStartEncounterProps {
  state?: StartEncounterState;
  /** Acción ejecutada al hacer click (deshabilitada si state !== "Default") */
  onClick?: () => void;
  className?: string;
}

/**
 * ClinicalBadge (Start Encounter) — botón compacto para iniciar un encuentro clínico.
 * Figma: Design system · 2.0 > Clinical Mode > ClinicalBadge/Start Encounter (node 617:1184)
 */
export const ClinicalBadgeStartEncounter: React.FC<ClinicalBadgeStartEncounterProps> = ({
  state = "Default",
  onClick,
  className,
}) => {
  const disabled = state !== "Default";
  return (
    <button
      type="button"
      className={["cb-start-encounter", `cb-start-encounter--${state}`, className]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      onClick={onClick}
    >
      <svg viewBox="0 0 14 14" className="cb-start-encounter__icon" aria-hidden="true">
        <path d="M3 2.5 11 7 3 11.5Z" fill="currentColor" />
      </svg>
      <span>Start Encounter</span>
      <svg viewBox="0 0 16 16" className="cb-start-encounter__chevron" aria-hidden="true">
        <path
          d="M4 6l4 4 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ClinicalBadgeStartEncounter;
