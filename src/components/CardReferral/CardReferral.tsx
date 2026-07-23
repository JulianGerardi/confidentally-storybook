import React from "react";
import "./CardReferral.css";

export type CardReferralState = "Default" | "Variant2" | "Inactive" | "Error" | "Disabled";

export interface CardReferralProps {
  /**
   * clinical-mode-components/08-CardReferral.md documenta 5 estados.
   * `Variant2` (node 535:2308) no se confirmó visualmente contra `Default`
   * durante el relevamiento (el propio .md lo marca como pendiente) — se
   * renderiza igual a `Default` hasta correr get_design_context sobre ese
   * node puntual.
   */
  state?: CardReferralState;
  label?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * CardReferral — card de diagnóstico/procedimiento. Figma node 535:2307.
 */
export const CardReferral: React.FC<CardReferralProps> = ({
  state = "Default",
  label = "Chronic enamel dental caries",
  onClick,
  className,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={["cb-card-referral", `cb-card-referral--${state}`, className].filter(Boolean).join(" ")}
    disabled={state === "Disabled"}
  >
    <span className="cb-card-referral__label">{label}</span>
    <span className="cb-card-referral__icon" aria-hidden="true">
      <svg viewBox="0 0 21 21"><circle cx="10.5" cy="10.5" r="8" fill="currentColor" /></svg>
    </span>
  </button>
);

export default CardReferral;
