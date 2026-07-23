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
} from "../../components/_shared/Icons";
import {
  SearchInput,
  Textarea,
  Checkbox,
  StatusPill,
  FileDropzone,
  UploadedFileRow,
} from "../../components/_shared/FormControls";
import "./ReferralForm.css";

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

export function ReferralForm() {
  return (
    <div className="cb-referral-form">
      <ButtonsContainer
        patientName="Julio Perez"
        age="34 yrs"
        sex="Male"
        height="1.68 m"
        weight="65 kg"
        onStartEncounter={() => {}}
      />

      <div className="cb-referral-form__nav-row">
        <button type="button" className="cb-secondary-btn">
          <IconArrowLeft size={16} />
          Exit clinical mode
        </button>
        <button type="button" className="cb-secondary-btn">
          <IconLayoutGrid size={16} />
          Overview
        </button>
      </div>

      <div className="cb-referral-form__tabs">
        <ClinicalModeButton activeIndex={6} tabs={TABS} onTabClick={() => {}} />
      </div>

      <div className="cb-referral-form__title-row">
        <div className="cb-referral-form__title-left">
          <h2 className="cb-referral-form__title">Referral</h2>
          <button type="button" className="cb-icon-btn" aria-label="View document">
            <IconDocument size={18} />
          </button>
          <button type="button" className="cb-icon-btn" aria-label="More actions">
            <IconKebab size={18} />
          </button>
        </div>
        <StatusPill status="Pending" />
      </div>

      <div className="cb-referral-form__grid">
        <div className="cb-referral-form__card">
          <h3 className="cb-referral-form__card-heading">General Information</h3>

          <div className="cb-referral-form__field-block">
            <span className="cb-field-label">
              Referral Provider <span className="cb-required">*</span>
            </span>
            <SearchInput placeholder="" />
          </div>

          <div className="cb-referral-form__link-row">
            <a href="#" className="cb-inline-link">
              <IconPlusCircle size={16} />
              New Laboratory
            </a>
          </div>

          <div className="cb-referral-form__field-block">
            <span className="cb-field-label">
              Procedure Finder <span className="cb-required">*</span>
            </span>
            <SearchInput placeholder="" />
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
            <div className="cb-procedure-card__pill">
              ✓ Periodontitis recommendation
            </div>
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
                <span className="cb-procedure-card__code">D0140</span>
                <span> - Limited oral evaluation problem focused</span>
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
            <div className="cb-procedure-card__pill">
              ✓ Periodontitis recommendation
            </div>
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

          <div className="cb-referral-form__checkbox-row">
            <Checkbox label="ASAP" />
            <Checkbox label="Mandatory to continue treatment" />
          </div>
        </div>

        <div className="cb-referral-form__card">
          <h3 className="cb-referral-form__card-heading">Notes</h3>

          <div className="cb-referral-form__field-block">
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

          <div className="cb-referral-form__field-block">
            <Textarea
              label="Special Instructions"
              placeholder="Include patient history, previous treatments, and specific questions for the s..."
              rows={3}
            />
          </div>

          <div className="cb-referral-form__field-block">
            <FileDropzone onFilesSelected={() => {}} />
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

      <div className="cb-referral-form__footer">
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
