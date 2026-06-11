// components/QuizResults.tsx
import React from "react";
import { getMotivationalMessage } from "@/utils/quizUtils";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  answeredCount: number;
  isAllTopics: boolean;
  isTimeUp: boolean;
  topicStats: Record<string, number> | null;
  onReview: () => void;
  onSkipReview: () => void; // إضافة prop جديد
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalQuestions,
  answeredCount,
  isAllTopics,
  isTimeUp,
  onReview,
  onSkipReview, // استقبال الدالة الجديدة
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const motivationalMessage = getMotivationalMessage(score, totalQuestions);

  return (
    <div className="bg-card p-6 sm:p-8 rounded-lg shadow-md text-center max-w-sm sm:max-w-md mx-auto border">
      <div className="text-4xl sm:text-6xl mb-4">
        {isAllTopics ? "🎯" : "🎯"}
      </div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-card-foreground">
        {isAllTopics ? "Mixed Quiz Completed!" : "Quiz Completed!"}
      </h2>

      <div className="bg-muted p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
        <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
          {score}/{totalQuestions}
        </div>
        <div className="text-base sm:text-lg text-muted-foreground mb-2 sm:mb-3">
          {percentage}% Score
        </div>
        <div className="text-green-600 font-medium text-sm sm:text-base">
          {motivationalMessage}
        </div>
      </div>

      <div className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
        <p>
          You answered {answeredCount} out of {totalQuestions} questions
        </p>
        {isAllTopics && (
          <p className="text-blue-600 font-medium mt-1">
            🎯 From multiple topics mixed randomly
          </p>
        )}
        {isTimeUp && (
          <p className="text-orange-600 font-medium mt-2">
            ⏰ Quiz was automatically submitted when time ran out
          </p>
        )}
      </div>

      {/* تحديث منطقة الأزرار */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
        {/* زر مراجعة الإجابات */}
        <button
          onClick={onReview}
          className="bg-green-600 cursor-pointer text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-700 font-semibold transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto order-1 sm:order-1"
        >
          📝 Review Answers
        </button>

        {/* زر تخطي المراجعة */}
        <button
          onClick={onSkipReview}
          className="bg-blue-500 cursor-pointer text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto order-2 sm:order-2"
        >
          ⏭️ Skip Review
        </button>
      </div>

      {/* نص توضيحي صغير */}
      <div className="mt-4 text-xs sm:text-sm text-muted-foreground">
        <p>Choose to review your answers or skip to finish</p>
      </div>
    </div>
  );
};