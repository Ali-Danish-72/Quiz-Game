import React from "react";
import { AnimatedBackground } from "./AnimatedBackground";

/**
 * PageLayout Component Props
 */
export interface PageLayoutProps {
  /** Page content */
  children: React.ReactNode;
  /** Additional CSS classes for the main container */
  className?: string;
  /** Whether to show animated background */
  showAnimatedBackground?: boolean;
}

/**
 * PageLayout Component
 *
 * Provides consistent page layout structure with animated background.
 * Replaces repeated layout patterns across QuizScreen and QuestionListScreen.
 *
 * @param props - PageLayout component props
 */
export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className = "",
  showAnimatedBackground = true,
}) => {
  return (
    <div className={`min-h-screen bg-gradient-professional relative overflow-hidden ${className}`}>
      {/* Animated Background */}
      {showAnimatedBackground && <AnimatedBackground />}

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
