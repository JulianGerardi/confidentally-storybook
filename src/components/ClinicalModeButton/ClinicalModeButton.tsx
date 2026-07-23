import React from "react";
import "./ClinicalModeButton.css";

export interface ClinicalModeTab {
  label: string;
  active?: boolean;
}

export interface ClinicalModeButtonProps {
  /** Pestaña seleccionada (0-indexed) */
  activeIndex?: number;
  tabs?: string[];
  /** Se dispara con el índice de la pestaña clickeada */
  onTabClick?: (index: number, label: string) => void;
  className?: string;
}

const DEFAULT_TABS = [
  "Exams",
  "Treatment Plan",
  "Treatment",
  "Treatment History",
  "Lab Order",
  "Prescription",
  "Referral",
  "Clinical Note",
];

/**
 * ClinicalModeButton — barra de tabs de navegación del modo clínico.
 * Figma: Design system · 2.0 > Clinical Mode > ClinicalModeButton (node 254:3215)
 */
export const ClinicalModeButton: React.FC<ClinicalModeButtonProps> = ({
  activeIndex = 1,
  tabs = DEFAULT_TABS,
  onTabClick,
  className,
}) => {
  return (
    <div className={["cb-clinical-mode-button", className].filter(Boolean).join(" ")}>
      {tabs.map((label, i) => (
        <button
          key={label}
          type="button"
          className={
            i === activeIndex ? "cb-cmb__tab cb-cmb__tab--active" : "cb-cmb__tab"
          }
          onClick={() => onTabClick?.(i, label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ClinicalModeButton;
