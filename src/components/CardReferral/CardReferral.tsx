import React from "react";
import "./CardReferral.css";
import { IconTooth } from "../_shared/Icons";

export interface CardReferralProps {
  onClick: () => void;
  state: "Default" | "Variant2" | "Inactive" | "Error" | "Disabled";
  label: string;
  className?: string;
}

export function CardReferral({ onClick, state, label, className }: CardReferralProps) {
  const rootClassName = [
    "cb-card-referral",
    `cb-card-referral--${state.toLowerCase()}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName} onClick={onClick}>
      <span className="cb-card-referral__label">{label}</span>
      <span className="cb-card-referral__icon-button">
        <IconTooth size={18} />
      </span>
    </div>
  );
}
