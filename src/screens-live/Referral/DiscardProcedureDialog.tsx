import React from "react";
import { IconX, IconCalendar, IconKebab } from "../../components/_shared/Icons";
import "./DiscardProcedureDialog.css";

export interface DiscardProcedureCondition {
  status: string;
  date: string;
  title: string;
  condition: string;
  descriptors: string;
}

export interface DiscardProcedureDialogProps {
  onCancel: () => void;
  onConfirm: () => void;
  conditions: DiscardProcedureCondition[];
}

export function DiscardProcedureDialog({
  onCancel,
  onConfirm,
  conditions,
}: DiscardProcedureDialogProps) {
  return (
    <div className="cb-discard-dialog">
      <div className="cb-discard-dialog__header">
        <h3 className="cb-discard-dialog__title">Discard Procedure</h3>
        <button
          type="button"
          className="cb-discard-dialog__close"
          aria-label="Close"
          onClick={onCancel}
        >
          <IconX size={18} />
        </button>
      </div>

      <p className="cb-discard-dialog__subtext">
        You are about to complete this procedure.
      </p>
      <p className="cb-discard-dialog__subtext">
        Select any linked conditions you want to mark as Treated.
      </p>

      <div className="cb-discard-dialog__conditions">
        {conditions.map((c, idx) => (
          <div className="cb-condition-card" key={idx}>
            <div className="cb-condition-card__top">
              <div className="cb-condition-card__top-left">
                <span className="cb-condition-card__status-pill">✓ {c.status}</span>
                <span className="cb-condition-card__date">
                  <IconCalendar size={14} />
                  {c.date}
                </span>
              </div>
              <button
                type="button"
                className="cb-icon-btn"
                aria-label="More actions"
              >
                <IconKebab size={16} />
              </button>
            </div>
            <div className="cb-condition-card__title">{c.title}</div>
            <div className="cb-condition-card__row">
              <span className="cb-condition-card__label">Condition: </span>
              <span className="cb-condition-card__value">{c.condition}</span>
            </div>
            <div className="cb-condition-card__row">
              <span className="cb-condition-card__label">Descriptors: </span>
              <span className="cb-condition-card__value">{c.descriptors}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="cb-discard-dialog__footer">
        <button type="button" className="cb-btn cb-btn--white" onClick={onCancel}>
          ✕ Cancel
        </button>
        <button type="button" className="cb-btn cb-btn--blue" onClick={onConfirm}>
          ✓ Confirm
        </button>
      </div>
    </div>
  );
}
