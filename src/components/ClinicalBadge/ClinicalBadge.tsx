import React from "react";
import "./ClinicalBadge.css";

export type ClinicalBadgeType =
  | "Chief Complaint"
  | "Triage"
  | "Triage-Negative"
  | "Chief Complaint - Negative";

export type ClinicalBadgeState = "active" | "inactive" | "disabled";

export interface ClinicalBadgeProps {
  /** Tipo de badge — determina el ícono y la abreviatura mostrada */
  type?: ClinicalBadgeType;
  /** Estado visual del badge */
  state?: ClinicalBadgeState;
  className?: string;
}

const ABBREVIATIONS: Record<ClinicalBadgeType, string> = {
  "Chief Complaint": "CC",
  "Triage": "TR",
  "Triage-Negative": "TR",
  "Chief Complaint - Negative": "CC",
};

/**
 * ClinicalBadge — badge de tipo/estado de consulta.
 * Figma: Design system · 2.0 > Clinical Mode > ClinicalBadge (node 254:2930)
 */
export const ClinicalBadge: React.FC<ClinicalBadgeProps> = ({
  type = "Chief Complaint",
  state = "active",
  className,
}) => {
  return (
    <span
      className={["cb-clinical-badge", `cb-clinical-badge--${state}`, className]
        .filter(Boolean)
        .join(" ")}
      data-type={type}
      data-state={state}
    >
      <svg className="cb-clinical-badge__icon" viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M3 8.5 6.5 12 13 4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="cb-clinical-badge__label">{ABBREVIATIONS[type]}</span>
    </span>
  );
};

export default ClinicalBadge;
