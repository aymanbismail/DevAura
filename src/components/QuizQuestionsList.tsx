// components/QuizQuestionsList.tsx
import React from "react";
import QuizQuestion from "@/components/QuizQuestion";
import { EnhancedQuizQuestion } from "@/types/quizInterfaceAndType";

interface QuestionsListProps {
  questions: EnhancedQuizQuestion[];
  selectedAnswers: Record<string, string>;
  onAnswerSelect: (questionId: string, answerId: string) => void;
  isSubmitted: boolean;
  isAllTopics: boolean;
}

export const QuizQuestionsList: React.FC<QuestionsListProps> = ({
  questions,
  selectedAnswers,
  onAnswerSelect,
  isSubmitted,
  isAllTopics,
}) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {questions.map((q, index) => (
        <div key={q.id} className="relative">
          <div className="absolute -left-2 sm:-left-3 -top-2 sm:-top-3 bg-primary text-primary-foreground rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-bold text-xs sm:text-sm">
            {index + 1}
          </div>
          {/* Show topic name for mixed quizzes */}
          {isAllTopics && q.topicName && (
            <div className="mb-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md inline-block">
              📚 {q.topicName}
            </div>
          )}
          <QuizQuestion
            question={q}
            selectedAnswer={selectedAnswers[q.id]}
            onAnswerSelect={onAnswerSelect}
            isSubmitted={isSubmitted}
            showCorrectAnswer={isSubmitted}
          />
        </div>
      ))}
    </div>
  );
};