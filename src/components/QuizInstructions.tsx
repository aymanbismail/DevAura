// components/QuizInstructions.tsx
import React from "react";

interface QuizInstructionsProps {
  isAllTopics: boolean;
  isTimeUp: boolean;
}

export const QuizInstructions: React.FC<QuizInstructionsProps> = ({
  isAllTopics,
  isTimeUp,
}) => {
  return (
    <div className="mb-4 p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
      <p className="text-primary dark:text-primary text-sm sm:text-base">
        <strong>Instructions:</strong> Answer all questions below. You have 20
        seconds per question.
        {isAllTopics && (
          <span className="text-blue-600 ml-2">
            🎯 This is a mixed quiz with questions from multiple topics.
          </span>
        )}
        {isTimeUp && (
          <span className="text-destructive ml-2">⏰ Time&apos;s up!</span>
        )}
      </p>
    </div>
  );
};