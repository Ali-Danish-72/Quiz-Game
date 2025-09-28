import React from "react";

/**
 * AnimatedBackground Component
 *
 * Provides animated geometric shapes background for the application.
 * Used consistently across QuizScreen and QuestionListScreen.
 *
 * Features:
 * - 15 floating geometric shapes with unique animations
 * - Semi-transparent design with backdrop blur effects
 * - Non-interactive (pointer-events: none)
 * - Hidden on mobile devices for performance
 */
export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="geometric-shape shape-1"></div>
      <div className="geometric-shape shape-2"></div>
      <div className="geometric-shape shape-3"></div>
      <div className="geometric-shape shape-4"></div>
      <div className="geometric-shape shape-5"></div>
      <div className="geometric-shape shape-6"></div>
      <div className="geometric-shape shape-7"></div>
      <div className="geometric-shape shape-8"></div>
      <div className="geometric-shape shape-9"></div>
      <div className="geometric-shape shape-10"></div>
      <div className="geometric-shape shape-11"></div>
      <div className="geometric-shape shape-12"></div>
      <div className="geometric-shape shape-13"></div>
      <div className="geometric-shape shape-14"></div>
      <div className="geometric-shape shape-15"></div>
    </div>
  );
};
