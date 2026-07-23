import React from "react";
import "./Referral.css";
import { IconDocument, IconTrash, IconKebab } from "../_shared/Icons";

export interface ReferralProps {
  onDelete: () => void;
  onMoreActions: () => void;
  onViewDocument?: () => void;
  type: "Referral" | "Variant 3" | "Prescription";
  referringProvider: string;
  orderingProvider: string;
  specialty: string;
  status: string;
  lastUpdated: string;
  created: string;
  expirationDate: string;
  medications?: string[];
}

function initialsAvatar(name: string, className: string) {
  const initials = name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return <span className={className}>{initials}</span>;
}

export function Referral({
  onDelete,
  onMoreActions,
  onViewDocument,
  type,
  referringProvider,
  orderingProvider,
  specialty,
  status,
  lastUpdated,
  created,
  expirationDate,
  medications,
}: ReferralProps) {
  return (
    <div className="cb-referral">
      <div className="cb-referral__providers">
        <div className="cb-referral__provider">
          {initialsAvatar(referringProvider, "cb-referral__avatar cb-referral__avatar--jc")}
          <div className="cb-referral__provider-info">
            <span className="cb-referral__provider-name">{referringProvider}</span>
            <span className="cb-referral__provider-role">Referring Provider</span>
          </div>
        </div>
        <div className="cb-referral__provider">
          {initialsAvatar(orderingProvider, "cb-referral__avatar cb-referral__avatar--av")}
          <div className="cb-referral__provider-info">
            <span className="cb-referral__provider-name">{orderingProvider}</span>
            <span className="cb-referral__provider-role">Ordering Provider</span>
          </div>
        </div>
      </div>

      <div className="cb-referral__specialty">
        <span className="cb-referral__specialty-dot" />
        <span className="cb-referral__specialty-text">{specialty}</span>
      </div>

      <span className="cb-referral__type">{type}</span>
      <span className="cb-referral__status">{status}</span>

      <div className="cb-referral__dates">
        <div className="cb-referral__date">
          <span className="cb-referral__date-label">Created</span>
          <span className="cb-referral__date-value">{created}</span>
        </div>
        <div className="cb-referral__date">
          <span className="cb-referral__date-label">Last Updated</span>
          <span className="cb-referral__date-value">{lastUpdated}</span>
        </div>
        <div className="cb-referral__date">
          <span className="cb-referral__date-label">Expiration</span>
          <span className="cb-referral__date-value">{expirationDate}</span>
        </div>
      </div>

      {type === "Prescription" && medications && medications.length > 0 && (
        <div className="cb-referral__medications">
          {medications.map((med) => (
            <span key={med} className="cb-referral__medication-pill">
              {med}
            </span>
          ))}
        </div>
      )}

      <div className="cb-referral__actions">
        <button type="button" className="cb-referral__action" onClick={onViewDocument}>
          <IconDocument size={16} />
        </button>
        <button type="button" className="cb-referral__action" onClick={onDelete}>
          <IconTrash size={16} />
        </button>
        <button type="button" className="cb-referral__action" onClick={onMoreActions}>
          <IconKebab size={16} />
        </button>
      </div>
    </div>
  );
}
