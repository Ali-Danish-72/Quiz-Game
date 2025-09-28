import React from "react";
import { Question } from "../types";
import { PageLayout, ProfessionalCard, IconBadge, StatusBadge } from "./common";
import { getQuestionTypeConfig } from "../constants/questionTypes";
import { useQuestionStats } from "../hooks/useQuestionStats";

interface QuestionListScreenProps {
  questions: Question[];
  onSelectQuestion: (index: number) => void;
}

/**
 * Individual question tile component with state-based styling
 */
const QuestionBox: React.FC<{
  number: number;
  question: Question;
  onClick: () => void;
}> = ({ number, question, onClick }) => {
  const config = getQuestionTypeConfig(question.Type);
  const paddedNumber = number.toString().padStart(2, "0");

  if (question.isOpened && question.hasOwnProperty("isCorrect")) {
    const isCorrect = question.isCorrect;
    return (
      <ProfessionalCard variant={isCorrect ? "success" : "error"} fullWidth>
        <div className="p-4">
          <div className="flex items-start justify-between mb-4">
            <div className="text-left">
              <div className="text-3xl font-bold text-neutral-700">{paddedNumber}</div>
            </div>
            <IconBadge icon={config.icon} iconBg={config.iconBg} iconColor={config.iconColor} />
          </div>

          <div className="text-center">
            <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
              {question.Type}
            </div>

            <StatusBadge variant={isCorrect ? "success" : "error"}>
              {isCorrect
                ? question.score > 0
                  ? `+${question.score}`
                  : "Correct"
                : question.penalty && question.penalty !== 0
                  ? `${question.penalty}`
                  : "Wrong"}
            </StatusBadge>
          </div>
        </div>
      </ProfessionalCard>
    );
  }

  if (question.isOpened) {
    return (
      <ProfessionalCard variant="primary" fullWidth>
        <div className="p-4">
          <div className="flex items-start justify-between mb-4">
            <div className="text-left">
              <div className="text-3xl font-bold text-neutral-700">{paddedNumber}</div>
            </div>
            <IconBadge icon={config.icon} iconBg={config.iconBg} iconColor={config.iconColor} />
          </div>

          <div className="text-center">
            <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
              {question.Type}
            </div>

            <StatusBadge variant="continue">Continue</StatusBadge>
          </div>
        </div>
      </ProfessionalCard>
    );
  }

  // Unopened questions (clickable)
  return (
    <ProfessionalCard variant="clickable" fullWidth onClick={onClick} showHoverEffects>
      <div className="p-4">
        <div className="flex items-start justify-between mb-4">
          <div className="text-left">
            <div className="text-3xl font-bold text-neutral-700">{paddedNumber}</div>
          </div>
          <IconBadge
            icon={config.icon}
            iconBg={config.iconBg}
            iconColor={config.iconColor}
            showHoverScale
          />
        </div>

        <div className="text-center">
          <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
            {question.Type}
          </div>

          <StatusBadge variant="challenge">Challenge</StatusBadge>
        </div>
      </div>
    </ProfessionalCard>
  );
};

/**
 * QuestionListScreen Component
 *
 * Main component displaying the grid of questions with statistics
 */
const QuestionListScreen: React.FC<QuestionListScreenProps> = ({ questions, onSelectQuestion }) => {
  const { totalQuestions, completedQuestions, totalScore } = useQuestionStats(questions);

  return (
    <PageLayout>
      <div className="container py-8">
        {/* Header Statistics */}
        <ProfessionalCard className="mb-8">
          <div className="p-6">
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">Knowledge Challenge</h1>
              <p className="text-neutral-600">Choose a challenge to test your knowledge</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">{totalQuestions}</div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                  Total Challenges
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success-600 mb-1">{completedQuestions}</div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                  Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning-600 mb-1">{totalScore}</div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                  Total Score
                </div>
              </div>
            </div>
          </div>
        </ProfessionalCard>

        {/* Questions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {questions.map((question, index) => (
            <QuestionBox
              key={index}
              number={index + 1}
              question={question}
              onClick={() => onSelectQuestion(index)}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default QuestionListScreen;
