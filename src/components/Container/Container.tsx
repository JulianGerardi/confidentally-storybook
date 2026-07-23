import React from "react";
import "./Container.css";
import { IconTooth, IconPhone, IconMouthArch } from "../_shared/Icons";

export interface ContainerProps {
  onActionClick: (index: number) => void;
  state: "Default" | "Variant2" | "Inactive" | "Error" | "Disabled";
  code: string;
  description: string;
  className?: string;
}

const actionIcons = [IconTooth, IconPhone, IconPhone, IconMouthArch];

export function Container({ onActionClick, state, code, description, className }: ContainerProps) {
  const rootClassName = [
    "cb-container",
    `cb-container--${state.toLowerCase()}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <div className="cb-container__info">
        <span className="cb-container__code">{code}</span>
        <span className="cb-container__description">{description}</span>
      </div>
      <div className="cb-container__actions">
        {actionIcons.map((Icon, index) => (
          <button
            key={index}
            type="button"
            className="cb-container__action"
            onClick={() => onActionClick(index)}
          >
            <Icon size={16} />
          </button>
        ))}
      </div>
    </div>
  );
}
