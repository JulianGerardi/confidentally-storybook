import React from "react";
import { IconX, IconTrash, IconChevronDown } from "../../components/_shared/Icons";
import "./NewLaboratoryDialog.css";

export interface NewLaboratoryDialogProps {
  onCancel?: () => void;
  onSave?: () => void;
  /** Cuando es true, todos los campos muestran el estilo de error (borde rojo) — usado para
   * reproducir el frame "New Laboratory - Error" de Figma (node 850:1197), que es un estado
   * de demo con todos los campos inválidos a la vez, no una validación parcial realista. */
  invalid?: boolean;
}

function Field({
  label,
  required,
  placeholder,
  invalid,
  chevron,
}: {
  label: string;
  required?: boolean;
  placeholder?: string;
  invalid?: boolean;
  chevron?: boolean;
}) {
  return (
    <label className="cb-nl-field">
      <span className="cb-nl-field__label">
        {label} {required && <span className="cb-required">*</span>}
      </span>
      <span className="cb-nl-field__input-wrap">
        <input
          type="text"
          className={`cb-nl-field__input${invalid ? " cb-nl-field__input--error" : ""}`}
          placeholder={placeholder}
        />
        {chevron && <IconChevronDown size={16} className="cb-nl-field__chevron" />}
      </span>
    </label>
  );
}

export function NewLaboratoryDialog({ onCancel, onSave, invalid = false }: NewLaboratoryDialogProps) {
  return (
    <div className="cb-new-lab-dialog">
      <div className="cb-new-lab-dialog__header">
        <h3 className="cb-new-lab-dialog__title">New Laboratory</h3>
        <button
          type="button"
          className="cb-new-lab-dialog__close"
          aria-label="Close"
          onClick={onCancel}
        >
          <IconX size={18} />
        </button>
      </div>

      <div className="cb-new-lab-dialog__body">
        <div className="cb-new-lab-dialog__column">
          <div className="cb-new-lab-dialog__section">
            <h4 className="cb-new-lab-dialog__section-heading">General Information</h4>
            <Field label="Organization Name" required placeholder="Select" invalid={invalid} />
            <Field
              label="Organization Name"
              required
              placeholder="abril@gmail.com"
              invalid={invalid}
            />
            <div className="cb-new-lab-dialog__row-2col">
              <Field label="Area Code" required placeholder="+1" invalid={invalid} />
              <Field label="Number" required placeholder="408-XXX-XXXX" invalid={invalid} />
            </div>
          </div>

          <div className="cb-new-lab-dialog__section">
            <h4 className="cb-new-lab-dialog__section-heading">Credentials</h4>
            {/* Static presentational rows — no real add/remove state logic needed here. */}
            {[0, 1, 2].map((i) => (
              <div className="cb-nl-credential-row" key={i}>
                <Field
                  label="Credential Number"
                  required
                  chevron
                  placeholder="Select"
                  invalid={invalid}
                />
                <Field
                  label="Credential Type"
                  required
                  chevron
                  placeholder="Select"
                  invalid={invalid}
                />
                <Field label="Expiration Date" placeholder="DD / MM / ..." invalid={invalid} />
                <button
                  type="button"
                  className="cb-icon-btn cb-nl-credential-row__trash"
                  aria-label="Remove credential row"
                >
                  <IconTrash size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="cb-new-lab-dialog__column">
          <div className="cb-new-lab-dialog__section">
            <h4 className="cb-new-lab-dialog__section-heading">Address Information</h4>
            <Field label="Address line 1" required placeholder="Select" invalid={invalid} />
            <Field label="Address line 2" placeholder="Select" invalid={invalid} />
            <Field
              label="Organization Name"
              required
              placeholder="Placeholder"
              invalid={invalid}
            />
            <Field label="Country" required chevron placeholder="Select" invalid={invalid} />
            <Field label="Region" required chevron placeholder="Select" invalid={invalid} />
            <Field label="City" required chevron placeholder="Select" invalid={invalid} />
            <Field label="Postal Code" placeholder="6600" invalid={invalid} />
          </div>
        </div>
      </div>

      <div className="cb-new-lab-dialog__footer">
        <button type="button" className="cb-btn cb-btn--white" onClick={onCancel}>
          <IconX size={16} />
          Cancel
        </button>
        <button type="button" className="cb-btn cb-btn--blue" onClick={onSave}>
          ✓ Save
        </button>
      </div>
    </div>
  );
}
