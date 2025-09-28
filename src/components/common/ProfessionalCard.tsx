import React from "react";

/**
 * Professional Card Variants
 */
export type CardVariant = "default" | "success" | "error" | "primary" | "clickable";

/**
 * ProfessionalCard Component Props
 */
export interface ProfessionalCardProps {
  /** Card content */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: CardVariant;
  /** Click handler for interactive cards */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Whether the card should be full width */
  fullWidth?: boolean;
  /** Whether to show hover animations */
  showHoverEffects?: boolean;
  /** Custom styling for specific use cases */
  customBg?: string;
  /** Custom border color */
  customBorderColor?: string;
}

/**
 * Card Variant Style Configurations
 */
const VARIANT_CLASSES: Record<CardVariant, string> = {
  default: "bg-white border-neutral-300",
  success: "bg-success-50 border-success-300",
  error: "bg-error-50 border-error-300",
  primary: "bg-primary-50 border-primary-300",
  clickable:
    "bg-white border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 cursor-pointer",
};

/**
 * ProfessionalCard Component
 *
 * Reusable card component that provides consistent styling across the application.
 * Replaces repeated professional-card patterns with a configurable component.
 *
 * @param props - ProfessionalCard component props
 */
export const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  children,
  variant = "default",
  onClick,
  className = "",
  fullWidth = false,
  showHoverEffects = false,
  customBg,
  customBorderColor,
}) => {
  const isClickable = onClick !== undefined || variant === "clickable";

  const baseClasses = [
    "professional-card",
    "border-2",
    fullWidth ? "w-full" : "",
    isClickable ? "cursor-pointer group" : "cursor-default",
    showHoverEffects && isClickable
      ? "hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
      : "",
    VARIANT_CLASSES[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const cardStyle: React.CSSProperties = {};
  if (customBg) cardStyle.backgroundColor = customBg;
  if (customBorderColor) cardStyle.borderColor = customBorderColor;

  const CardElement = isClickable ? "button" : "div";

  return (
    <CardElement
      className={baseClasses}
      onClick={onClick}
      style={Object.keys(cardStyle).length > 0 ? cardStyle : undefined}
      type={isClickable ? "button" : undefined}
    >
      {children}
    </CardElement>
  );
};
