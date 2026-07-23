import React from "react";
import "./Container.css";

export type ContainerState = "Default" | "Variant2" | "Inactive" | "Error" | "Disabled";

export interface ContainerProps {
  /**
   * clinical-mode-components/09-Container.md documenta 5 estados.
   * `Variant2` (node 535:2823) no se confirmó visualmente contra `Default`
   * durante el relevamiento — se renderiza igual hasta confirmarlo con Figma.
   */
  state?: ContainerState;
  code?: string;
  description?: string;
  onActionClick?: (index: number) => void;
  className?: string;
}

/**
 * Container — card de código de procedimiento con acciones. Figma node 535:2822.
 */
export const Container: React.FC<ContainerProps> = ({
  state = "Default",
  code = "D0120",
  description = "Periodic Oral Evaluation",
  onActionClick,
  className,
}) => (
  <div className={["cb-container", `cb-container--${state}`, className].filter(Boolean).join(" ")}>
    <p className="cb-container__text">
      <span className="cb-container__code">{code} - </span>
      <span>{description}</span>
    </p>
    <div className="cb-container__actions">
      {[0, 1, 2, 3].map((i) => (
        <button
          key={i}
          type="button"
          className="cb-container__action"
          onClick={() => onActionClick?.(i)}
          disabled={state === "Disabled"}
          aria-label={`acción ${i + 1}`}
        >
          <svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="6" fill="currentColor" /></svg>
        </button>
      ))}
    </div>
  </div>
);

export default Container;
