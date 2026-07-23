import React, { useRef } from "react";
import {
  IconSearch,
  IconLoader,
  IconXCircle,
  IconCheckCircle,
  IconClock,
  IconUpload,
  IconDocument,
  IconTrash,
} from "./Icons";
import "./FormControls.css";

export function SearchInput({
  placeholder,
  value,
  onChange,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div className="cb-search-input">
      <IconSearch size={16} className="cb-search-input__icon" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}

export function TextInput({
  placeholder,
  value,
  onChange,
  label,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  label?: React.ReactNode;
}) {
  return (
    <label className="cb-field">
      {label && <span className="cb-field__label">{label}</span>}
      <input
        className="cb-field__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </label>
  );
}

export function Textarea({
  placeholder,
  value,
  onChange,
  label,
  rows,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  label?: React.ReactNode;
  rows?: number;
}) {
  return (
    <label className="cb-field">
      {label && <span className="cb-field__label">{label}</span>}
      <textarea
        className="cb-field__textarea"
        placeholder={placeholder}
        value={value}
        rows={rows || 3}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </label>
  );
}

export function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked?: boolean;
  onChange?: (v: boolean) => void;
  label?: React.ReactNode;
}) {
  return (
    <label className="cb-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <span className="cb-checkbox__label">{label}</span>
    </label>
  );
}

type StatusType = "Requested" | "Canceled" | "Completed" | "Rejected" | "Pending";

const statusIconMap: Record<StatusType, React.ComponentType<{ size?: number; className?: string }>> = {
  Requested: IconLoader,
  Canceled: IconXCircle,
  Completed: IconCheckCircle,
  Rejected: IconXCircle,
  Pending: IconClock,
};

export function StatusPill({ status }: { status: StatusType }) {
  const Icon = statusIconMap[status];
  return (
    <span className={`cb-status-pill cb-status-pill--${status.toLowerCase()}`}>
      <Icon size={12} className="cb-status-pill__icon" />
      {status}
    </span>
  );
}

export function FileDropzone({
  onFilesSelected,
}: {
  onFilesSelected?: (files: FileList) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="cb-dropzone"
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
    >
      <span className="cb-dropzone__badge">
        <IconUpload size={20} />
      </span>
      <div className="cb-dropzone__title">Click to upload or drag &amp; drop</div>
      <div className="cb-dropzone__subtitle">PDF, JPG or DICOM (max. 50MB)</div>
      <input
        ref={inputRef}
        type="file"
        multiple
        style={{ display: "none" }}
        onChange={(e) => {
          if (e.target.files && onFilesSelected) {
            onFilesSelected(e.target.files);
          }
        }}
      />
    </div>
  );
}

export function UploadedFileRow({
  fileName,
  fileSize,
  progress,
  status,
}: {
  fileName: string;
  fileSize?: string;
  progress?: number;
  status: "done" | "uploading";
}) {
  const subtext =
    status === "uploading"
      ? `Uploading... ${progress ?? 0}% • 12 sec left`
      : `${fileSize} • Upload`;

  return (
    <div className="cb-uploaded-row">
      <div className="cb-uploaded-row__main">
        <span
          className={`cb-uploaded-row__badge ${
            status === "done" ? "cb-uploaded-row__badge--done" : "cb-uploaded-row__badge--uploading"
          }`}
        >
          <IconDocument size={16} className="cb-uploaded-row__badge-icon" />
        </span>
        <div className="cb-uploaded-row__text">
          <div className="cb-uploaded-row__name">{fileName}</div>
          <div className="cb-uploaded-row__subtext">{subtext}</div>
        </div>
        {status === "done" && (
          <button type="button" className="cb-uploaded-row__trash" aria-label="Remove file">
            <IconTrash size={16} />
          </button>
        )}
      </div>
      {status === "uploading" && (
        <div className="cb-uploaded-row__progress-track">
          <div
            className="cb-uploaded-row__progress-bar"
            style={{ width: `${progress ?? 0}%` }}
          />
        </div>
      )}
    </div>
  );
}
