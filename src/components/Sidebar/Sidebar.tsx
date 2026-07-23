import React from "react";
import "./Sidebar.css";
import { IconPill, IconPulse, IconPersonSearch, IconInfo, IconChevronDown } from "../_shared/Icons";

export interface SidebarProps {
  onProfileClick: () => void;
  onActionClick: (action: "pill" | "location" | "user" | "badge") => void;
  state: "Default" | "Inactive" | "Frame";
  userName: string;
  className?: string;
}

const actions: { key: "pill" | "location" | "user" | "badge"; Icon: typeof IconPill }[] = [
  { key: "pill", Icon: IconPill },
  { key: "location", Icon: IconPulse },
  { key: "user", Icon: IconPersonSearch },
  { key: "badge", Icon: IconInfo },
];

export function Sidebar({ onProfileClick, onActionClick, state, userName, className }: SidebarProps) {
  const isInactive = state === "Inactive";
  const isFrame = state === "Frame";
  const firstLetter = userName ? userName.charAt(0).toUpperCase() : "";

  const rootClassName = [
    "cb-sidebar",
    isFrame ? "cb-sidebar--frame" : "",
    isInactive ? "cb-sidebar--inactive" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <button type="button" className="cb-sidebar__profile" onClick={onProfileClick}>
        <span className="cb-sidebar__avatar">{firstLetter}</span>
        <span className="cb-sidebar__name">{userName}</span>
        <IconChevronDown size={16} className="cb-sidebar__chevron" />
      </button>
      <div className="cb-sidebar__actions">
        {actions.map(({ key, Icon }) => (
          <button
            key={key}
            type="button"
            className="cb-sidebar__action"
            onClick={() => onActionClick(key)}
            disabled={isInactive}
          >
            <Icon size={16} />
            {isFrame && <span className="cb-sidebar__dot" />}
          </button>
        ))}
      </div>
    </div>
  );
}
