import React from "react";
import { ClinicalBadgeStartEncounter } from "../ClinicalBadgeStartEncounter/ClinicalBadgeStartEncounter";
import "./LeftColumnProfile.css";

export type LeftColumnProfileSize = "Default" | "SM";

export interface LeftColumnProfileProps {
  size?: LeftColumnProfileSize;
  patientName?: string;
  patientAge?: string;
  activeSection?: string;
  onNavigate?: (section: string) => void;
  onStartEncounter?: () => void;
  className?: string;
}

const NAV_ITEMS = ["Overview", "Treatment", "Insurance", "Ledger", "Documents", "Relationships & Billing"];

/**
 * LeftColumnProfile — panel lateral de perfil de paciente. Figma node 610:1152.
 */
export const LeftColumnProfile: React.FC<LeftColumnProfileProps> = ({
  size = "Default",
  patientName = "John Smith",
  patientAge = "50 years",
  activeSection = "Relationships & Billing",
  onNavigate,
  onStartEncounter,
  className,
}) => (
  <div className={["cb-left-profile", `cb-left-profile--${size}`, className].filter(Boolean).join(" ")}>
    <div className="cb-left-profile__card">
      <p className="cb-left-profile__name">{patientName}</p>
      <p className="cb-left-profile__age">{patientAge}</p>
      <ClinicalBadgeStartEncounter onClick={onStartEncounter} />
    </div>
    <nav className="cb-left-profile__nav">
      {NAV_ITEMS.map((item) => (
        <button
          key={item}
          type="button"
          className={item === activeSection ? "cb-left-profile__nav-item cb-left-profile__nav-item--active" : "cb-left-profile__nav-item"}
          onClick={() => onNavigate?.(item)}
        >
          {item}
        </button>
      ))}
    </nav>
    <hr />
    <div className="cb-left-profile__section">
      <p className="cb-left-profile__section-title">General Information</p>
      <div><span>Gender</span><strong>Male</strong></div>
      <div><span>Language</span><strong>Spanish</strong></div>
      <div><span>DOB</span><strong>12/15/1973 (50 yrs)</strong></div>
    </div>
    <hr />
    <div className="cb-left-profile__section">
      <p className="cb-left-profile__section-title">Contact Details</p>
      <div><span>Phone Number</span><strong>(555) 234-5678</strong></div>
      <div><span>Email Address</span><strong>johnsmith@gmail.com</strong></div>
      <div><span>Address</span><strong>123 Biscayne Blvd</strong></div>
    </div>
  </div>
);

export default LeftColumnProfile;
