import React from "react";
import "./ButtonsContainer.css";
import {
  IconPill,
  IconPulse,
  IconPersonSearch,
  IconInfo,
  IconChevronDown,
  IconDocument,
} from "../_shared/Icons";
import { ClinicalBadge } from "../ClinicalBadge/ClinicalBadge";
import { LocationSelector } from "../LocationSelector/LocationSelector";

export interface ButtonsContainerProps {
  onStartEncounter: () => void;
  patientName: string;
  age: string;
  sex: string;
  height: string;
  weight: string;
}

const headerActions: { key: "pill" | "location" | "user" | "badge"; Icon: typeof IconPill }[] = [
  { key: "pill", Icon: IconPill },
  { key: "location", Icon: IconPulse },
  { key: "user", Icon: IconPersonSearch },
  { key: "badge", Icon: IconInfo },
];

export function ButtonsContainer({
  onStartEncounter,
  patientName,
  age,
  sex,
  height,
  weight,
}: ButtonsContainerProps) {
  return (
    <div className="cb-buttons-container">
      <div className="cb-bc__patient">
        <span className="cb-bc__name">{patientName}</span>
        <IconChevronDown size={16} className="cb-bc__chevron" />
        <div className="cb-bc__badges">
          {/* CC = Chief Complaint, TR = Triage — must use distinct `type` values or both render the same default badge */}
          <ClinicalBadge type="Chief Complaint" />
          <ClinicalBadge type="Triage" />
        </div>
      </div>

      <div className="cb-bc__actions">
        {headerActions.map(({ key, Icon }) => (
          <button key={key} type="button" className="cb-bc__action">
            <Icon size={16} />
            <span className="cb-bc__dot" />
          </button>
        ))}
      </div>

      <div className="cb-bc__meta">
        <span>{age}</span>
        <span className="cb-bc__meta-sep">•</span>
        <span>{sex}</span>
        <span className="cb-bc__meta-sep">•</span>
        <span>{height}</span>
        <span className="cb-bc__meta-sep">•</span>
        <span>{weight}</span>
      </div>

      <LocationSelector />

      <button type="button" className="cb-bc__doc-button">
        <IconDocument size={16} />
      </button>

      <button type="button" className="cb-bc__start-encounter" onClick={onStartEncounter}>
        <span className="cb-bc__start-encounter-main">
          <svg width="14" height="14" viewBox="0 0 24 24">
            <path d="M6 4l14 8-14 8z" fill="currentColor" />
          </svg>
          Start Encounter
        </span>
        <span className="cb-bc__start-encounter-segment">
          <IconChevronDown size={14} />
        </span>
      </button>
    </div>
  );
}
