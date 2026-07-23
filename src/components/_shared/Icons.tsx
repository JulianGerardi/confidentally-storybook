import React from "react";

export interface IconProps {
  size?: number;
  className?: string;
}

const defaultProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconPill({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <rect x="3.5" y="9.5" width="17" height="7" rx="3.5" transform="rotate(-45 12 13)" />
      <line x1="9.5" y1="6.5" x2="16.5" y2="13.5" />
    </svg>
  );
}

export function IconPulse({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <path d="M2.5 13h4l2-6 3 12 2.5-9 1.5 3h6.5" />
    </svg>
  );
}

export function IconPersonSearch({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <circle cx="10" cy="7" r="3.25" />
      <path d="M4 20c0-3.5 2.7-6 6-6" />
      <circle cx="16.5" cy="16.5" r="3" />
      <line x1="18.7" y1="18.7" x2="21" y2="21" />
    </svg>
  );
}

export function IconInfo({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="11" x2="12" y2="16.5" />
      <circle cx="12" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTooth({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <path d="M12 3.5c-2 0-2.7 1.2-4 1.2S5 3.5 3.8 4.6C2.6 5.7 2.5 8 3 10.5c.5 2.5 1.5 5 2.3 7 .5 1.3 1 2 1.7 2s1-1 1.2-2.5c.2-1.4.6-3 1.8-3s1.6 1.6 1.8 3c.2 1.5.5 2.5 1.2 2.5s1.2-.7 1.7-2c.8-2 1.8-4.5 2.3-7 .5-2.5.4-4.8-.8-5.9C15 3.5 14 4.7 12.7 4.7c-.3 0-.5 0-.7-.1" />
    </svg>
  );
}

export function IconPhone({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <path d="M4.5 4.5h3.5l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3.5c0 1-1 1.5-2 1.4C9.5 19.4 4.6 14.5 3.6 6.5c-.1-1 .4-2 1.4-2z" />
    </svg>
  );
}

export function IconMouthArch({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <path d="M4 8c0 7 3.5 11 8 11s8-4 8-11" />
      <path d="M4 8c0-2 1-3.5 2-3.5" />
      <path d="M20 8c0-2-1-3.5-2-3.5" />
    </svg>
  );
}

export function IconDocument({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <line x1="8.5" y1="12" x2="15.5" y2="12" />
      <line x1="8.5" y1="15" x2="15.5" y2="15" />
      <line x1="8.5" y1="18" x2="12.5" y2="18" />
    </svg>
  );
}

export function IconTrash({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <line x1="4" y1="6.5" x2="20" y2="6.5" />
      <path d="M9 6.5V4.5h6v2" />
      <path d="M6 6.5 7 20h10l1-13.5" />
      <line x1="10" y1="10" x2="10" y2="16.5" />
      <line x1="14" y1="10" x2="14" y2="16.5" />
    </svg>
  );
}

export function IconKebab({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <circle cx="12" cy="5.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="18.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconChevronDown({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <path d="M5.5 9l6.5 6.5L18.5 9" />
    </svg>
  );
}

export function IconChevronUp({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <path d="M5.5 15l6.5-6.5L18.5 15" />
    </svg>
  );
}

export function IconEye({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.75" />
    </svg>
  );
}

export function IconGrid({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <rect x="4" y="4" width="7" height="7" rx="1.2" />
      <rect x="13" y="4" width="7" height="7" rx="1.2" />
      <rect x="4" y="13" width="7" height="7" rx="1.2" />
      <rect x="13" y="13" width="7" height="7" rx="1.2" />
    </svg>
  );
}

export function IconShield({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    </svg>
  );
}

export function IconScale({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <line x1="12" y1="3" x2="12" y2="20" />
      <line x1="5" y1="6.5" x2="19" y2="6.5" />
      <line x1="19" y1="20" x2="12" y2="20" />
      <line x1="5" y1="20" x2="12" y2="20" />
      <path d="M5 6.5L2.5 12h5z" />
      <path d="M19 6.5L16.5 12h5z" />
    </svg>
  );
}

export function IconCheckCircle({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.3l2.5 2.5L16 9.3" />
    </svg>
  );
}

export function IconUserCircle({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaultProps}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.5 18.2c1-2.3 3-3.2 5.5-3.2s4.5.9 5.5 3.2" />
    </svg>
  );
}
