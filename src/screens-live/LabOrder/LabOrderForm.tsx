import React from "react";
import { ButtonsContainer } from "../../components/ButtonsContainer/ButtonsContainer";
import { ClinicalModeButton } from "../../components/ClinicalModeButton/ClinicalModeButton";
import {
  IconArrowLeft,
  IconLayoutGrid,
  IconDocument,
  IconKebab,
  IconPlusCircle,
  IconX,
  IconUser,
  IconCheckSquare,
  IconChevronLeft,
  IconChevronRight,
} from "../../components/_shared/Icons";
import {
  SearchInput,
  Textarea,
  Checkbox,
  StatusPill,
  FileDropzone,
  UploadedFileRow,
} from "../../components/_shared/FormControls";
import "./LabOrderForm.css";

const TABS = [
  "Exams",
  "Treatment Plan",
  "Treatment",
  "Treatment History",
  "Lab Order",
  "Prescription",
  "Referral",
  "Clinical Note",
];

/*
 * Simplified schematic placeholder for the Figma tooth/quadrant chart —
 * refine with exact vector paths later if pixel-perfect fidelity is needed.
 */

interface Tooth {
  cx: number;
  cy: number;
  filled?: boolean;
  numberLabel?: string;
}

const MAXILLARY_TEETH: Tooth[] = [
  { cx: 40, cy: 70, numberLabel: "3" },
  { cx: 57, cy: 57 },
  { cx: 75, cy: 48 },
  { cx: 93, cy: 42, filled: true },
  { cx: 110, cy: 40, filled: true, numberLabel: "8" },
  { cx: 128, cy: 42, filled: true },
  { cx: 145, cy: 48 },
  { cx: 163, cy: 57 },
  { cx: 180, cy: 70, numberLabel: "14" },
];

const MANDIBULAR_TEETH: Tooth[] = [
  { cx: 40, cy: 130, numberLabel: "19" },
  { cx: 57, cy: 143 },
  { cx: 75, cy: 152 },
  { cx: 93, cy: 158, filled: true },
  { cx: 110, cy: 160, filled: true, numberLabel: "24" },
  { cx: 128, cy: 158, filled: true },
  { cx: 145, cy: 152 },
  { cx: 163, cy: 143 },
  { cx: 180, cy: 130, numberLabel: "30" },
];

const QUADRANT_LABELS = ["BC", "B", "D", "M", "P", "PC"];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function donutSlicePath(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number
) {
  const p0 = polarToCartesian(cx, cy, outerR, startAngle);
  const p1 = polarToCartesian(cx, cy, outerR, endAngle);
  const p2 = polarToCartesian(cx, cy, innerR, endAngle);
  const p3 = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${p0.x} ${p0.y} A ${outerR} ${outerR} 0 ${largeArc} 1 ${p1.x} ${p1.y} L ${p2.x} ${p2.y} A ${innerR} ${innerR} 0 ${largeArc} 0 ${p3.x} ${p3.y} Z`;
}

export interface LabOrderFormProps {
  notesDisabled?: boolean;
}

export function LabOrderForm({ notesDisabled = false }: LabOrderFormProps) {
  return (
    <div className="cb-lab-order-form">
      <ButtonsContainer
        patientName="Julio Perez"
        age="34 yrs"
        sex="Male"
        height="1.68 m"
        weight="65 kg"
        onStartEncounter={() => {}}
      />

      <div className="cb-lab-order-form__nav-row">
        <button type="button" className="cb-secondary-btn">
          <IconArrowLeft size={16} />
          Exit clinical mode
        </button>
        <button type="button" className="cb-secondary-btn">
          <IconLayoutGrid size={16} />
          Overview
        </button>
      </div>

      <div className="cb-lab-order-form__tabs">
        <ClinicalModeButton activeIndex={4} tabs={TABS} onTabClick={() => {}} />
      </div>

      <div className="cb-lab-order-form__title-row">
        <div className="cb-lab-order-form__title-left">
          <h2 className="cb-lab-order-form__title">Lab Order</h2>
          <button type="button" className="cb-icon-btn" aria-label="View document">
            <IconDocument size={18} />
          </button>
          <button type="button" className="cb-icon-btn" aria-label="More actions">
            <IconKebab size={18} />
          </button>
        </div>
        <div className="cb-lab-order-form__title-right">
          <span className="cb-lab-order-form__expiration">
            Expiration date{" "}
            <strong className="cb-lab-order-form__expiration-date">April 1, 2025</strong>
          </span>
          <StatusPill status="Pending" />
        </div>
      </div>

      <div className="cb-lab-order-form__grid">
        <div className="cb-lab-order-form__card">
          <h3 className="cb-lab-order-form__card-heading">General information</h3>

          <div className="cb-lab-order-form__field-block">
            <span className="cb-field-label">
              Referral Provider <span className="cb-required">*</span>
            </span>
            <SearchInput placeholder="Search..." />
          </div>

          <div className="cb-lab-order-form__link-row">
            {/* TODO: wire up to open NewLaboratoryDialog */}
            <a href="#" className="cb-inline-link" onClick={(e) => e.preventDefault()}>
              <IconPlusCircle size={16} />
              New Laboratory
            </a>
          </div>

          <div className="cb-procedure-card">
            <div className="cb-procedure-card__top">
              <div className="cb-procedure-card__title">
                <span className="cb-procedure-card__code">D0120</span>
                <span> - Periodic Evaluation established patient</span>
              </div>
              <div className="cb-procedure-card__top-right">
                <span className="cb-procedure-card__tag">
                  <span className="cb-dot" />
                  Referral
                </span>
                <button type="button" className="cb-icon-btn" aria-label="Remove procedure">
                  <IconX size={14} />
                </button>
              </div>
            </div>
            <div className="cb-procedure-card__pill">✓ Periodontitis recommendation</div>
            <div className="cb-procedure-card__provider">
              <IconUser size={14} />
              Dr. Sarah Loren
            </div>
            <div className="cb-procedure-card__badge">
              <span className="cb-procedure-card__badge-icon">
                <IconCheckSquare size={14} />
              </span>
              Full Mouth
            </div>
          </div>

          <div className="cb-procedure-card">
            <div className="cb-procedure-card__top">
              <div className="cb-procedure-card__title">
                <span className="cb-procedure-card__code">D0120</span>
                <span> - Periodic Evaluation established patient</span>
              </div>
              <div className="cb-procedure-card__top-right">
                <span className="cb-procedure-card__tag">
                  <span className="cb-dot" />
                  Referral
                </span>
                <button type="button" className="cb-icon-btn" aria-label="Remove procedure">
                  <IconX size={14} />
                </button>
              </div>
            </div>
            <div className="cb-procedure-card__pill">✓ Periodontitis recommendation</div>
            <div className="cb-procedure-card__provider">
              <IconUser size={14} />
              Dr. Sarah Loren
            </div>
            <div className="cb-procedure-card__badge">
              <span className="cb-procedure-card__badge-icon">
                <IconCheckSquare size={14} />
              </span>
              Full Mouth
            </div>
          </div>

          <div className="cb-lab-order-form__checkbox-row">
            <Checkbox label="ASAP" />
          </div>

          <div className="cb-teeth-section">
            <div className="cb-teeth-section__label">Teeth &amp; Surface</div>
            <div className="cb-teeth-chart">
              <div className="cb-teeth-chart__arches">
                <svg viewBox="0 0 220 200" className="cb-arch-svg">
                  <text x="110" y="14" textAnchor="middle" className="cb-arch-label">
                    Maxillary
                  </text>
                  <path d="M 40 70 Q 110 10 180 70" className="cb-arch-line" />
                  {MAXILLARY_TEETH.map((t, i) => (
                    <g key={`max-${i}`}>
                      <circle
                        cx={t.cx}
                        cy={t.cy}
                        r={7}
                        className={`cb-arch-tooth${t.filled ? " cb-arch-tooth--filled" : ""}`}
                      />
                      {t.numberLabel && (
                        <text
                          x={t.cx}
                          y={t.cy - 12}
                          textAnchor="middle"
                          className="cb-arch-tooth__label"
                        >
                          {t.numberLabel}
                        </text>
                      )}
                    </g>
                  ))}
                  <path d="M 40 130 Q 110 190 180 130" className="cb-arch-line" />
                  {MANDIBULAR_TEETH.map((t, i) => (
                    <g key={`man-${i}`}>
                      <circle
                        cx={t.cx}
                        cy={t.cy}
                        r={7}
                        className={`cb-arch-tooth${t.filled ? " cb-arch-tooth--filled" : ""}`}
                      />
                      {t.numberLabel && (
                        <text
                          x={t.cx}
                          y={t.cy + 20}
                          textAnchor="middle"
                          className="cb-arch-tooth__label"
                        >
                          {t.numberLabel}
                        </text>
                      )}
                    </g>
                  ))}
                  <text x="110" y="196" textAnchor="middle" className="cb-arch-label">
                    Mandibular
                  </text>
                </svg>
              </div>

              <div className="cb-teeth-chart__quadrant">
                <div className="cb-quadrant-tabs">
                  {["1", "2", "3"].map((n) => (
                    <span
                      key={n}
                      className={`cb-quadrant-tabs__tab${
                        n === "1" ? " cb-quadrant-tabs__tab--active" : ""
                      }`}
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <svg viewBox="0 0 160 160" className="cb-quadrant-svg">
                  {QUADRANT_LABELS.map((label, i) => {
                    const startAngle = i * 60;
                    const endAngle = startAngle + 60;
                    const midAngle = startAngle + 30;
                    const labelPos = polarToCartesian(80, 80, 49, midAngle);
                    const isActive = label === "D";
                    return (
                      <g key={label}>
                        <path
                          d={donutSlicePath(80, 80, 28, 70, startAngle, endAngle)}
                          className={`cb-quadrant-slice${
                            isActive ? " cb-quadrant-slice--active" : ""
                          }`}
                        />
                        <text
                          x={labelPos.x}
                          y={labelPos.y}
                          className="cb-quadrant-slice__label"
                        >
                          {label}
                        </text>
                      </g>
                    );
                  })}
                  <circle cx={80} cy={80} r={28} className="cb-quadrant-center" />
                  <text x={80} y={84} className="cb-quadrant-center__label">
                    O
                  </text>
                </svg>
                <div className="cb-quadrant-nav">
                  <button
                    type="button"
                    className="cb-quadrant-nav__arrow-btn"
                    aria-label="Previous"
                  >
                    <IconChevronLeft size={14} />
                  </button>
                  <button type="button" className="cb-quadrant-nav__apply-btn">
                    Apply to unset
                  </button>
                  <button
                    type="button"
                    className="cb-quadrant-nav__arrow-btn"
                    aria-label="Next"
                  >
                    <IconChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cb-lab-order-form__card">
          <h3 className="cb-lab-order-form__card-heading">Notes</h3>

          <div
            className={`cb-lab-order-form__notes-fields${
              notesDisabled ? " cb-lab-order-form__notes-card--disabled" : ""
            }`}
          >
            <div className="cb-lab-order-form__field-block">
              <Textarea
                label={
                  <>
                    Dental Work Requested <span className="cb-required">*</span>
                  </>
                }
                placeholder="Include patient history, previous treatments, and specific questions for the s..."
                rows={3}
              />
            </div>

            <div className="cb-lab-order-form__field-block">
              <Textarea
                label="Special Instructions"
                placeholder="Include patient history, previous treatments, and specific questions for the s..."
                rows={3}
              />
            </div>

            <div className="cb-lab-order-form__field-block">
              <FileDropzone onFilesSelected={() => {}} />
            </div>
          </div>

          <UploadedFileRow fileName="Echocardiogram_Result.pdf" fileSize="4.2 MB" status="done" />
          <UploadedFileRow
            fileName="Echocardiogram_Result.pdf"
            fileSize=""
            progress={65}
            status="uploading"
          />
        </div>
      </div>

      <div className="cb-lab-order-form__footer">
        <button type="button" className="cb-btn cb-btn--white">
          <IconX size={16} />
          Cancel
        </button>
        <button type="button" className="cb-btn cb-btn--blue">
          ✓ Save
        </button>
      </div>
    </div>
  );
}
