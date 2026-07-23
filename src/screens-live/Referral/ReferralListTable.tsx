import React from "react";
import { ButtonsContainer } from "../../components/ButtonsContainer/ButtonsContainer";
import { ClinicalModeButton } from "../../components/ClinicalModeButton/ClinicalModeButton";
import { IconArrowLeft, IconLayoutGrid, IconDocument, IconKebab } from "../../components/_shared/Icons";
import { StatusPill } from "../../components/_shared/FormControls";
import "./ReferralListTable.css";

const TABS = [
  "Exams",
  "Treatment Plan",
  "Treatment",
  "Treatment History",
  "Lab Order",
  "Prescription",
  "Referral",
  "Clinical Note",
];

type StatusType = "Requested" | "Canceled" | "Completed" | "Rejected" | "Pending";

interface ReferralRow {
  referringInitials: string;
  referringName: string;
  orderingInitials: string;
  orderingName: string;
  orderingSpecialty: string;
  status: StatusType;
  lastUpdated: string;
  created: string;
  expirationDate: string;
  expirationUrgent: boolean;
}

const ROWS: ReferralRow[] = [
  {
    referringInitials: "JC",
    referringName: "James Cartes",
    orderingInitials: "AV",
    orderingName: "Abril Viola",
    orderingSpecialty: "Orthodontics",
    status: "Requested",
    lastUpdated: "April 2, 2025",
    created: "April 2, 2025",
    expirationDate: "April 2, 2026",
    expirationUrgent: false,
  },
  {
    referringInitials: "JC",
    referringName: "James Cartes",
    orderingInitials: "AV",
    orderingName: "Abril Viola",
    orderingSpecialty: "Periodontics",
    status: "Pending",
    lastUpdated: "April 2, 2025",
    created: "March 20, 2025",
    expirationDate: "May 1, 2025",
    expirationUrgent: true,
  },
  {
    referringInitials: "JC",
    referringName: "James Cartes",
    orderingInitials: "AV",
    orderingName: "Abril Viola",
    orderingSpecialty: "Orthodontics",
    status: "Completed",
    lastUpdated: "March 18, 2025",
    created: "March 1, 2025",
    expirationDate: "September 1, 2025",
    expirationUrgent: false,
  },
  {
    referringInitials: "JC",
    referringName: "James Cartes",
    orderingInitials: "AV",
    orderingName: "Abril Viola",
    orderingSpecialty: "Endodontics",
    status: "Canceled",
    lastUpdated: "March 10, 2025",
    created: "February 22, 2025",
    expirationDate: "March 22, 2025",
    expirationUrgent: true,
  },
  {
    referringInitials: "JC",
    referringName: "James Cartes",
    orderingInitials: "AV",
    orderingName: "Abril Viola",
    orderingSpecialty: "Orthodontics",
    status: "Rejected",
    lastUpdated: "February 28, 2025",
    created: "February 15, 2025",
    expirationDate: "March 15, 2025",
    expirationUrgent: true,
  },
  {
    referringInitials: "JC",
    referringName: "James Cartes",
    orderingInitials: "AV",
    orderingName: "Abril Viola",
    orderingSpecialty: "Oral Surgery",
    status: "Requested",
    lastUpdated: "February 12, 2025",
    created: "February 1, 2025",
    expirationDate: "August 1, 2025",
    expirationUrgent: false,
  },
  {
    referringInitials: "JC",
    referringName: "James Cartes",
    orderingInitials: "AV",
    orderingName: "Abril Viola",
    orderingSpecialty: "Orthodontics",
    status: "Completed",
    lastUpdated: "January 30, 2025",
    created: "January 15, 2025",
    expirationDate: "July 15, 2025",
    expirationUrgent: false,
  },
  {
    referringInitials: "JC",
    referringName: "James Cartes",
    orderingInitials: "AV",
    orderingName: "Abril Viola",
    orderingSpecialty: "Periodontics",
    status: "Pending",
    lastUpdated: "January 10, 2025",
    created: "December 28, 2024",
    expirationDate: "January 28, 2025",
    expirationUrgent: true,
  },
  {
    referringInitials: "JC",
    referringName: "James Cartes",
    orderingInitials: "AV",
    orderingName: "Abril Viola",
    orderingSpecialty: "Orthodontics",
    status: "Requested",
    lastUpdated: "December 20, 2024",
    created: "December 5, 2024",
    expirationDate: "June 5, 2025",
    expirationUrgent: false,
  },
];

export function ReferralListTable() {
  return (
    <div className="cb-referral-list-table">
      <ButtonsContainer
        patientName="Julio Perez"
        age="34 yrs"
        sex="Male"
        height="1.68 m"
        weight="65 kg"
        onStartEncounter={() => {}}
      />

      <div className="cb-referral-list-table__nav-row">
        <button type="button" className="cb-secondary-btn">
          <IconArrowLeft size={16} />
          Exit clinical mode
        </button>
        <button type="button" className="cb-secondary-btn">
          <IconLayoutGrid size={16} />
          Overview
        </button>
      </div>

      <div className="cb-referral-list-table__tabs">
        <ClinicalModeButton activeIndex={6} tabs={TABS} onTabClick={() => {}} />
      </div>

      <div className="cb-referral-list-table__card">
        <table className="cb-referral-list-table__table">
          <thead>
            <tr>
              <th>Referring Provider</th>
              <th>Ordering Provider</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Created</th>
              <th>Expiration Date</th>
              <th className="cb-referral-list-table__actions-head" />
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, idx) => (
              <tr key={idx}>
                <td>
                  <div className="cb-provider-cell">
                    <span className="cb-avatar-square">{row.referringInitials}</span>
                    <div className="cb-provider-cell__text">
                      <div className="cb-provider-cell__name">{row.referringName}</div>
                      <div className="cb-provider-cell__sub">Referring Provider</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="cb-provider-cell">
                    <span className="cb-avatar-square">{row.orderingInitials}</span>
                    <div className="cb-provider-cell__text">
                      <div className="cb-provider-cell__name">{row.orderingName}</div>
                      <div className="cb-provider-cell__sub">
                        <span className="cb-dot" />
                        {row.orderingSpecialty}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <StatusPill status={row.status} />
                </td>
                <td className="cb-muted-cell">{row.lastUpdated}</td>
                <td className="cb-muted-cell">{row.created}</td>
                <td
                  className={
                    row.expirationUrgent
                      ? "cb-expiration-cell cb-expiration-cell--urgent"
                      : "cb-expiration-cell"
                  }
                >
                  {row.expirationDate}
                </td>
                <td>
                  <div className="cb-actions-cell">
                    <button type="button" className="cb-icon-btn" aria-label="View document">
                      <IconDocument size={16} />
                    </button>
                    <button type="button" className="cb-icon-btn" aria-label="More actions">
                      <IconKebab size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cb-referral-list-table__footer">
          <span className="cb-referral-list-table__footer-count">
            Showing {ROWS.length} active referrals
          </span>
          <a href="#" className="cb-referral-list-table__footer-link">
            View History →
          </a>
        </div>
      </div>
    </div>
  );
}
