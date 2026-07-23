import React from "react";
import "./Sidebar.css";

export type SidebarState = "Default" | "Inactive" | "Frame";

export interface SidebarProps {
  /**
   * Documentado en clinical-mode-components/02-Sidebar.md: `Default` (331px),
   * `Inactive` (332px, acciones deshabilitadas) y `Frame` (631px, versión
   * ancha). El contenido exacto de `Frame` no se confirmó vía captura en
   * Figma — se replica el mismo layout con más ancho disponible.
   */
  state?: SidebarState;
  userName?: string;
  avatarUrl?: string;
  onProfileClick?: () => void;
  onActionClick?: (action: "pill" | "location" | "user" | "badge") => void;
  className?: string;
}

/**
 * Sidebar — barra de perfil + accesos rápidos. Figma node 254:3016.
 */
export const Sidebar: React.FC<SidebarProps> = ({
  state = "Default",
  userName = "Julio Perez",
  avatarUrl,
  onProfileClick,
  onActionClick,
  className,
}) => {
  const disabled = state === "Inactive";
  return (
    <div
      className={["cb-sidebar", `cb-sidebar--${state}`, className].filter(Boolean).join(" ")}
    >
      <button
        type="button"
        className="cb-sidebar__profile"
        onClick={onProfileClick}
        disabled={disabled}
      >
        <span className="cb-sidebar__avatar">
          {avatarUrl ? <img src={avatarUrl} alt="" /> : userName.slice(0, 1)}
        </span>
        <span className="cb-sidebar__name">{userName}</span>
      </button>
      {(["pill", "location", "user", "badge"] as const).map((a) => (
        <button
          key={a}
          type="button"
          className="cb-sidebar__action"
          onClick={() => onActionClick?.(a)}
          aria-label={a}
          disabled={disabled}
        >
          <span className="cb-sidebar__dot" />
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
