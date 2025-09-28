import { useMemo } from "react";
import { Question } from "../types";

/**
 * Question Statistics Interface
 */
export interface QuestionStats {
  /** Total number of questions */
  totalQuestions: number;
  /** Number of completed questions */
  completedQuestions: number;
  /** Number of opened but not completed questions */
  inProgressQuestions: number;
  /** Number of unopened questions */
  unopenedQuestions: number;
  /** Total accumulated score */
  totalScore: number;
  /** Completion percentage (0-100) */
  completionPercentage: number;
}

/**
 * Custom Hook: useQuestionStats
 *
 * Calculates and memoizes question statistics to avoid repeated calculations.
 * Replaces inline statistical calculations across components.
 *
 * @param questions - Array of Question objects
 * @returns Memoized question statistics
 */
export const useQuestionStats = (questions: Question[]): QuestionStats => {
  return useMemo(() => {
    const totalQuestions = questions.length;

    // Categorize questions by status
    let completedQuestions = 0;
    let inProgressQuestions = 0;
    let unopenedQuestions = 0;
    let totalScore = 0;

    questions.forEach(question => {
      // Accumulate total score
      totalScore += question.score || 0;

      if (!question.isOpened) {
        // Question has never been opened
        unopenedQuestions++;
      } else if (question.hasOwnProperty("isCorrect")) {
        // Question has been answered (completed)
        completedQuestions++;
      } else {
        // Question is opened but not answered (in progress)
        inProgressQuestions++;
      }
    });

    // Calculate completion percentage
    const completionPercentage =
      totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0;

    return {
      totalQuestions,
      completedQuestions,
      inProgressQuestions,
      unopenedQuestions,
      totalScore,
      completionPercentage,
    };
  }, [questions]);
};
