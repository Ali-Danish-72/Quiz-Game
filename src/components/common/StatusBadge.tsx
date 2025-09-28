import React from "react";

/**
 * Status Badge Variants
 */
export type StatusBadgeVariant = "success" | "error" | "challenge" | "continue" | "custom";

/**
 * StatusBadge Component Props
 */
export interface StatusBadgeProps {
  /** Content to display in the badge */
  children: React.ReactNode;
  /** Visual style variant */
  variant: StatusBadgeVariant;
  /** Custom background color (when variant is 'custom') */
  customBgColor?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Status Badge Color Configurations
 */
const VARIANT_STYLES: Record<StatusBadgeVariant, React.CSSProperties> = {
  success: {
    backgroundColor: "#10b981", // green-500
    color: "white",
  },
  error: {
    backgroundColor: "#dc2626", // red-600
    color: "white",
  },
  challenge: {
    backgroundColor: "#1e40af", // blue-700 (navy)
    color: "white",
  },
  continue: {
    backgroundColor: "#1e40af", // blue-700 (navy)
    color: "white",
  },
  custom: {
    color: "white",
  },
};

/**
 * StatusBadge Component
 *
 * Reusable component for status indicators and pills throughout the application.
 * Replaces inline style patterns and provides consistent styling.
 *
 * @param props - StatusBadge component props
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  children,
  variant,
  customBgColor,
  className = "",
}) => {
  const baseStyles: React.CSSProperties = {
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    ...VARIANT_STYLES[variant],
  };

  // Apply custom background color for 'custom' variant
  if (variant === "custom" && customBgColor) {
    baseStyles.backgroundColor = customBgColor;
  }

  return (
    <div style={baseStyles} className={className}>
      {children}
    </div>
  );
};
