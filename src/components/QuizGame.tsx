import React, { useState, useEffect, useCallback } from "react";
import { Question } from "../types";
import QuestionListScreen from "./QuestionListScreen";
import QuizScreen from "./QuizScreen";

const parseCSV = (csv: string): Question[] => {
  const lines = csv.trim().split("\n");
  const headers = lines[0].split(",");
  return lines.slice(1).map(line => {
    const values = line.split(",");
    const question: any = headers.reduce((obj: any, header, index) => {
      obj[header.trim()] = values[index].trim();
      return obj;
    }, {});
    return {
      ...question,
      score: 0,
      wrongAttempts: 0,
      penalty: 0,
      isCorrect: false,
      showAnswer: false,
      isOpened: false,
    };
  });
};

const QuizGame: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [loadingState, setLoadingState] = useState<"loading" | "error" | "success">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setLoadingState("loading");
        const response = await fetch("/data/questions.csv");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvData = await response.text();
        const parsedQuestions = parseCSV(csvData);
        setQuestions(parsedQuestions);
        setLoadingState("success");
      } catch (error) {
        console.error("Failed to load questions from CSV:", error);
        setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred");
        setLoadingState("error");
      }
    };

    loadQuestions();
  }, []);

  const handleSelectQuestion = (index: number) => {
    setCurrentIndex(index);
    setQuestions(prevQuestions =>
      prevQuestions.map((q, i) => (i === index ? { ...q, isOpened: true } : q))
    );
  };

  const handleUpdateQuestion = (updatedQuestion: Question) => {
    setQuestions(prevQuestions =>
      prevQuestions.map((q, i) => (i === currentIndex ? updatedQuestion : q))
    );
  };

  const handleExitQuiz = useCallback(() => {
    setCurrentIndex(null);
  }, []);

  if (loadingState === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Loading Questions</h2>
          <p className="text-gray-600">Please wait...</p>
        </div>
      </div>
    );
  }

  if (loadingState === "error") {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="bg-white border rounded-lg p-8 text-center max-w-md">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold mb-4 text-gray-900">Error Loading Questions</h2>
          <p className="text-gray-600 mb-6">{errorMessage}</p>
          <button onClick={() => window.location.reload()} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {currentIndex === null ? (
          <QuestionListScreen questions={questions} onSelectQuestion={handleSelectQuestion} />
        ) : (
          <QuizScreen
            question={questions[currentIndex]}
            onUpdateQuestion={handleUpdateQuestion}
            onExit={handleExitQuiz}
          />
        )}
      </main>
    </div>
  );
};

export default QuizGame;
