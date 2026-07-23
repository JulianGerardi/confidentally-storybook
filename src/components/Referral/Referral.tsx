import React from "react";
import "./Referral.css";

export type ReferralType = "Referral" | "Variant3" | "Prescription";

export interface ReferralProps {
  type?: ReferralType;
  referringProvider?: string;
  orderingProvider?: string;
  specialty?: string;
  status?: string;
  onDelete?: () => void;
  onMoreActions?: () => void;
  className?: string;
}

/**
 * Referral — card de derivación entre proveedores. Figma node 269:572.
 */
export const Referral: React.FC<ReferralProps> = ({
  type = "Referral",
  referringProvider = "James Cartes",
  orderingProvider = "Abril Viola",
  specialty = "Orthodontics",
  status = "Requested",
  onDelete,
  onMoreActions,
  className,
}) => (
  <div className={["cb-referral", className].filter(Boolean).join(" ")} data-type={type}>
    <div className="cb-referral__provider">
      <span className="cb-referral__avatar">JC</span>
      <div>
        <p className="cb-referral__name">{referringProvider}</p>
        <p className="cb-referral__role">Referring Provider</p>
      </div>
    </div>
    <div className="cb-referral__provider">
      <span className="cb-referral__avatar">AV</span>
      <div>
        <p className="cb-referral__name">
          {orderingProvider} <span className="cb-referral__specialty">{specialty}</span>
        </p>
        <p className="cb-referral__role">Referring Provider</p>
      </div>
    </div>
    <span className="cb-referral__status">{status}</span>
    <div className="cb-referral__dates">
      <div><span>Last Updated</span><strong>April 2, 2025</strong></div>
      <div><span>Created</span><strong>April 2, 2025</strong></div>
      <div><span>Expiration date</span><strong className="cb-referral__danger">April 1, 2025</strong></div>
    </div>
    <div className="cb-referral__actions">
      <button type="button" onClick={onDelete} aria-label="Eliminar">
        <svg viewBox="0 0 20 20"><path d="M4 6h12M8 6V4h4v2M6 6l1 12h6l1-12" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
      </button>
      <button type="button" onClick={onMoreActions} aria-label="Más acciones">
        <svg viewBox="0 0 20 20"><circle cx="10" cy="4" r="1.5" fill="currentColor" /><circle cx="10" cy="10" r="1.5" fill="currentColor" /><circle cx="10" cy="16" r="1.5" fill="currentColor" /></svg>
      </button>
    </div>
  </div>
);

export default Referral;
