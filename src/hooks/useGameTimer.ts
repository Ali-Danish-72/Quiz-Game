import { useState, useEffect } from "react";
import { APP_CONFIG } from "../config/constants";
import { playLoopedSound } from "../utils/soundUtils";

/**
 * Game Timer Hook Options
 */
export interface UseGameTimerOptions {
  /** Total seconds for the timer */
  totalSeconds?: number;
  /** Whether the timer should be active */
  isActive?: boolean;
  /** Callback when timer reaches zero */
  onTimeout?: () => void;
}

/**
 * Game Timer Hook Return Value
 */
export interface GameTimerState {
  /** Current time left in seconds */
  timeLeft: number;
  /** Whether timer is in warning state */
  isWarning: boolean;
  /** Reset timer to initial value */
  resetTimer: () => void;
  /** Pause/resume timer */
  pauseTimer: () => void;
  /** Resume timer */
  resumeTimer: () => void;
}

/**
 * Custom Hook: useGameTimer
 *
 * Manages game timer functionality including countdown, warning states,
 * and sound effects. Extracts timer logic from QuizScreen.
 *
 * @param options - Timer configuration options
 * @returns Game timer state and controls
 */
export const useGameTimer = ({
  totalSeconds = APP_CONFIG.timerConfig.totalSeconds,
  isActive = true,
  onTimeout,
}: UseGameTimerOptions = {}): GameTimerState => {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isPaused, setIsPaused] = useState(!isActive);

  const isWarning = timeLeft <= APP_CONFIG.timerConfig.dangerZoneSeconds;

  // Main timer countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            onTimeout?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPaused, timeLeft, onTimeout]);

  // Sound effects for warning zone
  useEffect(() => {
    let stopSound: (() => void) | null = null;

    if (timeLeft <= APP_CONFIG.timerConfig.dangerZoneSeconds && timeLeft > 0) {
      stopSound = playLoopedSound("tick", 1000);
    } else if (timeLeft % APP_CONFIG.timerConfig.warningBeepInterval === 0 && timeLeft > 0) {
      // Warning beep at intervals
      // Note: playSound function would need to be called here for interval beeps
    }

    return () => {
      if (stopSound) stopSound();
    };
  }, [timeLeft]);

  // Control functions
  const resetTimer = () => {
    setTimeLeft(totalSeconds);
    setIsPaused(!isActive);
  };

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const resumeTimer = () => {
    setIsPaused(false);
  };

  // Update timer when isActive prop changes
  useEffect(() => {
    setIsPaused(!isActive);
  }, [isActive]);

  return {
    timeLeft,
    isWarning,
    resetTimer,
    pauseTimer,
    resumeTimer,
  };
};
