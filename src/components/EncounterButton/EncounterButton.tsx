import React from "react";
import "./EncounterButton.css";
import { IconChevronUp } from "../_shared/Icons";

export interface EncounterButtonProps {
  onClick: () => void;
  onSegmentClick: () => void;
  variant: "Start Encounter" | "Fullfield" | "End" | "Not Encounter" | "Paused";
  className?: string;
}

function MainIcon({ variant }: { variant: EncounterButtonProps["variant"] }) {
  if (variant === "Not Encounter") {
    return null;
  }
  if (variant === "Paused") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24">
        <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
        <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <path d="M6 4l14 8-14 8z" fill="currentColor" />
    </svg>
  );
}

export function EncounterButton({ onClick, onSegmentClick, variant, className }: EncounterButtonProps) {
  const rootClassName = [
    "cb-encounter-button",
    `cb-eb--${variant.toLowerCase().replace(/\s+/g, "-")}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <button type="button" className="cb-eb__main" onClick={onClick}>
        <MainIcon variant={variant} />
        <span>{variant}</span>
      </button>
      <button type="button" className="cb-eb__segment" onClick={onSegmentClick}>
        <IconChevronUp size={14} />
      </button>
    </div>
  );
}
