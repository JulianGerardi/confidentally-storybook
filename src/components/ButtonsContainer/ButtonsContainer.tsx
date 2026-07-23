import React from "react";
import { ClinicalBadge } from "../ClinicalBadge/ClinicalBadge";
import { ClinicalBadgeStartEncounter } from "../ClinicalBadgeStartEncounter/ClinicalBadgeStartEncounter";
import { LocationSelector } from "../LocationSelector/LocationSelector";
import "./ButtonsContainer.css";

export interface ButtonsContainerProps {
  patientName?: string;
  age?: string;
  sex?: string;
  height?: string;
  weight?: string;
  onStartEncounter?: () => void;
  className?: string;
}

/**
 * ButtonsContainer — header completo del paciente en modo clínico
 * (perfil + datos vitales + badges + botón de inicio de encuentro).
 * Figma node 265:2071. Compone ClinicalBadge, LocationSelector y
 * ClinicalBadgeStartEncounter.
 */
export const ButtonsContainer: React.FC<ButtonsContainerProps> = ({
  patientName = "Julio Perez",
  age = "34 yrs",
  sex = "Male",
  height = "1.68 m",
  weight = "65 kg",
  onStartEncounter,
  className,
}) => (
  <div className={["cb-buttons-container", className].filter(Boolean).join(" ")}>
    <div className="cb-buttons-container__info">
      <span className="cb-buttons-container__avatar">{patientName.slice(0, 1)}</span>
      <span className="cb-buttons-container__name">{patientName}</span>
      <LocationSelector state="Botons clinical mode" />
      <span className="cb-buttons-container__stat">{age}</span>
      <span className="cb-buttons-container__stat">{sex}</span>
      <span className="cb-buttons-container__stat">{height}</span>
      <span className="cb-buttons-container__stat">{weight}</span>
    </div>
    <div className="cb-buttons-container__badges">
      <ClinicalBadge type="Chief Complaint" />
      <ClinicalBadge type="Triage" />
      <LocationSelector />
      <ClinicalBadgeStartEncounter onClick={onStartEncounter} />
    </div>
  </div>
);

export default ButtonsContainer;
