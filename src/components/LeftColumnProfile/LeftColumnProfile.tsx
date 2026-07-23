import React from "react";
import "./LeftColumnProfile.css";
import {
  IconEye,
  IconGrid,
  IconShield,
  IconScale,
  IconDocument,
  IconCheckCircle,
  IconUserCircle,
} from "../_shared/Icons";

export interface LeftColumnProfileProps {
  onNavigate: (section: string) => void;
  onStartEncounter: () => void;
  size: "Default" | "Small";
  patientName: string;
  patientAge: string;
  gender: string;
  language: string;
  dob: string;
  phone: string;
  email: string;
  address: string;
}

const navItems: { key: string; label: string; Icon: typeof IconEye }[] = [
  { key: "overview", label: "Overview", Icon: IconEye },
  { key: "treatment", label: "Treatment", Icon: IconGrid },
  { key: "insurance", label: "Insurance", Icon: IconShield },
  { key: "ledger", label: "Ledger", Icon: IconScale },
  { key: "documents", label: "Documents", Icon: IconDocument },
];

export function LeftColumnProfile({
  onNavigate,
  onStartEncounter,
  size,
  patientName,
  patientAge,
  gender,
  language,
  dob,
  phone,
  email,
  address,
}: LeftColumnProfileProps) {
  const rootClassName = [
    "cb-left-column-profile",
    size === "Small" ? "cb-lcp--small" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <div className="cb-lcp__header">
        <div className="cb-lcp__name-row">
          <span className="cb-lcp__name">{patientName}</span>
          <IconCheckCircle size={14} className="cb-lcp__verified" />
        </div>
        <span className="cb-lcp__age">{patientAge}</span>
        <button type="button" className="cb-lcp__start-encounter" onClick={onStartEncounter}>
          <IconUserCircle size={16} className="cb-lcp__start-encounter-icon" />
          Relationships & Billing
        </button>
      </div>

      <nav className="cb-lcp__nav">
        {navItems.map(({ key, label, Icon }) => (
          <button
            key={key}
            type="button"
            className="cb-lcp__nav-item"
            onClick={() => onNavigate(key)}
          >
            <Icon size={16} className="cb-lcp__nav-icon" />
            {label}
          </button>
        ))}
      </nav>

      <div className="cb-lcp__section">
        <h4 className="cb-lcp__section-title">General Information</h4>
        <div className="cb-lcp__field">
          <span className="cb-lcp__field-label">Gender</span>
          <span className="cb-lcp__field-value">{gender}</span>
        </div>
        <div className="cb-lcp__field">
          <span className="cb-lcp__field-label">Language</span>
          <span className="cb-lcp__field-value">{language}</span>
        </div>
        <div className="cb-lcp__field">
          <span className="cb-lcp__field-label">Date of Birth</span>
          <span className="cb-lcp__field-value">{dob}</span>
        </div>
      </div>

      <div className="cb-lcp__section">
        <h4 className="cb-lcp__section-title">Contact Details</h4>
        <div className="cb-lcp__field">
          <span className="cb-lcp__field-label">Phone</span>
          <span className="cb-lcp__field-value">{phone}</span>
        </div>
        <div className="cb-lcp__field">
          <span className="cb-lcp__field-label">Email</span>
          <span className="cb-lcp__field-value">{email}</span>
        </div>
        <div className="cb-lcp__field">
          <span className="cb-lcp__field-label">Address</span>
          <span className="cb-lcp__field-value">{address}</span>
        </div>
      </div>
    </div>
  );
}
