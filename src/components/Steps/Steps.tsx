import React from "react";
import "./Steps.css";

export interface StepsProps {
  /** Cantidad total de pasos (2-5, según las variantes relevadas en Figma) */
  total?: 2 | 3 | 4 | 5;
  /** Paso actual (1-indexed) */
  currentStep?: number;
  /**
   * Marca el stepper completo como finalizado (variante "Step complete - N" en Figma):
   * todos los badges se muestran con check en vez de número, en verde.
   */
  complete?: boolean;
  className?: string;
}

/**
 * Steps — stepper/wizard reutilizado en flujos de 2 a 5 pasos.
 * Figma node 388:1419. Documentado en clinical-mode-components/07-Steps.md:
 * cada paso puede estar pendiente (gris), activo (azul) o, cuando `complete`
 * está activo, el set completo pasa a estado "Step complete - N" (check verde).
 */
export const Steps: React.FC<StepsProps> = ({
  total = 2,
  currentStep = 1,
  complete = false,
  className,
}) => (
  <div className={["cb-steps", className].filter(Boolean).join(" ")}>
    {Array.from({ length: total }, (_, i) => i + 1).map((step, i) => {
      const isComplete = complete || step < currentStep;
      const isActive = !complete && step === currentStep;
      const state = isComplete ? "complete" : isActive ? "active" : "pending";
      return (
        <React.Fragment key={step}>
          <div className="cb-steps__item">
            <span className={`cb-steps__label cb-steps__label--${state}`}>Step</span>
            <span className={`cb-steps__badge cb-steps__badge--${state}`}>
              {isComplete ? (
                <svg viewBox="0 0 12 12" className="cb-steps__check" aria-hidden="true">
                  <path
                    d="M2 6l2.5 2.5L10 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                step
              )}
            </span>
          </div>
          {i < total - 1 && <span className="cb-steps__connector" />}
        </React.Fragment>
      );
    })}
  </div>
);

export default Steps;
