// components/QuizReview.tsx
import React from "react";
import QuizQuestionReview from "@/components/QuizQuestionReview";
import { EnhancedQuizQuestion } from "@/types/quizInterfaceAndType";
import { getMotivationalMessage } from "@/utils/quizUtils";

interface QuizReviewProps {
  questions: EnhancedQuizQuestion[];
  selectedAnswers: Record<string, string>;
  score: number;
  isAllTopics: boolean;
  topicStats: Record<string, number> | null;
  onEndReview: () => void;
}

export const QuizReview: React.FC<QuizReviewProps> = ({
  questions,
  selectedAnswers,
  score,
  isAllTopics,
  topicStats,
  onEndReview,
}) => {
  const percentage = Math.round((score / questions.length) * 100);
  const motivationalMessage = getMotivationalMessage(score, questions.length);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="bg-card p-4 sm:p-6 rounded-lg shadow-md border">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-card-foreground">
          Answer Review
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-muted-foreground space-y-1 sm:space-y-0">
          <span>
            Final Score: {score}/{questions.length} ({percentage}%)
          </span>
          <span className="text-green-600">{motivationalMessage}</span>
        </div>
        {isAllTopics && topicStats && (
          <div className="mt-3 p-3 bg-muted/50 rounded-md">
            <p className="text-xs text-muted-foreground font-medium mb-1">
              Questions Distribution:
            </p>
            <div className="text-xs text-muted-foreground">
              {Object.entries(topicStats).map(([topic, count], index) => (
                <span key={topic}>
                  📚 {topic} ({count} questions)
                  {index < Object.keys(topicStats).length - 1 && " • "}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {questions.map((q, index) => (
        <div key={q.id} className="relative">
          <div className="absolute -left-2 sm:-left-3 -top-2 sm:-top-3 bg-muted text-muted-foreground rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-bold text-xs sm:text-sm">
            {index + 1}
          </div>
          {/* Show topic name for mixed quizzes in review */}
          {isAllTopics && q.topicName && (
            <div className="mb-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md inline-block">
              📚 {q.topicName}
            </div>
          )}
          <QuizQuestionReview
            question={q}
            selectedAnswer={selectedAnswers[q.id]}
            correctAnswerId={q.correctAnswerId}
          />
        </div>
      ))}

      <div className="flex justify-center pt-4 sm:pt-6">
        <button
          onClick={onEndReview}
          className="bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] cursor-pointer text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-primary/90 font-semibold shadow-lg transition-all duration-200 hover:shadow-xl text-sm sm:text-base w-full sm:w-auto max-w-xs"
        >
          Finish Review
        </button>
      </div>
    </div>
  );
};