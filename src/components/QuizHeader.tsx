// components/QuizHeader.tsx
import React from "react";

interface QuizHeaderProps {
  quizTitle: string;
  questionCount: number;
  totalDuration: number;
  isAllTopics: boolean;
  topicStats: Record<string, number> | null;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({
  quizTitle,
  questionCount,
  totalDuration,
  isAllTopics,
  topicStats,
}) => {
  return (
    <header className="mb-4 sm:mb-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            {quizTitle || "Quiz"}
          </h1>
          <div className="text-muted-foreground mt-1 sm:mt-2 text-sm sm:text-base">
            <p>
              {questionCount} Questions • {totalDuration} seconds total
            </p>
            {isAllTopics && topicStats && (
              <div className="mt-2 space-y-1">
                <p className="text-xs text-muted-foreground">
                  🎯 Mixed questions from:{" "}
                  {Object.entries(topicStats)
                    .map(([topic, count]) => `${topic} (${count})`)
                    .join(" • ")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};