import React from "react";
import "./ButtonsContainer.css";
import {
  IconPill,
  IconPersonSearch,
  IconBadgeInfo,
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

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * ButtonsContainer — barra superior con datos del paciente (patient header).
 * Figma: UX-UI · 2.0 > Header (node 851:2469).
 */
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
        <span className="cb-bc__avatar" aria-hidden="true">
          {initials(patientName)}
        </span>
        <span className="cb-bc__name">{patientName}</span>
        <IconChevronDown size={16} className="cb-bc__chevron" />
        <div className="cb-bc__badges">
          {/* CC = Chief Complaint, TR = Triage — must use distinct `type` values or both render the same default badge */}
          <ClinicalBadge type="Chief Complaint" />
          <ClinicalBadge type="Triage" />
        </div>
      </div>

      <div className="cb-bc__actions">
        <button type="button" className="cb-bc__action">
          <IconPill size={16} />
          <span className="cb-bc__dot" />
        </button>
        <span className="cb-bc__action-wrap">
          <LocationSelector state="Botons clinical mode" />
          <span className="cb-bc__dot" />
        </span>
        <button type="button" className="cb-bc__action">
          <IconPersonSearch size={16} />
          <span className="cb-bc__dot" />
        </button>
        <button type="button" className="cb-bc__action">
          <IconBadgeInfo size={16} />
          <span className="cb-bc__dot" />
        </button>
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
