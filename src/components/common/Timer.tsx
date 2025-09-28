import React from "react";
import { Clock } from "lucide-react";

/**
 * Timer Component Props
 */
export interface TimerProps {
  /** Remaining seconds */
  seconds: number;
  /** Whether to show warning state (red background) */
  isWarning?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Timer Component
 *
 * Displays a countdown timer with warning state styling.
 * Extracted from QuizScreen for reusability.
 *
 * @param props - Timer component props
 */
export const Timer: React.FC<TimerProps> = ({ seconds, isWarning = false, className = "" }) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const timerClass = isWarning ? "timer-warning" : "timer-normal";

  return (
    <div className={`timer ${timerClass} ${className}`}>
      <Clock className="w-5 h-5" />
      <span className="text-lg font-semibold">
        {String(minutes).padStart(2, "0")}:{String(remainingSeconds).padStart(2, "0")}
      </span>
    </div>
  );
};
