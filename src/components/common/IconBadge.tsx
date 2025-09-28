import React from "react";
import { LucideIcon } from "lucide-react";

/**
 * IconBadge Component Props
 */
export interface IconBadgeProps {
  /** Icon component to display */
  icon: LucideIcon;
  /** Background color class (e.g., 'bg-blue-100') */
  iconBg: string;
  /** Icon color class (e.g., 'text-blue-600') */
  iconColor: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show hover scale animation */
  showHoverScale?: boolean;
}

/**
 * IconBadge Component
 *
 * Reusable component for displaying icons in colored circular badges.
 * Replaces repeated icon badge patterns across the application.
 *
 * @param props - IconBadge component props
 */
export const IconBadge: React.FC<IconBadgeProps> = ({
  icon: IconComponent,
  iconBg,
  iconColor,
  className = "",
  showHoverScale = false,
}) => {
  const hoverScale = showHoverScale
    ? "group-hover:scale-110 transition-transform duration-200"
    : "";

  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center ${iconBg} ${hoverScale} ${className}`}
    >
      <IconComponent className={`w-4 h-4 ${iconColor}`} />
    </div>
  );
};
